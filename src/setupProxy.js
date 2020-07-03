const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:3001/',
      changeOrigin: true,
    }),
  );
};
