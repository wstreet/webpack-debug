module.exports = {
    mode: 'none',
    entry: './app.js',
    output: {
        filename: '[name].js',
        path: __dirname + '/lib',
    }
}