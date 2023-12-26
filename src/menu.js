import pizza_1 from './images/pizza_1.jpeg'
import pizza_icon from './images/pizza_icon.png'

export default function menu(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    const icon = pizza_icon

    const image = document.createElement('img')
    image.src = pizza_1
    image.height = '300'
    image.width = '300'
    pageContent.appendChild(image)

    const btn = document.createElement('button')
    btn.height = '150'
    btn.width = '200'
    btn.textContent = 'Order Now!'
    pageContent.appendChild(btn)
    


    content.appendChild(pageContent)
}