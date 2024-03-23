import './style.scss'
import { iH, iI, iB } from './src/components/03_header/header'
import { functionGalleryCreate } from './src/components/04_gallery/gallery'
import { Cls, containerF } from './src/components/03_inputSearch/input'
import { searchF, funProf } from './src/components/03_searchFuction/searchF'
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
// *Lectura del container del header

let H = document.querySelector('header')

iH()
iI()
iB()
changCol({
  selector: 'header>article>nav>ul>li>a',
  classToAdd: 'black-w',
  classToRemove: 'white-b'
})

let Mi = document.createElement('main')

document.body.appendChild(Mi)
Mi.classList.add('flex-container')

const mP = async () => {
  const arrayP = await fetch(
    'https://api.unsplash.com/photos/random?client_id=LzkVOm32NiYozQsqu20TP9cBnlr3pZveN0GsaHS0nEE&Accept-Version=1&count=30'
  )
  const arrayp = await arrayP.json()
  return arrayp
}

let Print = () => {
  mP().then((res) => {
    console.log(res)
    functionGalleryCreate(res, Mi)
    return res
  })
}

Print()

const In = document.querySelector('input')
const Di = document.querySelector('.div-input')
const dIM = document.querySelector('.div-input>img')
let Fa = document.createElement('article')
In.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchF(Mi, 'input', e, mP(), Fa)
  }
})

dIM.addEventListener('click', (e) =>
  searchF(Mi, '.div-input > img', e, mP(), Fa)
)

let Cc = Cls(In, Di, Fa)
Fa.classList.add('absolute', 'display')
Fa.id = 'recomended-target'

containerF(Fa, nla, 'Ideas recommend to you')
containerF(Fa, nln, 'The most watched in Pinteres')

funProf(Fa, Mi)
// import of arrays
news
nla
nln
list
containerChatCreate('Inbox', H)
containerUploadCreate(H, 'Uploads', news)
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
console.log(sectionMore)
H.appendChild(sectionMore)
ShowHeaderContainer(
  '#main-article-more-info',
  '#btn-arrow',
  '*:not(#main-article-more-info, #main-article-more-info *, #btn-arrow,#btn-arrow *)'
)
