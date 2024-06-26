import './style.scss'
import { iH, iI, iB } from './src/components/03_header/header'
import { functionGalleryCreate } from './src/components/04_gallery/gallery'
import { Cls, containerF } from './src/components/03_inputSearch/input'
import { searchF, funProf } from './src/components/04_searchFuction/searchF'
import {
  news,
  containerUploadCreate,
  nla,
  nln
} from './src/components/03_containerUploadCreate/containerUploadCreate'
import { containerChatCreate } from './src/components/03_containerChatCreate/containerChatCreate'
import { ShowHeaderContainer } from './src/components/03_toShowHeaderContainer/toShowHeaderContainer'
import { changCol } from './src/components/03_ul/ul'
import { changeColorButtons } from './src/components/02_CButton/CButton'
import {
  createListMoreBtn,
  list
} from './src/components/03_createListMoreBtn/createListMoreBtn'
import { lastDivInformation } from './src/components/06_footer/footer'

// *Lectura del container del header
let H = document.querySelector('header')

let Mi = document.createElement('main')
let footer = lastDivInformation()
document.body.appendChild(Mi)

Mi.classList.add('flex-container')

const mP = async () => {
  const arrayP = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${
      import.meta.env.VITE_SECRET_KEY
    }&Accept-Version=1&count=30`
  )
  const arrayp = await arrayP.json()

  functionGalleryCreate(arrayp, Mi)
  return arrayp
}
let PrintedArray = mP().then((res) => {
  document.body.appendChild(footer)
  return res
})
iH()
iI()
iB()
changCol({
  selector: 'header>article>nav>ul>li>*',
  classToAdd: 'black-w',
  classToRemove: 'white-b'
})

document.querySelector('#btn-home').addEventListener('click', (e) => {
  fetch(
    `https://api.unsplash.com/photos/random?client_id=${
      import.meta.env.VITE_SECRET_KEY
    }&Accept-Version=1&count=30`
  )
    .then((res) => res.json())
    .then((res) => {
      mP()
    })
})
document.querySelector('#btn-logo').addEventListener('click', (e) => {
  fetch(
    `https://api.unsplash.com/photos/random?client_id=${
      import.meta.env.VITE_SECRET_KEY
    }&Accept-Version=1&count=30`
  )
    .then((res) => res.json())
    .then((res) => {
      mP()
    })
})

const In = document.querySelector('input')
const Di = document.querySelector('.div-input')
const dIM = document.querySelector('.div-input>img')
let Fa = document.createElement('article')
In.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchF(Mi, 'input', e, PrintedArray, Fa)
  }
})
// addEventListener('mousemove', (e) => console.log(e.y))

dIM.addEventListener('click', (e) => {
  searchF(Mi, '.div-input > img', e, PrintedArray, Fa)
})

let Cc = Cls(In, Di, Fa)
Fa.classList.add('absolute', 'display')
Fa.id = 'recomended-target'
setTimeout(() => {
  Fa.addEventListener('click', (e) => {
    if (Fa.classList.contains('vis') && window.scrollscrollHeight > 2400) {
      document.querySelector('#more-pictures>span').classList.add('moved')
    } else {
      document.querySelector('#more-pictures>span').classList.remove('moved')
    }
  })
}, 2000)

containerF(Fa, nla, 'Ideas recommend to you')
containerF(Fa, nln, 'The most watched in Pinteres')

funProf(Fa, Mi)
// import of arrays
news
nla
nln
list
containerChatCreate('Posteingang', H)
containerUploadCreate(H, 'Neugkeiten', news)
ShowHeaderContainer(
  '#uploads-container',
  '#btn-notification',
  '*:not(#uploads-container, #uploads-container *, #btn-notification,#btn-notification *) '
)
ShowHeaderContainer(
  '#article-message',
  '#btn-comments',
  '*:not(#article-message, #article-message *, #btn-comments,#btn-comments *) '
)
H.appendChild(Fa)
changeColorButtons('header>#header-container>button', 'full-img')
let sectionMore = createListMoreBtn(list)

H.appendChild(sectionMore)
ShowHeaderContainer(
  '#main-article-more-info',
  '#btn-arrow',
  '*:not(#main-article-more-info, #main-article-more-info *, #btn-arrow,#btn-arrow *)'
)
