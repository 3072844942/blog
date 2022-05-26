module.exports = {
    transpileDependencies: ["vuetify"],
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
};