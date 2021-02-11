export default class Post {
  constructor(title, img) {
    this.title = title
    this.date = new Date()
    this.img = img
  }

  toString() {
    return JSON.stringify(
      {
        title: this.title,
        date: this.date.toString(),
        img: this.img,
      },
      null,
      2,
    )
  }

  get upperCaseTitle() {
    return this.title.toUpperCase()
  }
}

const foo = 2
const fo4o = 24
let tuu = 55
tuu = 66

console.log(foo, fo4o, tuu)
const rut = {
  name: 'albert',
}
const newRut = {
  ...rut,
}
newRut.name = 'new'
console.log(rut.name, newRut.name)

const getUser = async () => {
  try {
    const res = await fetch('vk.com')
    const data = await res.json()
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}
getUser()
