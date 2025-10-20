module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // اضافه کردن rule برای فایل‌های LESS
      webpackConfig.module.rules.push({
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: { javascriptEnabled: true },
            },
          },
        ],
      });
      return webpackConfig;
    },
  },
};
