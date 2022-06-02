// const { defineConfig } = require('@vue/cli-service')

module.exports = {
    transpileDependencies: ["vuetify"],
    configureWebpack: {
        // No need for splitting
        optimization: {
            splitChunks: false
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: "https://www.snak.space/api",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        },
        disableHostCheck: true
    },
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false
    }
}
// module.exports = {
//     transpileDependencies: ["vuetify"],
//     devServer: {
//         proxy: {
//             "/api": {
//                 target: "https://www.snak.space/api",
//                 changeOrigin: true,
//                 pathRewrite: {
//                     "^/api": ""
//                 }
//             }
//         },
//         disableHostCheck: true
//     },
//     productionSourceMap: false,
//     css: {
//         extract: true,
//         sourceMap: false
//     }
// };