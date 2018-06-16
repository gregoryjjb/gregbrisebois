import React from 'react'
import Link from 'gatsby-link'
import MarkdownBody from '../components/MarkdownBody'
import Container from '../components/Container'

export const query = graphql`
	query ProjectQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				tags
			}
		}
	}
`;

const Project = ({data}) => {
	
	return(
		<Container paddingTop paddingBottom >
			<MarkdownBody markdownRemark={data.markdownRemark} />
		</Container>
	);
}

export default Project;