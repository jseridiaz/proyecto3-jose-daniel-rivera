import './createListMoreBtn.scss'

export let list = [
  {
    title: 'Your accounts',
    parraf: [
      { link: 'Add accounts', url: 'https://www.pinterest.es/add-account' },
      {
        link: 'Covert to business',
        url: 'https://www.pinterest.es/convert-business/'
      }
    ]
  },
  {
    title: 'More options',
    parraf: [
      {
        link: 'Reports and Violations Center',
        url: 'https://www.pinterest.es/reports-and-violations'
      },
      { link: 'Settings', url: 'https://www.pinterest.es/settings/' },
      {
        link: 'Tune your home feed',
        url: 'https://www.pinterest.es/edit/history'
      },
      { link: 'Install the Windows App', url: '#' },
      {
        link: 'Your privacity rigths',
        url: 'https://www.pinterest.es/settings/privacy/'
      },
      {
        link: 'get help',
        img: '../assets/external-link-icon-user-will-260nw-1564620319.webp',
        url: 'https://help.pinterest.com/en-gb?source=gear_menu_web'
      },
      {
        link: 'See terms of service',
        img: '../assets/external-link-icon-user-will-260nw-1564620319.webp',
        url: 'https://policy.pinterest.com/en-gb/terms-of-service'
      },
      {
        link: 'see Privacity policy',
        img: '../assets/external-link-icon-user-will-260nw-1564620319.webp',
        url: 'https://policy.pinterest.com/en-gb/privacy-policy'
      },
      {
        link: 'Be a beta tester',
        img: '../assets/external-link-icon-user-will-260nw-1564620319.webp',
        url: 'https://www.pinterest.es/public-beta/'
      },
      {
        link: 'Log out',
        img: '../assets/external-link-icon-user-will-260nw-1564620319.webp',
        url: '#'
      }
    ]
  }
]
export const createListMoreBtn = (array) => {
  const mainArticle = document.createElement('article')
  const firstSection = document.createElement('section')
  const h2 = document.createElement('h2')
  const divProfil = document.createElement('div')
  const span = document.createElement('span')
  const p = document.createElement('p')
  const spanInfo = document.createElement('span')
  const email = document.createElement('span')
  const check = document.createElement('img')

  check.src =
    'https://static-00.iconduck.com/assets.00/checkmark-icon-512x426-8re0u9li.png'
  email.textContent = 'Your email'
  spanInfo.textContent = 'Personal'
  p.textContent = 'Your Name'
  span.textContent = 'J'
  h2.textContent = 'Currently in'
  firstSection.id = 'first-info-profile-section'
  divProfil.id = 'profile-div-section'
  mainArticle.id = 'main-article-more-info'
  mainArticle.classList.add('absolute', 'display')
  divProfil.append(p, spanInfo, email)
  firstSection.append(span, divProfil, check)
  mainArticle.append(h2, firstSection)

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const eachSection = document.createElement('section')
    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')

    h3.textContent = element.title
    eachSection.id = `section-more-info-${i + 1}`

    for (const key in element) {
      if (key == 'parraf') {
        const link = element[key]
        for (const item of link) {
          const li = document.createElement('li')
          const a = document.createElement('a')
          const img = document.createElement('img')
          a.textContent = item.link
          a.href = item.url
          a.target = '_blank'
          a.rel = 'noopener noreferrer'
          if (item.img) {
            img.src = item.img
            a.appendChild(img)
          }
          li.appendChild(a)
          ul.appendChild(li)
        }
      }
    }
    eachSection.append(h3, ul)
    mainArticle.append(eachSection)
  }
  return mainArticle
}
