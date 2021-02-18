module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/ManaForge/'
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
    }
}
