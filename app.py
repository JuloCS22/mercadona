from flask import Flask, redirect, url_for, request
from flask import render_template
import psycopg2, os, random
from adminFunctions import verify_password, verify_login, admin_password, admin_login
from werkzeug.utils import secure_filename

app = Flask(__name__)


@app.route('/')
def homepage():
    conn = psycopg2.connect(database="railway",
                            host="containers-us-west-198.railway.app",
                            user="postgres",
                            password="U1DAca2Gs75dhDjGyKV7",
                            port="6433")

    cursorArticles = conn.cursor()
    cursorArticles.execute("SELECT * FROM mercadona")
    articlesDB = cursorArticles.fetchall()

    return render_template('homepage.html', articlesDB=articlesDB)


@app.route('/log')
def log():
    return render_template('log.html')


@app.route('/products')
def products():
    return render_template('products.html')


@app.route('/about_us')
def about_us():
    return render_template('about_us.html')


@app.route('/log', methods=['POST'])
def login_post():
    inputLogin = request.form['inputLogin']
    inputPassword = request.form['inputPassword']
    if verify_password(inputPassword, admin_password) and verify_login(admin_login, inputLogin):
        return redirect(url_for('admin'))
    else:
        return redirect(url_for('adminKO'))


@app.route('/admin')
def admin():
    return render_template('adminpage.html')


@app.route('/adminKO')
def adminKO():
    return render_template('adminpageKO.html')


@app.route('/add_product', methods=['POST'])
def add_product():
    label = request.form['label']
    category = request.form['category']
    description = request.form['description']
    price = request.form['price']
    discount = request.form['discount']
    image = request.files['image']
    default_discount = 0

    if image:
        filename = str(random.randint(0, 100000)) + secure_filename(image.filename)
        ext = os.path.splitext(filename)[1].lower()
        if ext not in ['.jpg', '.jpeg', '.png', '.gif']:
            return render_template('adminpage.html', message="Le type de fichier n'est pas autorisé.")

        # Enregistrement de l'image
        image_folder = os.path.join(app.root_path, 'static/images')
        os.makedirs(image_folder, exist_ok=True)
        image_path = os.path.join(image_folder, filename)
        image.save(image_path)
        image_url = '/static/images/' + filename

        conn = psycopg2.connect(database="railway",
                                host="containers-us-west-198.railway.app",
                                user="postgres",
                                password="U1DAca2Gs75dhDjGyKV7",
                                port="6433")

        cur = conn.cursor()

        if discount:
            cur.execute(
                "INSERT INTO mercadona (label, category, description, price, discount, image) VALUES (%s, %s, %s, %s, %s, %s)",
                (label, category, description, price, discount, image_url))
        else:
            cur.execute(
                "INSERT INTO mercadona (label, category, description, price, discount, image) VALUES (%s, %s, %s, %s, %s, %s)",
                (label, category, description, price, default_discount, image_url))

        conn.commit()
        cur.close()
        conn.close()

        return redirect(url_for('admin', message="Le produit a été ajouté avec succès."))


@app.route('/add_discount', methods=['POST'])
def add_discount():
    reference = request.form['reference']
    add_discount = int(request.form['addDiscount'])

    conn = psycopg2.connect(database="railway",
                            host="containers-us-west-198.railway.app",
                            user="postgres",
                            password="U1DAca2Gs75dhDjGyKV7",
                            port="6433")

    cur = conn.cursor()

    cur.execute(
        "UPDATE mercadona SET discount = %s WHERE id= %s",
        (add_discount, reference))

    conn.commit()
    cur.close()
    conn.close()

    return redirect(url_for('admin', message="La promotion a été ajoutée avec succès."))


@app.route('/category', methods=['GET', 'POST'])
def category():
    conn = psycopg2.connect(database="railway",
                            host="containers-us-west-198.railway.app",
                            user="postgres",
                            password="U1DAca2Gs75dhDjGyKV7",
                            port="6433")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM mercadona")
    articles = cursor.fetchall()

    # Vérifiez si le formulaire a été soumis avec une catégorie sélectionnée
    category = request.form['category']
    if category:
        # Filtrer les articles par catégorie si une catégorie a été sélectionnée
        cursor = conn.cursor()
        query = "SELECT * FROM mercadona WHERE category=%s"
        cursor.execute(query, (category,))
        articles = cursor.fetchall()
        cursor.close()

    return render_template('homepage.html', articlesDB=articles)


if __name__ == '__main__':
    app.run()
