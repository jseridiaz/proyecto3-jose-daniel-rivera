// *function to click
import { functionGalleryCreate } from '../04_gallery/gallery'
import { aIs } from '../03_inputSearch/input'
import { insertInfo, footerBtn } from '../06_footer/footer'
export const searchF = (parentNode, selector, e, original, divNew) => {
  let query

  const In = document.querySelector(selector)

  if (e.type == 'keydown') {
    if (e.key == 'Enter') {
      query = In.value
      if (query == '') {
        original.then((res) => functionGalleryCreate(res, parentNode))
      } else {
        let footer = document.querySelector('#footer-container')
        fetch(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_SECRET_KEY
          }&per_page=30&query=${query}`
        )
          .then((res) => res.json())
          .then((res) => res.results)
          .then((res) => {
            if (res.length > 4) {
              functionGalleryCreate(res, parentNode)
              footer.classList.remove('absolute-footer')
              footer.classList.remove('relative-footer')
              document.querySelector('#more-pictures').style.display = 'block'
            } else if (res.length <= 4) {
              functionGalleryCreate(res, parentNode)
              footer.classList.add('relative-footer')
              footer.classList.remove('absolute-footer')
            } else {
              parentNode.innerHTML = `<div class= "flex-container no-exist"> No se han encontrado resultados con la busqueda actual. Puedes volver a intentarlo más tarde. </div>`
              let buttonInfo = footerBtn(parentNode, 'Mehr')
              let sectionInfo = insertInfo(parentNode)
              document.querySelector('#more-pictures').style.display = 'none'
              buttonInfo.addEventListener('click', (e) =>
                sectionInfo.classList.toggle('display')
              )
              footer.classList.add('absolute-footer')
              footer.classList.remove('relative-footer')
            }
          })

        divNew.classList.add('display')
      }
    }
  } else if (e.type == 'click') {
    query = In.nextSibling.value
    if (query == '') {
      original.then((res) => functionGalleryCreate(res, parentNode))
    } else {
      fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_SECRET_KEY
        }&query=${query}`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          return res
        })
        .then((res) => res.results)
        .then((res) => {
          let footer = document.querySelector('#footer-container')
          if (res.length > 4) {
            functionGalleryCreate(res, parentNode)
            footer.classList.remove('absolute-footer')
            document.querySelector('#more-pictures').style.display = 'block'
          } else if (res.length <= 4) {
            functionGalleryCreate(res, parentNode)
            footer.classList.add('relative-footer')
            footer.classList.remove('absolute-footer')
          } else {
            console.log(res)
            ;(parentNode.innerHTML = `<div class= "flex-container no-exist"> No se han encontrado resultados con la busqueda actual. Puedes volver a intentarlo más tarde. </div>`),
              insertInfo(parentNode),
              footer.classList.add('absolute-footer')
            document.querySelector('#more-pictures').style.display = 'none'
          }
        })
      divNew.classList.add('display')
    }
  }
}

export let funProf = (Fa, ToAppend) => {
  let In = document.querySelector('input')
  In.addEventListener('focus', () => {
    Fa.classList.toggle('display')
    Fa.classList.add('vis')
    if (Fa.classList.contains('vis')) {
      let ct = document.querySelectorAll('#recomended-target>section>div')
      let h3 = document.querySelectorAll('#recomended-target>section>div>h3')
      let im = document.querySelectorAll('#recomended-target>section>div>img')

      document.addEventListener('click', (e) => {
        if (e.target.matches('#header-container')) {
          Fa.classList.add('display')
        }
      })
      ToAppend.addEventListener('click', (e) => {
        if (
          e.target &&
          (e.target.tagName === 'MAIN' || e.target.tagName === 'IMG')
        ) {
          Fa.classList.add('display')
        }
      })

      for (const element of ct) {
        element.addEventListener('click', (e) => {
          e.stopPropagation()

          let query = e.target.children[1].textContent
          let res = aIs(ToAppend, query).then((res) =>
            Fa.classList.add('display')
          )
        })
      }
      for (const element of h3) {
        element.addEventListener('click', (e) => {
          console.log(e.target.textContent)
          let query = e.target.textContent
          let res = aIs(ToAppend, query).then((res) =>
            Fa.classList.add('display')
          )
        })
      }
      for (const element of im) {
        element.addEventListener('click', (e) => {
          let query = e.target.nextSibling.textContent
          let res = aIs(ToAppend, query).then((res) =>
            Fa.classList.add('display')
          )
        })
      }
    }
  })
}
