const webpack = require('webpack')
const config = require('./webpack.config')

const compiler = webpack(config)

debugger

compiler.run(err => {
    console.log(err)
})