import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

const plugins = [
  nodeResolve(),
  commonjs(),
  {
    banner() {
      return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository} @license ${pkg.license} */`;
    },
  },
  json(),
];

export default [
  {
    input: "index.js",
    output: [
      {
        file: "dist/markdown-it-embed.js",
        format: "umd",
        name: "markdownitIns",
      },
      {
        file: "dist/markdown-it-embed.min.js",
        format: "umd",
        name: "markdownitIns",
        plugins: [terser()],
      },
    ],
    plugins: plugins,
  },
];
