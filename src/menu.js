import pizza_1 from './images/pizza_1.jpeg'
import './style.css'


export default function menu(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')

    const image = document.createElement('img')
    image.src = pizza_1
    image.height = '300'
    image.width = '300'
    pageContent.appendChild(image)

    const orderDiv = document.createElement('div')
    orderDiv.classList.add('button_div')
    orderDiv.textContent = "Order Now"
    pageContent.appendChild(orderDiv)
    orderDiv.addEventListener('click', () => {
        alert('clicked')
    })
    


    content.appendChild(pageContent)
}