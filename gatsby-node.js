const path = require('path')
const conferenceData = require('./src/data/conferenceData')
const speakerData = require('./src/data/data.json')

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createNode } = actions
  // const speakers = JSON.parse( JSON.stringify(speakerData) )
  const sessionPageTemplate = path.resolve("src/page-templates/session.js")
  conferenceData.forEach(confDaySessions => confDaySessions.forEach(talk => {
    try {
      createPage({
        path: `/session/${talk.id}`,
        component: sessionPageTemplate,
        context: {
          ...talk
        },
      })
    } catch (error) {

    }
  }));
}
