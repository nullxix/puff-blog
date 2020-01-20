import React from "react"
import {graphql} from 'gatsby'
import SideLinkRight from '../components/SideLinkRight.js'
import SideLinkLeft from '../components/SideLinkLeft.js'

const Index = (props) => {
    const config = props.data.prismicConfig.data
    return (
        <>
            <div style={{
                textAlign: 'center',
                width: '100%',
            }}>
                <div style={{
                    textAlign: 'center',
                    fontSize: '56pt'
                }}>
                    {config.header_text}
                </div>
                <div style={{
                    textAlign: 'center',
                    fontSize: '24pt'
                }}>
                    {config.sub_header_text}
                </div>
            </div>
            <SideLinkLeft>{config.articles_link_text}</SideLinkLeft>
            <SideLinkRight>{config.about_link_text}</SideLinkRight>
        </>
    )
}

export default Index;
export const pageQuery = graphql`
query ConfigQuery {
    prismicConfig {
      id
      data {
        site_title
        articles_link_text
        about_link_text
        header_text
        sub_header_text
      }
    }
  }
`