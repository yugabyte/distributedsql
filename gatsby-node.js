exports.onCreateWebpackConfig = async ({ actions }) => {
  var webpackCustomConfig = null
  if (process.env.GATSBY_STAGE === 'production') {
    webpackCustomConfig = {
      devtool: false
    }
  }
  actions.setWebpackConfig({
    ...webpackCustomConfig,
  })
}
