import { s as createAstro, t as createComponent, u as renderTemplate, z as renderComponent, E as renderHead, B as renderSlot } from './astro/server_Bsgw5HK1.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Header_CfoN_dpG.mjs';
/* empty css                          */

const $$Astro = createAstro("https://example.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-ouamjn2i": true })}${renderHead()}</head> <body data-astro-cid-ouamjn2i> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ouamjn2i": true })} <main data-astro-cid-ouamjn2i> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })} </body></html>`;
}, "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
