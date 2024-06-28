/** @format */

export const getAllPosts = () => {
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

export const getPostBySlug = (slug: string) => {
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
