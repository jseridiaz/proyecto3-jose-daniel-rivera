import { btnC } from '../02_CButton/CButton'
import './cards.scss'
export const cardsFunction = (imgUrl = '') => {
  let Fd = document.createElement('article')
  let sD = document.createElement('div')
  let a = document.createElement('a')
  let p = document.createElement('img')

  a.href = imgUrl
  a.target = '_blank'

  Fd.classList.add('main-div-card')
  Fd.style.position = 'relative'
  sD.classList.add('single-div-img')
  if (imgUrl !== '') {
    p.src = imgUrl

    p.loading = 'lazy'

    a.appendChild(p)
    sD.appendChild(a)
  }

  let btnS = btnC('Speichern', '', 'white', '', '')
  btnS.classList.add('container-save-card')
  btnS.style.position = 'absolute'

  let btnD = btnC(
    '',
    '',
    '',
    'https://static.thenounproject.com/png/3974682-200.png',
    ''
  )
  btnD.classList.add('container-dowload', 'rounded')
  btnD.style.position = 'absolute'

  let btnM = btnC(
    '',
    '',
    '',
    'https://cdn.icon-icons.com/icons2/685/PNG/512/other_icon-icons.com_61214.png',
    ''
  )
  btnM.classList.add('container-see-more', 'rounded')
  btnM.style.position = 'absolute'

  sD.appendChild(btnS)
  sD.appendChild(btnD)
  sD.appendChild(btnM)
  Fd.appendChild(sD)

  Fd.addEventListener('mouseover', (e) => {
    btnS.classList.toggle('block')
    btnD.classList.toggle('block')
    btnM.classList.toggle('block')
  })
  Fd.addEventListener('mouseout', (e) => {
    btnS.classList.toggle('block')
    btnD.classList.toggle('block')
    btnM.classList.toggle('block')
  })
  return Fd
}
