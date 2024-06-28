import { s as createAstro, t as createComponent, u as renderTemplate, v as maybeRenderHead, w as addAttribute } from './astro/server_Bsgw5HK1.mjs';

const $$Astro = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/components/FormattedDate.astro", void 0);

const getAllPosts = () => {
  return ` {
        posts {
            nodes {
                content
                date
                excerpt
                slug
                title
            }
        }
    }`;
};
const getPostBySlug = (slug) => {
  return ` {
        postBy(slug: "${slug}") {
            content
            date
            modified
            slug
            title
        }
    }`;
};

export { $$FormattedDate as $, getPostBySlug as a, getAllPosts as g };
