import { btnC } from '../02_CButton/CButton'
import './containerUploadCreate.scss'

export let nla = [
  {
    category: 'Batman images',
    img: 'https://i.pinimg.com/236x/82/27/3f/82273fdb5b717d15420b4263bcf1faa4.jpg'
  },
  {
    category: 'Old Comics',
    img: 'https://i.pinimg.com/236x/d7/96/97/d796972dc53b182a542a7c4809bda601.jpg'
  }
]
export let nln = [
  {
    category: 'Tatoos for men',
    img: 'https://i.pinimg.com/236x/52/64/89/5264899c3b1a1f1bf1f92499c601a8db.jpg'
  },
  {
    category: 'One piece',
    img: 'https://i.pinimg.com/236x/93/94/74/9394748d58e086d83ab1f55abaaff5c9.jpg'
  },
  {
    category: 'Matching Icons',
    img: 'https://i.pinimg.com/236x/ee/7c/f4/ee7cf47743109266680886cca1ef5869.jpg'
  },
  {
    category: 'Dragon Ball',
    img: 'https://i.pinimg.com/236x/7e/51/ea/7e51eac46a03941c7c86ab3ba976ff06.jpg'
  }
]
export let news = [
  {
    title: 'Background for your phone',
    img: [
      'https://i.pinimg.com/236x/c4/0c/85/c40c85d6fdec9edef76cfe7da19379f5.jpg',
      'https://i.pinimg.com/236x/a6/e2/1f/a6e21f068d539ac5e1772278645edc7a.jpg',
      'https://i.pinimg.com/236x/a9/c3/13/a9c3131bc8f19e9066efa1298dc466b4.jpg'
    ],
    time: '11h'
  },
  {
    title: 'Try out for searching more ideas to inspire you',
    img: [
      'https://i.pinimg.com/236x/8f/83/e1/8f83e1606a203f3b6817e67ec50127ed.jpg',
      'https://i.pinimg.com/236x/2f/1c/4c/2f1c4c350178a31467be58bd2d96f8bb.jpg',
      'https://i.pinimg.com/236x/d0/13/67/d013679a188b4a7dfafd59a508137ec3.jpg'
    ],

    time: '3h'
  },
  {
    title: 'You looked these Pins',
    img: [
      'https://i.pinimg.com/236x/ab/e4/6d/abe46df15514658ab6c6571a989651d2.jpg',
      'https://i.pinimg.com/236x/c0/aa/18/c0aa18b13a5aebe380ee2730cd4fa796.jpg',
      'https://i.pinimg.com/236x/7a/81/a4/7a81a4f89208731782910f93f630a641.jpg'
    ],
    time: '1h'
  }
]
function aleatoriety() {
  return Math.random() - Math.random()
}
export const containerUploadCreate = (toAppend, ftext, arr) => {
  let Ar = document.createElement('article')
  let h2 = document.createElement('h2')
  h2.textContent = ftext
  Ar.classList.add('absolute', 'display')

  Ar.id = 'uploads-container'
  Ar.appendChild(h2)

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    let Fs = document.createElement('section')
    let h3 = document.createElement('h3')
    let Dp = document.createElement('div')
    let BtnIn = btnC(
      '',
      '',
      '',
      'https://cdn.icon-icons.com/icons2/933/PNG/512/ellipsis_icon-icons.com_72770.png',
      ''
    )
    BtnIn.classList.add('display', 'absolute-real')

    for (const key in element) {
      if (key === 'img') {
        const el = element[key]
        el.sort(aleatoriety)
        for (const item of el) {
          let Pc = document.createElement('img')
          Pc.src = item
          Pc.loading = 'lazy'
          Dp.appendChild(Pc)
        }
      }
    }
    h3.innerHTML = `${element.title} <span class= "time">${element.time} ago </span>`
    Dp.classList.add('div-img', 'flex-container')
    Fs.classList.add('single-new')

    Fs.appendChild(h3)
    Fs.appendChild(Dp)
    Fs.appendChild(BtnIn)
    Ar.appendChild(Fs)
  }
  toAppend.appendChild(Ar)
  return Ar
}
