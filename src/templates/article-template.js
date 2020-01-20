import React, {useState} from 'react'
import {Link, RichText, Date} from 'prismic-reactjs';
import {graphql} from 'gatsby'

const Article = ({data: {prismicArticle: {data}}}) => {
    const [content, setContent] = useState(data.content)

    console.log(data)
    console.log(content)
    return (
        <div>
            <RichText render={content}></RichText>
        </div>
    )
}

export default Article
export const pageQuery = graphql`
query MyTastyArticle($id: String!){
    prismicArticle(id: {eq: $id}) {
        id
        data {
            date
            title {
                html
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
            article_preview {
                html
                text
            }
        }
    }
}
`

