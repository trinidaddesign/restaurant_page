import './style.css';
import Godzilla from './images/godzilla.jpg'

export default function homePage(){
    const contentElement = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')
   

    const header = document.createElement('h1')
    header.textContent = 'Welcome to Godzilla pizza'
    pageContent.appendChild(header)

    const image = document.createElement('img')
    image.src = Godzilla
    image.height = '300'
    image.width = '300'
    pageContent.appendChild(image)

    const pElm = document.createElement('p')
    pElm.textContent = 'At Godzilla Pizza we crush taste buds like buildings'
    pageContent.appendChild(pElm)

    contentElement.appendChild(pageContent)
}

