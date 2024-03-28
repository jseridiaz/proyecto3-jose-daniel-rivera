import { btnC } from '../02_CButton/CButton'
import './cards.scss'
export const cardsFunction = (imgUrl = '', usuario, instagram, description) => {
  let Fd = document.createElement('article')
  let sD = document.createElement('div')
  let a = document.createElement('a')
  let p = document.createElement('img')
  let divInfoLeft = document.createElement('div')
  let divInfoRight = document.createElement('div')
  let directionToPicture = document.createElement('a')

  a.href = imgUrl
  a.target = '_blank'

  Fd.classList.add('main-div-card')
  Fd.style.position = 'relative'
  sD.classList.add('single-div-img')
  directionToPicture.href = imgUrl
  directionToPicture.target = '_blank'
  directionToPicture.rel = 'noopener noreferer'
  directionToPicture.classList.add('watch', 'absolute-real', 'rounded')
  divInfoLeft.classList.add('info-div-left', 'absolute-real', 'reduced')
  divInfoRight.classList.add('info-div-right', 'absolute-real', 'reduced')

  divInfoLeft.innerHTML = `<h4 class="nameUser" >${usuario}</h4> <h5 class="instagram"><img src="https://img.freepik.com/vektoren-premium/instagram-beliebtes-social-media-symbol-nur-redaktioneller-beitrag-kiew-ukraine-3-dezember-2019_944081-64.jpg" >${instagram}</h5>`
  divInfoRight.innerHTML = `<p class="decription-paragraph">${description.replaceAll(
    '-',
    ' '
  )}</p>`

  aleatorietyColor(divInfoLeft)
  aleatorietyColor(divInfoRight)

  animationDivsCards(divInfoLeft, divInfoRight, sD)
  if (imgUrl !== '') {
    p.src = imgUrl

    p.loading = 'lazy'

    a.appendChild(p)
    sD.appendChild(a)
  }

  let btnS = btnC('Speichern', '', 'white', '', '')
  btnS.classList.add('container-save-card')
  btnS.style.position = 'absolute'
  btnS.classList.remove('flex-container')

  let btnD = btnC(
    '',
    '',
    '',
    'https://static.thenounproject.com/png/3974682-200.png',
    ''
  )
  btnD.classList.add('container-dowload', 'rounded')
  btnD.style.position = 'absolute'
  btnD.classList.remove('flex-container')

  let btnM = btnC(
    '',
    '',
    '',
    'https://cdn.icon-icons.com/icons2/685/PNG/512/other_icon-icons.com_61214.png',
    ''
  )
  btnM.classList.add('container-see-more', 'rounded')
  btnM.style.position = 'absolute'
  btnM.classList.remove('flex-container')
  directionToPicture.appendChild(btnD)
  sD.append(divInfoLeft, divInfoRight, btnS, directionToPicture, btnM)

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

const animationDivsCards = (divleft, divright, container) => {
  container.addEventListener('mouseover', (e) => {
    divleft.classList.toggle('explained')
    divright.classList.toggle('explained')
    divleft.classList.toggle('reduced')
    divright.classList.toggle('reduced')

    changeColorRight(divright)
    changeColorLeft(divleft)

    if (divleft.childNodes[2].childNodes[1].data == null) {
      console.log('no')
    }
  })
  container.addEventListener('mouseout', (e) => {
    divleft.classList.toggle('explained')
    divright.classList.toggle('explained')
    divleft.classList.toggle('reduced')
    divright.classList.toggle('reduced')
  })
}

const aleatorietyColor = (div) => {
  const color = Math.ceil(Math.random() * 11)

  div.style.backgroundColor = `var(--rtc-special-color-${color})`
}

const changeColorRight = (divright) => {
  if (
    divright.style.backgroundColor == 'var(--rtc-special-color-1)' ||
    divright.style.backgroundColor == 'var(--rtc-special-color-4)' ||
    divright.style.backgroundColor == 'var(--rtc-special-color-11)'
  ) {
    divright.childNodes[0].style.color = 'white'
  }
}
const changeColorLeft = (divleft) => {
  if (
    divleft.style.backgroundColor == 'var(--rtc-special-color-10)' ||
    divleft.style.backgroundColor == 'var(--rtc-special-color-9)' ||
    divleft.style.backgroundColor == 'var(--rtc-special-color-11)'
  ) {
    divleft.childNodes[2].style.color = 'red'
  }
  if (divleft.childNodes[2].childNodes[1].data === 'null') {
    divleft.childNodes[2].childNodes[1].textContent = 'Unbestimmt'
  }
}
