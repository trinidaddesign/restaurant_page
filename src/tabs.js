import homePage from './home_page'
import menu from './menu'
import contact from './contact_page'
import './style.css'

export default function tabs(){
    const content = document.querySelector('#content')
    const tabContainer = document.createElement('div')
    tabContainer.classList.add('tab_container')

    const div1 = document.createElement('div')
    div1.classList.add('tab')
    div1.textContent = 'home'
    div1.addEventListener('click', ()=> {
        clearContent()
        homePage()
    })

    const div2 = document.createElement('div')
    div2.classList.add('tab')
    div2.textContent = 'menu'
    div2.addEventListener('click', ()=> {
        clearContent()
        menu()
    })

    const div3 = document.createElement('div')
    div3.classList.add('tab')
    div3.textContent = 'contact'
    div3.addEventListener('click', ()=> {
        clearContent()
        contact()
    })

    tabContainer.appendChild(div1)
    tabContainer.appendChild(div2)
    tabContainer.appendChild(div3)

    content.appendChild(tabContainer)
}

function clearContent(){
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page_content')

    if(pageContent){
        content.removeChild(pageContent)
    }
}