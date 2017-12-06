var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newValues = object[key] = value
  var newObj = Object.assign(recipes, newValues)
  return newObj
}
