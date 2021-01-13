path = require("path")

module.exports = {
    mode: "development",
    entry:{ 
        app: "./drfreactauth/frontend/src/index.js"
    },
    output: {
        path: path.resolve("drfreactauth/static/frontend"),
        filename: "main.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}