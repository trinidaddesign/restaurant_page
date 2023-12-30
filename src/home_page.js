import './style.css';
import Godzilla from './images/godzilla.jpg'

export default function homePage(){
    const contentElement = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')
    pageContent.setAttribute('id','home_page')


    const header = document.createElement('div')
    header.classList.add('home_header_div')
    const headerHone = document.createElement('h1')
    headerHone.classList.add('home_header_h1')
    headerHone.textContent = 'Welcome to Godzilla Pizza'
    header.appendChild(headerHone)
    pageContent.appendChild(header)

    const image = document.createElement('img')
    image.classList.add('godzilla_home_image')
    image.src = Godzilla
    pageContent.appendChild(image)

    const pElm = document.createElement('p')
    pElm.classList.add('home_p')
    pElm.textContent = 'At Godzilla Pizza we crush taste buds like buildings'
    pageContent.appendChild(pElm)

    contentElement.appendChild(pageContent)
}

