import { html, loop, scss } from 'cuirk'

const pressListItem = ({ title, pub, url }) => html`
	<li>
		<a href="${url}">
			<b>${title}</b>
			<small>${pub}</small>
		</a>
	</li>
`

export const pressList = (items) => html`
	<ul class="press-list">
		${loop(items, pressListItem)}
	</ul>
`

pressList.style = scss`
	.press-list {
		list-style: none;
		margin: -0.5rem;
		padding: 0;

		li {
			margin: 0;
			padding: 0;
		}

		a {
			border-radius: 0.5rem;
			display: grid;
			gap: 0.25rem;
			padding: 0.5rem;
			text-decoration: none;

			small {
				color: var(--soft-blue);
			}

			&:hover {
				background: #fff1;
				
				b {
					text-decoration: underline;
				}
			}
		}
	}
`
