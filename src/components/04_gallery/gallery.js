import { cardsFunction } from '../04_cards/cards'
import { aPF, footerBtn } from '../06_footer/footer'

export let functionGalleryCreate = (array, parentNode) => {
  parentNode.innerHTML = ''
  for (const element of array) {
    let Cc = cardsFunction(
      element.urls.regular,
      element.user.name,
      element.user.instagram_username,
      element.alternative_slugs.de
    )

    parentNode.appendChild(Cc)
  }

  let bt = footerBtn(parentNode, 'Mehr')
  let foot = aPF(parentNode)

  bt.addEventListener('click', () => {
    foot.classList.toggle('display')
  })
}
