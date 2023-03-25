const path = require('path');
module.exports = {
   devtool: 'inline-source-map',
   entry: "./src/mainloop_notickloss.ts",
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, 'dist'),
       library: 'olmHitter',
   },
   resolve: {
       extensions: [".webpack.js", ".web.js", ".ts", ".js"]
   },
   module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
   }
}
