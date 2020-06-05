

const dive = (currentKey, into) => {
  const target = {}
  Object.keys(into).forEach(key => {
    let newKey = key
    const newVal = into[key]

    if (currentKey.length > 0) {
      newKey = `${currentKey}.${key}`
    }

    if (typeof newVal === 'object') {
      Object.assign(target, dive(newKey, newVal))
    } else {
      target[newKey] = newVal
    }
  })
  return target
}

export const flatten = object => {
  const obj = dive('', object)
  return obj
}