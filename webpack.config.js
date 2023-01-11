const WebpackHtmlPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                microFrontEnd1:'microFrontEnd1@http://localhost:8081/remoteEntry.js',
            }
        }),
        new WebpackHtmlPlugin({
            template: './public/index.html'
        })
    ]    
  };