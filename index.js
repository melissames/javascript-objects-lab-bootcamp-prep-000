var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign(object, object[key] = value)
  return newObj
}
