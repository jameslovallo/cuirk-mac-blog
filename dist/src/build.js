import fs from 'fs'
import { parse } from 'marked'
import { getRecords } from './data/airtable.js'
import layout from './layouts/default.js'

const { records } = await getRecords

records.forEach(
	({ fields: { Name, Body, Date: date, Description, Thumbnail } }) => {
		const outDir = `./dist/posts/${Name.toLowerCase().replaceAll(' ', '-')}`
		fs.mkdirSync(`${outDir}`, { recursive: true })
		const body = [
			`# ${Name}`,
			Description,
			new Date(date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			}),
			Thumbnail[0] && `![${Name}](${Thumbnail[0].thumbnails.large.url})`,
			Body,
		].join('\n\n')
		fs.writeFileSync(
			`${outDir}/index.html`,
			layout({
				meta: { title: Name, description: Description },
				children: parse(body),
			})
		)
	}
)
