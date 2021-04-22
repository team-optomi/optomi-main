import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import styled from 'styled-components'

const InstaFeed = () => (

  <StaticQuery
    query={graphql`
        query {
            allInstaNode(limit: 6, sort: {fields: timestamp, order: DESC}) {
            edges {
                node {
                    id
                    likes
                    comments
                    mediaType
                    preview
                    original
                    timestamp
                    caption
                    localFile {
                        childImageSharp {
                            sizes(maxWidth: 300) {
                                ...GatsbyImageSharpSizes
                              }
                        }
                    }
                }
            }
            }
        }
    `}
    render={(data) => (
      <InstaFlex>
        {
          data.allInstaNode.edges.map((item, i) => (
            item.node.localFile ? (
              <InstaImage key={i}>
                  <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                  <Image
                    fluid={item.node.localFile.childImageSharp.sizes}
                    />
                  </a>
              </InstaImage>
            ) : (<div></div>)
          ))
        }
      </InstaFlex>
    )}
  />
       /* <div>
          
        </div> */
);

const InstaFlex = styled.div`
    position: absolute;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    @media(max-width:1550px) {
        width: 300px;
    }
    @media(max-width:700px) {
        position: relative;
        max-width: 350px;
        margin: 0 auto;
        justify-content: center;
    }
`

const InstaImage = styled.div`
    width: 75px;
    height: 75px;
    margin-right: 10px;
    margin-bottom: 10px;
    .gatsby-image-wrapper {
        width: 75px !important;
        height: 75px !important;
        overflow: hidden;
        img {
            object-fit: cover;
            margin-bottom: 0; 
        }
    }
`

export default InstaFeed; 