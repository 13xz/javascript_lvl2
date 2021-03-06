const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
]
//Функция для формирования верстки каждого товара
const renderProduct = (x) => {
    return `<div class="product-item">
                <img class="item-img" src="img/item.jpg" alt="">
                <h3>${x.title}</h3>
                <p>${x.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
}
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join(' ')
    document.querySelector('.products').innerHTML = productsList
}

renderPage(products)