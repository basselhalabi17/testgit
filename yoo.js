const _ = require('lodash')
const itemui=[1,[2,[3,[4]]]]
const newfes = _.flattenDeep(itemui)
console.log(newfes)