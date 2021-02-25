module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/forge/'
        : '/',
    chainWebpack: config => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                // modify the options...
                options.compilerOptions.whitespace = true;
                return options;
            });
        config.performance
            .maxEntrypointSize(500000)
            .maxAssetSize(500000);
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Mana Forge";
                return args;
            })
    }
}
