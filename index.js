require('regenerator-runtime')

// regeneratorRuntime is undefined
console.log(global.regeneratorRuntime)

require('regenerator-runtime/runtime')

// regeneratorRuntime is still undefined
console.log(global.regeneratorRuntime)
