import { html } from 'cuirk'

export const publish = () => html`
  <div class="publish">
    <h1>The site is rebuilding.</h1>
    <p>
      The site is rebuilding with the latest content. It should be ready in a
      minute.
    </p>
  </div>
`

publish.init = () => {
  if (document.querySelector('.publish')) {
    fetch('https://api.netlify.com/build_hooks/66c7e57e616fe4edb13c8507', {
      method: 'POST',
    })
  }
}