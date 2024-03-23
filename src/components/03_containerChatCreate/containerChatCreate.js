import './containerChatCreate.scss'
export let containerChatCreate = (title, toAppend) => {
  const mainarticle = document.createElement('article')
  const divFirstLine = document.createElement('div')
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const divInput = document.createElement('div')
  const imgSearch = document.createElement('img')
  const inputSearch = document.createElement('input')
  const divNewMessage = document.createElement('div')
  const imgNewMessege = document.createElement('img')
  const h4 = document.createElement('h4')
  divFirstLine.classList.add('flex-container')
  mainarticle.id = 'article-message'
  mainarticle.classList.add('absolute', 'display')
  h2.textContent = title
  img.src =
    'https://cdn.icon-icons.com/icons2/933/PNG/512/ellipsis_icon-icons.com_72770.png'
  divInput.id = 'container-input'
  imgSearch.src =
    'https://res.cloudinary.com/ddybbosdk/image/upload/v1702770668/dfclvztsz4dxdrzhha4a.webp'
  inputSearch.placeholder = 'Look for name or email '
  inputSearch.type = 'search'
  divNewMessage.id = 'container-new-message'
  imgNewMessege.src =
    '../assets/external-link-icon-user-will-260nw-1564620319.webp'
  h4.textContent = 'New message'
  divFirstLine.append(h2, img)
  divInput.append(imgSearch, inputSearch)
  divNewMessage.append(imgNewMessege, h4)
  mainarticle.append(divFirstLine, divInput, divNewMessage)
  toAppend.append(mainarticle)
}
