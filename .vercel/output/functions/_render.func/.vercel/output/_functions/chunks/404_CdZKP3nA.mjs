/* empty css                          */
import { t as createComponent, u as renderTemplate, z as renderComponent, v as maybeRenderHead } from './astro/server_Bsgw5HK1.mjs';
import { $ as $$MainLayout } from './MainLayout_h7jgYKyW.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "404";
  const description = "We can't find that page";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${title}</h1> <div class="cloak__wrapper"> <div class="cloak__container"> <div class="cloak"></div> </div> </div> <div class="info"> <h2>${description}</h2> <p>
We're fairly sure that page used to be here, but seems to have gone
      missing. We do apologise on it's behalf.
</p><a href="/">Home</a> </div> ` })}`;
}, "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/404.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
