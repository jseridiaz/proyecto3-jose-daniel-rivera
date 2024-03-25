import './footer.scss'
import { btnC } from '../02_CButton/CButton'

export const footerBtn = (parentNode, title) => {
  let Af = btnC('?', '', '', '', 'footer-btn')
  Af.classList.add('rounded')
  Af.title = title
  parentNode.appendChild(Af)
  return Af
}
let fList = [
  {
    name: 'Hilfe Center besuchen',
    img: 'assets/external-link-icon-user-will-260nw-1564620319.webp',
    URL: 'https://help.pinterest.com/es?source=gear_menu_web'
  },
  {
    name: 'Widget erstellen',
    img: './assets/external-link-icon-user-will-260nw-1564620319.webp',
    URL: 'https://developers.pinterest.com/docs/add-ons/about-addons/'
  }
]
let sList = [
  {
    name: 'Kurzinfo',
    URL: 'https://help.pinterest.com/es/guide/all-about-pinterest'
  },
  { name: 'Blog', URL: 'https://newsroom.pinterest.com/es/' },
  { name: 'Unternehmen', URL: 'https://business.pinterest.com/es/' }
]
let tList = [
  { name: 'Arbeit bei uns', URL: 'https://www.pinterestcareers.com/en/' },
  { name: 'Entwickler', URL: 'https://developers.pinterest.com/' },
  { name: 'Entfernen', URL: 'https://policy.pinterest.com/es/copyright' },
  {
    name: 'Datenschutz',
    URL: 'https://help.pinterest.com/es/guide/all-about-pinterest'
  },
  {
    name: 'Personalizierte Anzeigen ',
    URL: 'https://help.pinterest.com/es/article/personalized-ads-on-pinterest'
  },
  {
    name: 'Deine Datenschutzlinie',
    URL: 'https://www.pinterest.es/settings/privacy/'
  },
  {
    name: 'Bedingungen',
    URL: 'https://policy.pinterest.com/es/terms-of-service'
  },
  {
    name: 'Impressum',
    URL: 'https://policy.pinterest.com/de/impressum'
  }
]

export const dF = (array) => {
  let ul = document.createElement('ul')

  for (const element of array) {
    if (element.img) {
      let liI = document.createElement('li')
      let a = document.createElement('a')
      let img = document.createElement('img')
      liI.title = element.name
      a.textContent = element.name
      a.href = element.URL
      a.target = '_blank'
      a.rel = 'noopener'
      img.src = element.img

      liI.appendChild(a)
      liI.appendChild(img)
      ul.appendChild(liI)
    } else {
      let liN = document.createElement('li')
      let a = document.createElement('a')
      a.textContent = element.name
      a.href = element.URL
      a.target = '_blank'
      a.rel = 'noopener'
      liN.appendChild(a)
      ul.appendChild(liN)
    }
  }
  return ul
}
let UF = dF(fList)
let US = dF(sList)
let UT = dF(tList)

export const aPF = (parentNode) => {
  let foot = document.createElement('footer')
  foot.classList.add('display', 'style-footer')
  foot.appendChild(UF)
  foot.appendChild(US)
  foot.appendChild(UT)
  parentNode.appendChild(foot)
  return foot
}
