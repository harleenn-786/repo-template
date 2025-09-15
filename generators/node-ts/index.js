const Generator = require("yeoman-generator");

module.exports = class NodeTsGenerator extends Generator {
  writing() {
    // Copy everything including dotfiles and dotfolders
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(),
      {},
      {},
      { globOptions: { dot: true } }
    );
  }

  // Prevent Yeoman from running npm/yarn install automatically
  install() {
    // Intentionally left empty
  }
};
