import { btnC } from '../02_CButton/CButton'
import { functionGalleryCreate } from '../04_gallery/gallery'
import './input.scss'

export const functionInput = (imgUrl, placeholder) => {
  let d = document.createElement('div')
  let iI = document.createElement('img')
  let In = document.createElement('input')

  d.classList.add('style-input', 'flex-container', 'div-input')
  iI.src = imgUrl
  In.placeholder = placeholder
  In.type = 'text'
  In.classList.add('br-radius', 'style-input')
  d.appendChild(iI)
  d.appendChild(In)
  return d
}

export let Cls = (selector, parentNode, divNews) => {
  let Cc = document.createElement('div')

  Cc.id = 'Cl-container'
  let cl = btnC('x', '', '', '', 'Clear-cta')
  Cc.appendChild(cl)
  selector.addEventListener('focus', () => {
    parentNode.appendChild(Cc)
  })

  selector.addEventListener('blur', (e) => {
    if (e.relatedTarget == null) {
      Cc.remove()
    }
  })
  if (cl) {
    cl.addEventListener('click', (e) => {
      // document.querySelector('input').value = ''
      Cc.remove()
      divNews.classList.add('display')
    })
  }
  return Cc
}

export let containerF = (toAppend, array, title) => {
  let Fs = document.createElement('section')
  const h2 = document.createElement('h2')
  h2.textContent = title
  for (const element of array) {
    let ct = document.createElement('div')
    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    ct.classList.add('flex-container', 'single-new-container')
    img.src = element.img
    h3.textContent = element.category
    ct.appendChild(img)
    ct.appendChild(h3)
    Fs.appendChild(ct)
  }

  Fs.insertAdjacentElement('afterbegin', h2)
  toAppend.appendChild(Fs)
}
export let aIs = (toAppend, query) => {
  let res = fetch(
    `https://api.unsplash.com/search/photos?client_id=LzkVOm32NiYozQsqu20TP9cBnlr3pZveN0GsaHS0nEE&query=${query}`
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .then((res) => {
      if (!res || res == []) {
        toAppend.innerHTML = `<div class= "flex-container no-exist"> No se han encontrado resultados con la busqueda actual.Puedes volver a intentarlo más tarde. </div>`
      }
      return res
    })
    .then((res) => {
      functionGalleryCreate(res, toAppend)
      return res
    })
  return res
}
