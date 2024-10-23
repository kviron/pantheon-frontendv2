// postcss.config.cjs
module.exports = {
  plugins: [
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-font-magician")({
      foundries: "bootstrap google",
    }),
    require("autoprefixer"),
    // другие плагины
  ],
};
