import './style.css';
import Godzilla from './images/godzilla.jpg'

export default function homePage(){
    const contentElement = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')
    pageContent.setAttribute('id','home_page')


    const header = document.createElement('h1')
    header.classList.add('menu_header')
    header.textContent = 'Welcome to Godzilla pizza'
    pageContent.appendChild(header)

    const image = document.createElement('img')
    image.classList.add('godzilla_home_image')
    image.src = Godzilla
    image.height = '300'
    image.width = '300'
    pageContent.appendChild(image)

    const pElm = document.createElement('p')
    pElm.classList.add('home_p')
    pElm.textContent = 'At Godzilla Pizza we crush taste buds like buildings'
    pageContent.appendChild(pElm)

    contentElement.appendChild(pageContent)
}

