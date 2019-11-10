import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  context: path.join(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader"
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "source-map-loader",
            options: {
              enforce: "pre",
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules", path.resolve("./src")],
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: "0.0.0.0",
    watchContentBase: true,
    inline: true,
    hot: true
  }
};

export default config;
