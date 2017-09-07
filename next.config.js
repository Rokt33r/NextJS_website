module.exports = {
  webpack: config => {
    // handle images
    // { loader: 'url-loader', options: { limit: 8192 } } ??
    config.module.rules.push({
      test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        {
          loader: 'file-loader',
          options: {
            context: 'public',
            name: '/static/images/[name]-[hash].[ext]',
            publicPath: '/',
          },
        }
      ],
    });
    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/works': { page: '/works'},
      '/archive': { page: '/archive'},
      '/contact': { page: '/contact'}
    }
  }
}

