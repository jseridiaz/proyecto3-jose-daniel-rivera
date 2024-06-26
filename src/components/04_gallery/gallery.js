import { cardsFunction } from '../04_cards/cards'
import { insertInfo, footerBtn } from '../06_footer/footer'
import './gallery.scss'

export let functionGalleryCreate = (array, parentNode) => {
  parentNode.innerHTML = ''
  const buttonMehr = document.createElement('button')
  buttonMehr.innerHTML = `<span class="hide">More</span>`
  buttonMehr.id = 'more-pictures'
  buttonMehr.style.display = 'block'

  bucleToPrintCard(array, parentNode)

  if (!document.querySelector('#more-pictures')) {
    parentNode.insertAdjacentElement('afterend', buttonMehr)
  }

  buttonMehr.addEventListener('click', (e) => {})
  let bt = footerBtn(parentNode, 'Mehr')
  let foot = insertInfo(parentNode)
  let counter = 0
  const span = document.querySelector('#more-pictures>span')
  buttonMehr.addEventListener('mouseover', (e) => span.classList.remove('hide'))
  buttonMehr.addEventListener('mouseout', (e) => span.classList.add('hide'))

  buttonMehr.addEventListener('click', (e) => {
    counter += 1
    morePicturesEvent(counter, parentNode, buttonMehr)
  })
  bt.addEventListener('click', () => {
    foot.classList.toggle('display')
  })
}

const morePicturesEvent = async (counter, parentNode) => {
  let queryValue = document.querySelector('.style-input>input').value
  console.log(queryValue)
  if (queryValue === '') {
    const picturesRequest = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${
        import.meta.env.VITE_SECRET_KEY
      }&page=${counter}&Accept-Version=1&&count=30`
    ).then((res) => res.json())
    bucleToPrintCard(picturesRequest, parentNode)
  } else {
    const picturesRequest = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${
        import.meta.env.VITE_SECRET_KEY
      }&per_page=30&page=${counter}&query=${queryValue}`
    )
      .then((res) => res.json())
      .catch(
        (error) =>
          (parentNode.innerHTML = `<div class= flex-container no-exist> En estos momentos no hemos podido encontrar las imagenes pedidas. Puedes volver a intentarlo más tarde. Motivo: ${error}</div>`)
      )
      .then((res) => res.results)

    bucleToPrintCard(picturesRequest, parentNode)
  }
}
const bucleToPrintCard = (arrayR, parentNode) => {
  for (const element of arrayR) {
    let Cc = cardsFunction(
      element.urls.regular,
      element.user.name,
      element.user.instagram_username,
      element.alternative_slugs.de,
      element.id
    )
    parentNode.appendChild(Cc)
  }
}
