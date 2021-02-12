const getUser = async () => {
  try {
    const res = await fetch('vk.com')
    const data = await res.json()
    console.log(data)
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}
getUser()
