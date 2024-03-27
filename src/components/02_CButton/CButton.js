import './CButton.scss'

export const btnC = (
  text = '',
  bgColor = 'white',
  colorText = 'black',
  imgUrl = '',
  idS = '',
  title = ''
) => {
  let bt = document.createElement('button')
  let p = document.createElement('img')
  bt.textContent = text
  bt.style.background = bgColor
  bt.style.color = colorText
  bt.className = 'br-radius'

  bt.id = idS
  bt.title = title

  if (imgUrl !== '') {
    p.src = imgUrl
    p.loading = 'lazy'
    bt.appendChild(p)
  }

  return bt
}

let offFunctionBtn = (e, element) => {
  if (
    e.target.matches(
      '*:not(#uploads-container, #uploads-container *, #btn-notification,#btn-notification *,#article-message, #article-message *, #btn-comments,#btn-comments *,#btn-arrow, #btn-arrow *)'
    ) &&
    element.tagName == 'BUTTON'
  ) {
    element.children[0].style.opacity = 0.5
  } else if (
    e.target.matches(
      '*:not(#uploads-container, #uploads-container *, #btn-notification,#btn-notification *,#article-message, #article-message *, #btn-comments,#btn-comments *,#btn-arrow, #btn-arrow *)'
    ) &&
    element.tagName == 'BUTTON'
  ) {
    element.style.opacity = 0.5
  }
}

export const changeColorButtons = (selector) => {
  let readButtonsHeader = document.querySelectorAll(selector)

  for (let i = 0; i < readButtonsHeader.length; i++) {
    const element = readButtonsHeader[i]

    element.addEventListener('click', (e) => {
      if (e.target && e.target.tagName === 'BUTTON') {
        e.target.children[0].style.opacity = 1
        document.addEventListener('click', (e) => {
          offFunctionBtn(e, element)
        })
      } else if (e.target && e.target.tagName === 'IMG') {
        e.target.style.opacity = 1
        document.addEventListener('click', (e) => {
          offFunctionBtn(e, element)
        })
      }
      for (let j = 0; j < readButtonsHeader.length; j++) {
        const item = readButtonsHeader[j]
        if (j !== i) {
          item.children[0].style.opacity = 0.5
        }
      }
    })
  }
}
