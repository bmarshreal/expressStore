/*Create a shortcut to our directories*/

const path = require('path')

module.exports = path.dirname(require.main.filename)
