import {
  toggle,
  addClass
} from '../05_toggleContainerUpload/toggleContainerUpload'

export let ShowHeaderContainer = (selectorDiv, btnToClick, eventToAvoid) => {
  let Ar = document.querySelector(selectorDiv)
  let btn = document.querySelector(btnToClick)
  console.log(Ar)
  btn.addEventListener('click', (e) => {
    toggle(Ar)
  })
  document.addEventListener('click', (e) => {
    if (!Ar.classList.contains('display') && e.target.matches(eventToAvoid)) {
      console.log(e)
      addClass(Ar)
    }
  })
}
