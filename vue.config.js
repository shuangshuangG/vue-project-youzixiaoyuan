module.exports = {
    devServer: {
        proxy: {
            '/sale': {
                target: 'http://www.youzixy.com',
                changeOrigin: true
            },
            '/buy': {
                target: 'http://www.youzixy.com',
                changeOrigin: true
            }
        }
    }
}