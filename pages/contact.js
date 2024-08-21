import { md } from 'cuirk'
import { contactForm, linkList } from '../src/components/index.js'
import social from '../src/data/social.js'

export const meta = {
	title: 'Contact',
}

export const body = md`
# Contact

Want to chat? Complete the contact form or send me an email at mmfarr@gmail.com.

## Social Media

${linkList(social)}

## Contact Form

${contactForm()}
`
