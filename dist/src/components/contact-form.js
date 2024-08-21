import { html, scss } from 'cuirk'
import { button, grid, icon } from './index.js'

export const contactForm = () => html`
	<form class="contact-form">
		<label class="hidden">
			<input name="Occupation" />
		</label>
		${grid({
			children: [
				html`
					<label>
						<span>Name<sup></sup></span>
						<input type="text" name="Name" required />
					</label>
				`,
				html`
					<label>
						<span>Phone Number<sup></sup></span>
						<input type="tel" name="Phone" required />
					</label>
				`,
			],
		})}
		<label>
			<span>Email Address<sup></sup></span>
			<input type="email" name="Email" required />
		</label>
		<label>
			<span>Your Message<sup></sup></span>
			<textarea name="Message" required></textarea>
		</label>
		${button({
			children: icon({ name: 'Send' }) + 'Submit',
			type: 'submit',
			shape: 'rounded',
		})}
	</form>
`

contactForm.init = () => {
	const form = document.querySelector('.contact-form')

	if (form) {
		const formToken =
			'pat1jLkw1xVRnTIll.1d2c88730206409ac8128f9fdce640449e8f5134b86740590755643790ca2c5c'
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			const formData = new FormData(form)
			const fields = Object.fromEntries(formData.entries())
			delete fields.Occupation
			fetch('https://api.airtable.com/v0/appWwIseIzt9aVk0t/Contact', {
				headers: {
					Authorization: `Bearer ${formToken}`,
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ fields }),
			}).then((res) => {
				if (res.ok) window.location = '/thank-you'
			})
		})
	}
}

contactForm.style = scss`
	form {
		display: grid;
		gap: 1.5rem;

		label {
			color: var(--soft-blue);
			display: grid;
			font-size: 0.8rem;
			gap: 0.5rem;
			letter-spacing: 2px;
			text-transform: uppercase;

			&.hidden {
				display: none;
			}

			sup {
				color: red;
				&:before {
					content: '*';
				}
			}

			&:has(:valid) sup {
				display: none;
			}

			input,
			textarea {
				border: none;
				border-bottom: var(--c-border);
				border-bottom-width: 2px;
				border-radius: 0.25rem;
				font-size: 1rem;
				padding: 0.5rem;

				&:focus {
					border-bottom-color: var(--c-primary);
					outline: none;
				}
			}

			textarea {
				height: 8rem;
				resize: none;
			}
		}
	}
`
