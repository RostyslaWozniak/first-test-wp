/* empty css                          */
import { t as createComponent, u as renderTemplate, z as renderComponent, v as maybeRenderHead, w as addAttribute } from './astro/server_Bsgw5HK1.mjs';
import { g as getAllPosts, $ as $$FormattedDate } from './queries_PtJNXy2d.mjs';
import { $ as $$MainLayout } from './MainLayout_h7jgYKyW.mjs';
/* empty css                         */

function getImageUrl(htmlContent) {
  const imgSrcRegex = /<img[^>]+src="([^">]+)"/;
  const match = imgSrcRegex.exec(htmlContent);
  return match ? match[1] : null;
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const postData = await fetch("https://blog.swojesciany.pl/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: getAllPosts()
    })
  }).then((res) => res.json());
  const posts = postData.data.posts.nodes;
  const SITE_TITLE = "Blog";
  const SITE_DESCRIPTION = "Welcome to my blog!";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map(
    (post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> ${getImageUrl(post.content) && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(getImageUrl(post.content), "src")}${addAttribute(post.title, "alt")} data-astro-cid-5tznm7mj>`} <h4 class="title" data-astro-cid-5tznm7mj>${post.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": new Date(post.date), "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`
  )} </ul> </section> ` })} `;
}, "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/blog/index.astro", void 0);
const $$file = "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
