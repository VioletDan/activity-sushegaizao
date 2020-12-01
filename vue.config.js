const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  outputDir: 'activity-dream',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '冬日福利大放送'
      return args
    })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
  }
}
