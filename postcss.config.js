const Autoprefixer = require('autoprefixer');
const PostCssVr = require('postcss-vr');
const PostCssFocus = require('postcss-focus');

module.exports = {
  plugins: [
    Autoprefixer,
    PostCssVr,
    PostCssFocus,
  ]
};
