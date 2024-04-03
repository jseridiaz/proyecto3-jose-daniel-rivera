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

export const insertInfo = (parentNode) => {
  let foot = document.createElement('section')
  foot.classList.add('display', 'style-footer')
  foot.appendChild(UF)
  foot.appendChild(US)
  foot.appendChild(UT)
  parentNode.appendChild(foot)

  return foot
}

export const lastDivInformation = () => {
  const arrayRss = [
    {
      img: 'https://www.svgrepo.com/show/354000/linkedin-icon.svg',
      url: 'https://www.linkedin.com/in/josedanielriveradiaz/',
      rrss: 'Linkedin'
    },
    {
      img: 'https://www.svgrepo.com/show/486263/developer-centerpublic-api.svg',
      url: '#',
      rrss: 'Portafolio'
    },
    {
      img: 'https://www.svgrepo.com/show/512317/github-142.svg',
      url: 'https://github.com/jseridiaz',
      rrss: 'gitHub'
    }
  ]

  const footerContainer = document.createElement('footer')
  const article = document.createElement('article')
  const divContact = document.createElement('div')
  const divCopy = document.createElement('div')
  const divRrss = document.createElement('div')
  const divContainContact = document.createElement('div')
  const Ul = document.createElement('ul')

  footerContainer.id = 'footer-container'
  article.classList.add('flex-container')
  article.id = 'content-of-footer'
  divContact.classList.add('contact')
  divCopy.classList.add('copy-div')
  divRrss.classList.add('rrss-container')

  for (const item of arrayRss) {
    const svg = document.createElement('img')
    const li = document.createElement('li')
    const a = document.createElement('a')
    svg.src = item.img
    svg.loading = 'lazy'
    a.textContent = item.rrss
    a.href = item.url
    li.append(svg, a)
    Ul.append(li)
  }
  divContact.innerHTML = `<h3 class="title-contact flex-container-column">Erreichen Sie mich unter meiner E-Mail</h3>`
  divContainContact.innerHTML = `<img src="https://www.svgrepo.com/show/349379/gmail-old.svg" loading="lazy"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jseridiaz@gmail.com" target="_blanket">jseridiaz@gmail.com</a>`
  divCopy.innerHTML = `Von Jose Daniel Rivera Díaz entwickelt &copy All right reserved `
  divRrss.append(Ul)
  divContact.append(divContainContact)
  article.append(divRrss, divContact, divCopy)
  footerContainer.append(article)

  return footerContainer
}
