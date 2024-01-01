import pizza_outside from './images/pizza_outside.jpg'
import tokyoMap from './images/tokyo_map.jpeg'
import './style.css'

export default function contact(){
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page_content')
    pageContent.setAttribute('id', 'contact')

    const header = document.createElement('h1')
    header.textContent = "Contact us for delivery or pick up"
    pageContent.appendChild(header)

    const phoneLinkDiv = document.createElement('div')
    phoneLinkDiv.classList.add('phone_link_div')
    const phoneNumber = document.createElement('a')
    phoneNumber.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    phoneNumber.textContent = '817-666-1234'
    phoneLinkDiv.appendChild(phoneNumber)
    pageContent.appendChild(phoneLinkDiv)

    const buildingDiv = document.createElement('div')
    buildingDiv.classList.add('building_image')
    const image = document.createElement('img')
    image.src = pizza_outside
    image.height = '300'
    image.width = '300'
    buildingDiv.appendChild(image)
    pageContent.appendChild(buildingDiv)

    const mapDiv = document.createElement('div')
    mapDiv.classList.add('map_div')
    const mapImage = document.createElement('img')
    mapImage.src = tokyoMap
    mapImage.height = '300'
    mapImage.width = '300'
    mapDiv.appendChild(mapImage)
    pageContent.appendChild(mapDiv)

    content.appendChild(pageContent)
}