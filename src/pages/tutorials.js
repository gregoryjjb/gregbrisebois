import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import PostLinkList from '../components/PostLinkList'

export const query = graphql`
	query TutorialsQuery {
		allMarkdownRemark(
			filter: {fields: {folder: {eq: "tutorials"}}}
			sort: {fields: [frontmatter___date], order: DESC}
		) {
			edges {
			  	node {
					frontmatter {
				  		title
						date
						tags
						thumbnail
					}
					fields {
						slug
					}
					html
					excerpt
			  	}
			}
		}
	}
`;

const Tutorials = ({ data }) => (
	<Container>
		<h1>Tutorials</h1>
		<PostLinkList nodes={data.allMarkdownRemark.edges.map(({node}) => node)} />
	</Container>
)

export default Tutorials;