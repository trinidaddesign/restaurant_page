import pizzaOne from './images/pizza_1.jpeg'
import pizzaTwo from './images/pizza_2.jpeg'
import pizzaThree from './images/pizza_3.jpeg'
import './style.css'

const itemArray = [
    {
        name:'pizza1',
        image: pizzaOne,
        description: 'a simple pizza',
        price: '$12'
    },
    {
        name: 'pizza2',
        image: pizzaTwo,
        description: 'another simple pizza',
        price: '$14'
    },
    {
        name: 'pizza3',
        image: pizzaThree,
        description: 'tasty pizza 3',
        price: '$10'
    },

]

function createMenuItemDiv(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')
    pageContent.setAttribute('id','menu')
    
    itemArray.forEach((item) => {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item_div')

        const itemImage = document.createElement('img')
        itemImage.src = item.image
        itemDiv.appendChild(itemImage)

        const itemName = document.createElement('h3')
        itemName.textContent = item.name
        itemDiv.appendChild(itemName)

        const itemDescription = document.createElement('p')
        itemDescription.textContent = item.description
        itemDiv.appendChild(itemDescription)

        const itemPrice = document.createElement('p')
        itemPrice.classList.add('price_p_element')
        itemPrice.textContent = item.price
        itemDiv.appendChild(itemPrice)

        const orderBtn = document.createElement('button')
        orderBtn.classList.add('order_button')
        orderBtn.innerHTML = 'Order Me!'
        orderBtn.addEventListener('click', ()=>{
            alert('yo')
        })
        itemDiv.appendChild(orderBtn)

        pageContent.appendChild(itemDiv)
    })

    content.appendChild(pageContent)
}

export default function menu(){
    createMenuItemDiv()
} 