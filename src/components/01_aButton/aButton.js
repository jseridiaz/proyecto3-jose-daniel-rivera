export const aCreateFunction = (
  text = '',
  bgColor = 'white',
  colorText = 'black',
  hUrl = '',
  imgUrl = '',
  span = '',
  id = ''
) => {
  let a = document.createElement('a')
  let p = document.createElement('img')
  let sp = document.createElement('span')
  a.textContent = text
  a.style.background = bgColor
  a.style.color = colorText
  a.href = hUrl
  a.target = '_blank'
  a.className = 'br-radius'
  a.className = 'flex-container'
  a.id = id

  if (imgUrl !== '') {
    p.src = imgUrl
    p.loading = 'lazy'
    a.appendChild(p)
  }
  if (span != '') {
    sp.textContent = span
    a.appendChild(sp)
  }

  return a
}
