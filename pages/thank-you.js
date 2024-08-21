import { md } from 'cuirk'

export const meta = {
	title: 'Thank You',
	description: 'Your message has been sent.',
}

export const body = md`
# ${meta.title}
Your message has been sent and I'll get back to you shortly.
`
