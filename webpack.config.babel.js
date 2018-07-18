import webpack from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import StyleLintPlugin from 'stylelint-webpack-plugin';

const paths = {
    src: './src',
    dest: 'dist',
};
const template = `${paths.src}/index.html`;
const loaderOptions = {
    eslint: {
        configFile: './.eslintrc',
    },
};

export default () => ({
    entry: `${paths.src}/index.jsx`,
    output: {
        path: resolve(__dirname, paths.dest),
        filename: 'bundle.js',
    },
    devServer: {
        port: 1212,
        publicPath: '/',
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: ['babel-loader', 'eslint-loader'],
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: ['react-hot-loader', 'babel-loader'],
        },
        {
            test: /\.s[ac]ss$/,
            include: [
                resolve(__dirname, 'node_modules/@agoda'),
                resolve(__dirname, 'src'),
            ],
            use: ExtractTextPlugin.extract({
                fallback: [{
                    loader: 'style-loader',
                }],
                use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }),
        },
        {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            loader: 'file?name=fonts/[name].[ext]',
        },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            workshop: resolve(__dirname, 'src/workshop'),
            kiteHelpers: resolve(__dirname, 'node_modules/@agoda/kite/src/01-helpers/helpers-desktop.scss'),
            kiteDesktop: resolve(__dirname, 'node_modules/@agoda/kite/src/kite-desktop.scss'),
        },
    },
    plugins: [
        // new StyleLintPlugin({
        //     context: '../',
        //     files: ['newtest/**/*.scss', 'kite-learning-kit/src/**/*.scss'],
        // }),
        new HtmlWebpackPlugin({
            template,
        }),
        new ExtractTextPlugin('main.css'),
        new webpack.LoaderOptionsPlugin({
            options: loaderOptions,
        }),
    ],
});

