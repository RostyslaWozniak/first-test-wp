/* empty css                          */
import { s as createAstro, t as createComponent, u as renderTemplate, z as renderComponent, v as maybeRenderHead, B as renderSlot, F as Fragment, C as unescapeHTML } from './astro/server_Bsgw5HK1.mjs';
import { $ as $$FormattedDate, a as getPostBySlug } from './queries_PtJNXy2d.mjs';
import { $ as $$MainLayout } from './MainLayout_h7jgYKyW.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, date, updatedDate } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <div class="prose"> <div class="title"> <div class="date"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": date })} ${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} </div> <h1>${title}</h1> <hr> </div> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })}`;
}, "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/404");
  const postData = await fetch("https://blog.swojesciany.pl/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: getPostBySlug(slug)
    })
  }).then((res) => res.json());
  if (!postData.data.postBy) return Astro2.redirect("/404");
  const post = postData.data.postBy;
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": post.title, "description": post.excerpt, "date": new Date(post.date), "updatedDate": new Date(post.modified) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(post.content)}` })} ` })}`;
}, "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/blog/[...slug].astro", void 0);
const $$file = "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, $$url as url };
