const path = require('path')
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

/*
exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createNode } = actions
    const speakers = JSON.parse( JSON.stringify(speakerData) )
    const speakerPageTemplate = path.resolve("src/page-templates/speaker.js")
    Object.values(speakers).forEach(speaker => {
        try {
            createPage({
                path: `/speaker/${speaker.speakerId}`,
                component: speakerPageTemplate,
                context: {
                    ...speaker
                },
            })
        } catch (error) {

        }
    });
}
*/