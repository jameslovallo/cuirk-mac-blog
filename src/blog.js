import fs from 'fs'
import { parse } from 'marked'
import { getRecords } from './data/airtable.js'
import layout from './layouts/default.js'
import download from 'download'

const { records } = await getRecords

records.forEach(
	async ({ fields: { Name, Body, Date: date, Description, Thumbnail } }) => {
		fs.mkdirSync('dist/posts/media/', { recursive: true })
		const outDir = `dist/posts/${Name.toLowerCase().replaceAll(' ', '-')}`
		fs.mkdirSync(`${outDir}`, { recursive: true })
		fs.writeFileSync(`dist/posts/media/${Name.replaceAll(' ', '-')}.jpg`, await download(Thumbnail[0].thumbnails.large.url));
		const body = [
			`# ${Name}`,
			Description,
			new Date(date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			}),
			Thumbnail[0] && `![${Name}](/posts/media/${Name.replaceAll(' ', '-')}.jpg)`,
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
