import itemArray from './item_array'
import './style.css'


function createMenuItemDiv(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')
    pageContent.setAttribute('id','menu')
    
    const itemDivObj = itemArray.forEach((item) => {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item_div')

        const itemImage = document.createElement('img')
        itemImage.classList.add('menu_image')
        itemImage.src = item.image
        itemDiv.appendChild(itemImage)

        const itemName = document.createElement('h3')
        itemName.classList.add('menu_h3')
        itemName.textContent = item.name
        itemDiv.appendChild(itemName)

        const itemDescription = document.createElement('p')
        itemDescription.classList.add('description_p_element')
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
        content.appendChild(pageContent)
    })

    return {itemDivObj}
}

export default function menu(){
    createMenuItemDiv()
} 