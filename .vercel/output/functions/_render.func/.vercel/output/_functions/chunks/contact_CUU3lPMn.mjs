/* empty css                          */
import { s as createAstro, t as createComponent, u as renderTemplate, z as renderComponent, v as maybeRenderHead, w as addAttribute } from './astro/server_Bsgw5HK1.mjs';
import { $ as $$MainLayout } from './MainLayout_h7jgYKyW.mjs';
import { Resend } from 'resend';

const resend = new Resend("re_Y5prvJX5_CTxxDdeVV4LviWtDuawj8cKa");

const $$Astro = createAstro("https://example.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const title = "Contact";
  const description = "Contact page";
  const errors = {
    name: null,
    email: null,
    message: null
  };
  const messageResult = {
    success: null,
    error: null
  };
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      if (typeof name !== "string" || name.length < 1) {
        errors.name = "Please enter a name. ";
      }
      if (typeof email !== "string" || !email.includes("@")) {
        errors.email = "Email is not valid. ";
      }
      if (typeof message !== "string" || message.length < 6) {
        errors.message = "Message must be at least 6 characters. ";
      }
      if (Object.values(errors).every((value) => value === null)) {
        const send = await resend.emails.send({
          from: "Rostyslav Vozniak <dev@rostyslavvozniak.com>",
          to: [email],
          reply_to: "rostik19wozniak@gmail.com",
          subject: name,
          html: `<p>Message from email:</p> <a href="mailto:${email}">${email}</a></br><p>${message}</p>`,
          text: `Message from email: ${email}
${message}`
        });
        if (send.data) {
          messageResult.success = "Message sent successfully";
        } else {
          messageResult.error = "Message not sent";
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${title}</h1> <form method="POST" class="space-y-4 max-w-[400px] mx-auto"> <label class="block text-gray-700 font-medium mb-1 text-start">
Name
<input type="text" id="name" name="name" class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-primary-500" placeholder="Enter your name"> ${errors.name && renderTemplate`<p class="text-red-500 text-sm">${errors.name}</p>`} </label> <label for="email" class="block text-gray-700 font-medium mb-1 text-start">
Email
<input type="email" id="email" name="email" class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-primary-500" placeholder="Enter your email"> ${errors.email && renderTemplate`<p class="text-red-500 text-sm">${errors.email}</p>`} </label> <label for="message" class="block text-gray-700 font-medium mb-1 text-start">
Message
<textarea id="message" name="message"${addAttribute(4, "rows")} class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-primary-500" placeholder="Enter your message"></textarea> ${errors.message && renderTemplate`<p class="text-red-500 text-sm">${errors.message}</p>`} </label> ${messageResult.success && renderTemplate`<p class="text-green-500 text-sm">${messageResult.success}</p>`} ${messageResult.error && renderTemplate`<p class="text-red-500 text-sm">${messageResult.error}</p>`} <button type="submit" class="bg-slate-500 text-white font-medium w-full rounded-md px-4 py-2 hover:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-500 duration-300">
Submit
</button> </form> ` })}`;
}, "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/wp-cms/first-test-wp/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
