import { aCreateFunction } from '../01_aButton/aButton'
import './ul.scss'

const Lc = aCreateFunction(
  '',
  'transparent',
  '',
  'https://www.pinterest.es/',
  'https://res.cloudinary.com/ddybbosdk/image/upload/v1702769585/coyrcy80fgnitzky8wl5.webp'
)
const L2 = aCreateFunction('Home', '', '', '', '', '', 'btn-home')
L2.classList.add('black-w')
const l3 = aCreateFunction('Explore', '', '', 'https://www.pinterest.es/today/')
const l4 = aCreateFunction(
  'Create',
  '',
  '',
  'https://www.pinterest.es/pin-creation-tool/',
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
  console.log(read)

  for (let i = 0; i < read.length; i++) {
    const element = read[i]
    element.addEventListener('click', (e) => {
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
