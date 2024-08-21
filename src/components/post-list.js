import { html, loop, scss } from 'cuirk'

const postListItem = ({ title, description }) => {
	const href = `/posts/${title.toLowerCase().replaceAll(' ', '-')}`
	return html`
		<li>
			<a href="${href}">
				<b>${title}</b>
				<small>${description}</small>
			</a>
		</li>
	`
}

export const postList = (items) => html`
	<ul class="post-list">
		${loop(items, postListItem)}
	</ul>
`

postList.style = scss`
	.post-list {
		display: grid;
		list-style: none;
		margin: 0;
		padding: 0;

		a {
			border-radius: 0.5rem;
			display: grid;
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
