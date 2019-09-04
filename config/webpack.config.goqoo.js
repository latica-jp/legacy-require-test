const merge = require('webpack-merge')
const config = require('../.goqoo/webpack.config.base')
module.exports = merge(config, { devtool: 'inline-source-map' })
