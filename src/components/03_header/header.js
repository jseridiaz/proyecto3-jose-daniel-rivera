import './header.scss'
import { btnC } from '../02_CButton/CButton'
import { ulCreate } from '../03_ul/ul'
import { aCreateFunction } from '../01_aButton/aButton'
import { functionInput } from '../03_inputSearch/input'

export const iH = () => {
  let aH = document.querySelector('#header-container')

  const nav = ulCreate()

  return aH.appendChild(nav)
}

export const iI = () => {
  let aH = document.querySelector('#header-container')

  let Di = functionInput(
    'https://res.cloudinary.com/ddybbosdk/image/upload/v1702770668/dfclvztsz4dxdrzhha4a.webp',
    'Suchen'
  )
  aH.appendChild(Di)
}

export const iB = () => {
  let aH = document.querySelector('#header-container')
  let arr = []
  let Bi = btnC(
    '',
    '',
    '',
    'https://icons.veryicon.com/png/o/miscellaneous/ionicons-1/ios-notifications-5.png',
    'btn-notification',
    'Benachrigtungen'
  )
  let Ba = btnC(
    '',
    '',
    '',
    'https://cdn-icons-png.flaticon.com/512/25/25355.png',
    'btn-comments',
    'Nachrichten'
  )
  let Ai = aCreateFunction('', '', 'black', '#', '', 'J')
  Ai.title = 'Dein Profil'
  let Bo = btnC(
    '',
    '',
    '',
    'https://cdn-icons-png.flaticon.com/512/25/25610.png',
    'btn-arrow',
    'Konto und mehr Optionen'
  )
  arr.push(Bi, Ba, Ai, Bo)

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    aH.appendChild(element)
  }
}
