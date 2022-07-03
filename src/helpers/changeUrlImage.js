const changeUrl = (array = []) => {
  return array.map((item) => `${item.destination}/${item.filename}`.slice(1))
}

module.exports = changeUrl
