import { componentScripts, componentStyles, html } from 'cuirk'
import * as components from '../components/index.js'
import { getRecords } from '../data/airtable.js'
import navLinks from '../data/nav.js'

const { footer, postList, pageMeta, nav } = components

const { records } = await getRecords
const posts = records
	.filter(({ fields: { Status } }) => Status === 'Published')
	.sort((a, b) => new Date(b.fields.Date) - new Date(a.fields.Date))
	.map(({ fields: { Name: title, Date: date, Description: description } }) => ({
		title,
		date,
		description,
	}))

export default ({ meta, children }) => {
	return html`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<!-- component styles -->
				${componentStyles(components)}
				<!-- page meta -->
				${pageMeta(meta)}
			</head>
			<body>
				<!-- page content -->
				${nav({ links: navLinks })}
				<div class="split">
					<main>${children}</main>
					<aside>
						<div class="sticky">
							<h2>Posts</h2>
							${postList(posts)}
						</div>
					</aside>
				</div>
				${footer({ links: navLinks })}
				<!-- component scripts -->
				${componentScripts(components)}
			</body>
		</html>
	`
}
