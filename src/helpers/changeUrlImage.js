const changeUrl = (array = []) => {
  return array.map((item) => {
    const removePublic = item.destination.split('/').slice(2).join('/')
    return `/${removePublic}/${item.filename}`
  })
}

module.exports = changeUrl
