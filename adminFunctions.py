import psycopg2
import hashlib

conn = psycopg2.connect(database="railway",
                        host="containers-us-west-198.railway.app",
                        user="postgres",
                        password="U1DAca2Gs75dhDjGyKV7",
                        port="6433")

cursorAdmin = conn.cursor()
cursorAdmin.execute("SELECT * FROM admin")
adminInfo = cursorAdmin.fetchall()
admin_password = adminInfo[0][1]
admin_login = adminInfo[0][0]


def verify_login(admin_login, inputLogin):
    if admin_login == inputLogin:
        return True
    else:
        return False


def verify_password(password, admin_password):
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    if hashed_password == admin_password:
        return True
    else:
        return False
