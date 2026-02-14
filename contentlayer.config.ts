import { makeSource } from "contentlayer2/source-files";
import { defineDocumentType } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", ""),
    },
    readingTime: {
      type: "number",
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const wordCount = doc.body.raw.split(/\s+/g).length;
        return Math.ceil(wordCount / wordsPerMinute);
      },
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
    github: {
      type: "string",
    },
    demo: {
      type: "string",
    },
    featured: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("projects/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/work/${doc._raw.flattenedPath.replace("projects/", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
