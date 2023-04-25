import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import OOLayout from "../../components/optomi-opportunities/oo-layout"
import SEO from "../../components/seo"

import DownloadFile from "../../downloads/Consultant-Referral-Form-2020.pdf"

const OptomiOpportunitiesClientsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {wordpress_id: {eq: 2610}}) {
                edges {
                    node {
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 1920) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            meta_title
                            meta_description
                            top_image_left {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 560) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            top_image_right {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 270) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            top_section
                            first_referral_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 163) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            second_referral_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 163) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            third_referral_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 210) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            bottom_section
                            first_bottom_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 962) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            second_bottom_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 579) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)  

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <OOLayout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <ReferralMain>
                    <TopRow>
                        <TopImageLeft sizes={post.node.acf.top_image_left.localFile.childImageSharp.sizes} alt={"Refer Your Peers to Us!"}/>
                        <TopImageRight sizes={post.node.acf.top_image_right.localFile.childImageSharp.sizes} alt={"Referrals"}/>
                    </TopRow>
                    <MainRow>
                        <TopSection dangerouslySetInnerHTML={{ __html: post.node.acf.top_section }}/>
                        <ReferralRow>
                            <FirstReferralImage sizes={post.node.acf.first_referral_image.localFile.childImageSharp.sizes} alt={"$500"}/>
                            <p>– 1st Hired Referral</p>
                        </ReferralRow>
                        <ReferralRow>
                            <SecondReferralImage sizes={post.node.acf.second_referral_image.localFile.childImageSharp.sizes} alt={"$750"}/>
                            <p>– 2nd Hired Referral</p>
                        </ReferralRow>
                        <ReferralRow>
                            <ThirdReferralImage sizes={post.node.acf.third_referral_image.localFile.childImageSharp.sizes} alt={"$1000"}/>
                            <p>– 3rd Hired Referral</p>
                        </ReferralRow>
                        <BottomSection dangerouslySetInnerHTML={{ __html: post.node.acf.bottom_section }}/>
                        <FirstBottomImage sizes={post.node.acf.first_bottom_image.localFile.childImageSharp.sizes} alt={"Placement must be made within 6 months of referral"} />
                    </MainRow>
                    <BottomRow>
                        <SecondBottomImage sizes={post.node.acf.second_bottom_image.localFile.childImageSharp.sizes} alt={"Be part of our consultant referral program"}/>
                        <p><a href="mailto:opportunities@optomi.com">opportunities@optomi.com</a></p>
                    </BottomRow>
                </ReferralMain>
            </OOLayout>
        ))
    )

}

const ReferralMain = styled.div`
    background-color: #000;
    padding: 100px 20px;
`

const TopRow = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TopImageLeft = styled(Img)`
    max-width: 313px;
    width: 100%;
`

const TopImageRight = styled(Img)`
    max-width: 162px;
    width: 100%;
`

const MainRow = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    background-color: #e6e2e1;
    p {
        color: #000;
        text-align: center;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 300;
    }
`

const TopSection = styled.div``

const ReferralRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    p {
        max-width: 200px;
        width: 50%;
        text-align: left;
        margin-bottom: 0;
        padding-left: 10px;
    }
`

const FirstReferralImage = styled(Img)`
    max-width: 76px;
    width: 100%;
`

const SecondReferralImage = styled(Img)`
    max-width: 76px;
    width: 100%;
`

const ThirdReferralImage = styled(Img)`
    max-width: 98px;
    width: 100%;
`

const BottomSection = styled.div``

const FirstBottomImage = styled(Img)``

const BottomRow = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 40px auto;
    text-align: center;
    a {
        display: inline-block;
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 21px;
        line-height: 1;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        padding-top: 40px;
    }
`

const SecondBottomImage = styled(Img)`
    max-width: 303px;
    width: 100%;
    margin: 0 auto;
`

export default OptomiOpportunitiesClientsPage