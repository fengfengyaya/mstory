

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://story.hao.360.cn',
        //   ws: true,
        changeOrigin: true
        
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
