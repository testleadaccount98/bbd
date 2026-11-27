module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    requireModule: ["tsx/cjs"],
    require: ["step-definitions/**/*.ts"],
    format: ["progress", "html:cucumber-report.html"]
  }
};
