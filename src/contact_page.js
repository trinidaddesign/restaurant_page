import pizza_outside from './images/pizza_outside.jpg'

export default function contact(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')

    const header = document.createElement('h1')
    header.textContent = "Contact us for delivery or pick up"
    pageContent.appendChild(header)

    const image = document.createElement('img')
    image.src = pizza_outside
    image.height = '300'
    image.width = '300'
    pageContent.appendChild(image)

    content.appendChild(pageContent)
}