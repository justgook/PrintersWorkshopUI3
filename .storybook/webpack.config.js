// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');
// module.exports = {
//   module: {
//     loaders: [

//     ]
//   }
// }
// module.exports = {}



module.exports = function (config, env) {
  let defaultConfig = genDefaultConfig(config, env);
  defaultConfig.module.loaders.push({
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=material-design-icons/iconfont/[name].[ext]'
  })
  return defaultConfig;
};