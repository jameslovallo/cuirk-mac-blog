import { md } from "cuirk";
import { getRecords } from "../src/data/airtable.js";

const { records } = await getRecords;
const firstPost = records
  .filter(({ fields: { Status } }) => Status === "Published")
  .sort((a, b) => new Date(b.fields.Date) - new Date(a.fields.Date))[0];
const {
  fields: { Name, Description, Date: date, Thumbnail, Body },
} = firstPost;

export const body = md`
<span class="small-cap">Latest Post</span>

# ${Name}

${Description}

${new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}

${Thumbnail[0] && `![${Name}](/posts/media/${Name.replaceAll(" ", "-")}.jpg)`}

${Body.replace("\n", "\n\n")}

<style>
	.small-cap {
		color: var(--soft-blue);
		font-size: 0.8rem;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
</style>
`;
