import { md } from 'cuirk'
import { pressList } from '../src/components/index.js'
import press from '../src/data/press.js'

export const meta = {
	title: 'Press',
}

export const body = md`
# ${meta.title}

${pressList(press)}
`
