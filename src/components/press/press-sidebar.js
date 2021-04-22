import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const PressSidebar = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpPressRelease(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                        acf {
                            published_date
                            published_slug
                        }
                    }
                }
            }
            allWordpressCategory(filter: {wordpress_id: {in: [67,68,70,71,72,73,74]}}) {
                edges {
                    node {
                        name
                        slug
                    }
                }
            }
        }
    `)

    // Date Archive remove duplicates
    const pressPosts = data.allWordpressWpPressRelease.edges
    const PressDates = []
    pressPosts.forEach(pressPost => {
      let PressDate = {
        month: pressPost.node.acf.published_date,
        slug: pressPost.node.acf.published_slug
      }
      PressDates.push(PressDate)
    })
    const PressMonths = [
      {month: ""},
      {slug: ""}
    ]
    let i = 1
    PressDates.forEach(object => {
      if(object.slug === PressMonths[i].slug) {
        //Do nothing
      } else {
        let newObject = {
          month: object.month,
          slug: object.slug
        }
        PressMonths.push(newObject)
        i++
      }
    })

    return(
        <SidebarLayout>
            <ArchiveList>
                <h3>Archives</h3>
                <ul>
                {PressMonths.map(PressMonth => (
                    <li>
                        <Link to={`/press/${PressMonth.slug}`}>{PressMonth.month}</Link>
                    </li>
                ))}
                </ul>
            </ArchiveList>
            <CategoryList>
                <h3>Categories</h3>
                <ul>
                {data.allWordpressCategory.edges.map(category => (
                    <li>
                        <Link to={`/press/category/${category.node.slug}`}>{category.node.name}</Link>
                    </li>
                ))}
                </ul>
            </CategoryList>
        </SidebarLayout>
    )

}

const SidebarLayout = styled.div`
    width: 25%;
    @media(max-width:650px) {
        width: 100%;
        order: 2;
        margin-top: 50px;
        text-align: center;
    }
`

const ArchiveList = styled.div`
    margin-bottom: 50px;
    h3 {
        font-family: "Raleway SemiBold";
    }
    ul {
        list-style: none;
        margin-left: 0;
        li {
            &:nth-child(1),
            &:nth-child(2) {
                display: none;
            }
            padding: 7px 0 7px 0;
            margin: 0;
            a {
                font-family: 'Open Sans',sans-serif;
                font-size: 14px;
                font-weight: 400;
                color: rgb(129, 129, 129);
                text-decoration: none;
                transition-duration: .3s;
                &:hover {
                    color: #1abc9c;
                }
            }
        }
        @media(max-width:650px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            li {
                padding: 7px;
            }
        }
    }
`

const CategoryList = styled.div`
    margin-bottom: 50px;
    h3 {
        font-family: "Raleway SemiBold";
    }
    ul {
        list-style: none;
        margin-left: 0;
        li {
            padding: 7px 0 7px 0;
            margin: 0;
            a {
                font-family: 'Open Sans',sans-serif;
                font-size: 14px;
                font-weight: 400;
                color: rgb(129, 129, 129);
                text-decoration: none;
                transition-duration: .3s;
                &:hover {
                    color: #1abc9c;
                }
            }
        }
        @media(max-width:650px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            li {
                padding: 7px;
            }
        }
    }
`


export default PressSidebar