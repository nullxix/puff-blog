const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    console.log('-v---NOODE ACTIONS---v-')
    console.log(actions)
    console.log('-^---END ACTIONS---^-')

    const {createPage} = actions
    const articleTemplate = path.resolve('./src/templates/article-template.js')
    const pages = await graphql(`
        {
            allPrismicArticle {
                edges {
                  node {
                    id
                    data {
                      article_preview {
                        text
                      }
                      content {
                        type
                        url
                        alt
                        text
                        spans {
                          start
                          end
                          type
                          data {
                            link_type
                            url
                            target
                          }
                        }
                      }
                      date
                      title {
                        html
                        text
                      }
                    }
                  }
                }
              }
        }
    `)

    pages.data.allPrismicArticle.edges.forEach(edge => {
        console.log('making page:', edge.node.data.title.text)
        createPage({
            path: `/rawr/${edge.node.data.title.text}`,
            component: articleTemplate,
            context: {
              id: edge.node.id,
            },
        })
    })


}