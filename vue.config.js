module.exports = {
    runtimeCompiler: process.env.NODE_ENV === 'production'
      ? false //on build
      : true
}