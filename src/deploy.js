const fs = require('fs-extra')
const routes = require('./routes.js')
const path = require('path')
routes.forEach((route) => {
    fs.copySync(path.join('build', 'index.html'), path.join('build', route, 'index.html'))
})