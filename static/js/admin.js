/* Déclaration des variables */

let label = document.getElementById('label')
let category = document.getElementById('category')
let description = document.getElementById('description')
let price = document.getElementById('price')
let discount = document.getElementById('discount')
let image = document.getElementById('image')
let reference = document.getElementById('reference')
let addDiscount = document.getElementById('addDiscount')

/* Variables pour les validations */
let labelHelper = document.getElementById('labelHelper')
let categoryHelper = document.getElementById('categoryHelper')
let descriptionHelper = document.getElementById('descriptionHelper')
let priceHelper = document.getElementById('priceHelper')
let discountHelper = document.getElementById('discountHelper')
let referenceHelper = document.getElementById('referenceHelper')
let addDiscountHelper = document.getElementById('addDiscountHelper')

/* Variables pour les boutons */
let submitArticle = document.getElementById('submitArticle')
let submitDiscount = document.getElementById('submitDiscount')


/* Vérification des données rentrées dans le formulaire */

/* ARTICLE PART */

function shieldAgainstInjectionsAttack(injection) {
    const regex = /[@#$%^*()_+\-=\[\]{};\\|<>\/]/g;
    return regex.test(injection);
}

label.addEventListener('keyup', function() {
    let labelText = ''
    if (shieldAgainstInjectionsAttack(label.value)) {
        labelText = 'Les caractères spéciaux dans le Label ne sont pas autorisés.';
    } else {
        labelText = ''
    }
    labelHelper.innerText = labelText
})
category.addEventListener('keyup', function() {
    let categoryText = ''
    if (shieldAgainstInjectionsAttack(category.value)) {
        categoryText = 'Les caractères spéciaux dans la Catégorie ne sont pas autorisés.';
    } else {
        categoryText += ''
    }
    categoryHelper.innerText = categoryText
})
description.addEventListener('keyup', function() {
    let descriptionText = ''
    if (shieldAgainstInjectionsAttack(description.value)) {
        descriptionText = 'Les caractères spéciaux dans la Description ne sont pas autorisés.';
    } else {
        descriptionText += ''
    }
    descriptionHelper.innerText = descriptionText
})
price.addEventListener('keyup', function() {
    let priceText = ''
    let value = price.value.trim()
    let intValue = parseInt(price.value)
    if (Number.isInteger(intValue) && value === intValue.toString()) {
        priceText = '';
    } else {
        if (price.value !== '') {
            priceText = 'Seul les chiffres entiers et sans espace sont autorisés pour le Prix.'
        } else {
            priceText = ''
        }
    }
    priceHelper.innerText = priceText
})
discount.addEventListener('keyup', function() {
    let discountText = ''
    let value = discount.value.trim()
    let intValue = parseInt(discount.value)
    if (Number.isInteger(intValue) && value === intValue.toString()) {
        discountText = '';
    } else {
        if (discount.value !== '') {
        discountText = 'Seul les chiffres entiers et sans espace sont autorisés pour la Remise.'
    } else {
        discountText = ''
    }
}
    discountHelper.innerText = discountText
})


/* DISCOUNT PART */

let textDiscount = ''
reference.addEventListener('keyup', function() {
    let referenceText = ''
    let value = reference.value.trim()
    let intValue = parseInt(reference.value)
    if (Number.isInteger(intValue) && value === intValue.toString()) {
        referenceText = '';
    } else {
        if (reference.value !== '') {
            referenceText = 'Seul les chiffres entiers et sans espace sont autorisés en guise de Numéro de référence'
        } else {
            referenceText =''
        }
    }
    referenceHelper.innerText = referenceText
})
addDiscount.addEventListener('keyup', function() {
    let addDiscountText = ''
    let value = addDiscount.value.trim()
    let intValue = parseInt(addDiscount.value)
    if (Number.isInteger(intValue) && value === intValue.toString()) {
        addDiscountText = '';
    } else {
        if (addDiscount.value !== '') {
            addDiscountText = 'Seul les chiffres entiers et sans espace sont autorisés pour la réduction à appliquer'
        } else {
            addDiscountText = ''
        }
    }
    addDiscountHelper.innerText = addDiscountText
})



/* BOUTON DISABLED OR NOT */
document.addEventListener('keyup', function() {

    /* Vérification du submit article*/
    if (labelHelper.innerText === ''
        && categoryHelper.innerText === ''
        && descriptionHelper.innerText === ''
        && priceHelper.innerText === ''
        && discountHelper.innerText === '') {
        submitArticle.removeAttribute('disabled')
    } else {
        submitArticle.setAttribute('disabled', '')
    }

    /* Vérification du submit discount */
    if (referenceHelper.innerText === ''
        && addDiscountHelper.innerText === '') {
        submitDiscount.removeAttribute('disabled')
    } else {
        submitDiscount.setAttribute('disabled', '')
    }
})


