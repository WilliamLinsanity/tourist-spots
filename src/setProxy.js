const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/getCounties', {
        target:"http://api.opencube.tw/twzipcode/get-citys",
        changeOrigin: true,
        credentials : true,
        pathRewrite: {
        '^/getCounties': '',
        },
    })
  );
};