import { aCreateFunction } from '../01_aButton/aButton'
import { btnC } from '../02_CButton/CButton'
import './ul.scss'

const Lc = btnC(
  '',
  'transparent',
  '',
  'https://res.cloudinary.com/ddybbosdk/image/upload/v1712390544/Logo_Fotogallery_wm24qa.png',
  'btn-logo'
)
const L2 = btnC('Home', '', '', '', 'btn-home', 'Home')
L2.classList.add('black-w')

const l3 = aCreateFunction('Entdecken', '', '', '#')
const l4 = aCreateFunction(
  'Erstellen',
  '',
  '',
  '#',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7lQ2oYn7tNiO_9Ml77tqJaR28AzFRar7rA&usqp=CAU'
)

export const ulCreate = () => {
  let array = []
  let Ul = document.createElement('ul')
  let nv = document.createElement('nav')

  Ul.classList.add('flex-container')
  array.push(Lc, L2, l3, l4)
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    let li = document.createElement('li')
    li.id = `li${i + 1}`
    li.classList.add('rounded', 'flex-container')
    li.appendChild(element)
    Ul.appendChild(li)
  }

  nv.appendChild(Ul)
  return nv
}
let addDisplay = (element) => {
  if (element.childNodes[1]) {
    element.childNodes[1].classList.add('display')
  }
}
let removeDisplay = (element) => {
  if (element.childNodes[1]) {
    element.childNodes[1].classList.remove('display')
  }
}
export const changCol = ({ selector, classToAdd, classToRemove }) => {
  const read = document.querySelectorAll(selector)

  for (let i = 0; i < read.length; i++) {
    const element = read[i]
    element.addEventListener('click', (e) => {
      // fetch(
      //   `https://api.unsplash.com/photos/random?client_id=${
      //     import.meta.env.VITE_SECRET_KEY
      //   }&Accept-Version=1&count=30`
      // )
      //   .then((res) => res.json())
      //   .then((res) => functionGalleryCreate(arrayp, Mi))

      element.classList.add(classToAdd)
      addDisplay(element)
      if (element.classList.contains(classToRemove)) {
        element.classList.remove(classToRemove)
      }

      for (let j = 0; j < read.length; j++) {
        const item = read[j]

        if (j != i) {
          item.classList.remove(classToAdd)
          removeDisplay(item)
        }
      }
    })
  }
}
