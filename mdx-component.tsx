import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: ({ children, ...props }) => (
      <h1
        style={{
          lineHeight: "36px",
          fontWeight: 600,
          paddingBottom: 20,
        }}
        className="md:text-3xl text-2xl font-bold text-gray-900 mb-8 leading-tight tracking-tight"
        {...props}
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2
        className="text-xl md:text-2xl font-semibold text-gray-800 mt-16 mb-6 leading-snug"
        {...props}
      >
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3
        className="text-xl font-medium  text-gray-700 py-1.5 leading-snug"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="text-lg leading-relaxed text-gray-700 mb-6 tracking-wide"
        {...props}
      >
        {children}
      </p>
    ),

    ul: ({ children, ...props }) => (
      <ul
        style={{ listStyleType: "disc", paddingLeft: "24px" }}
        className=" text-gray-700 mb-6 space-y-3 leading-relaxed"
        {...props}
      >
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol
        style={{ listStyleType: "decimal", paddingLeft: "24px" }}
        className="list-decimal pl-6 text-gray-700 mb-6 space-y-3 leading-relaxed"
        {...props}
      >
        {children}
      </ol>
    ),
    img: (props) => (
      <img
        className="w-full max-w-screen-xl py-2  shadow-md"
        alt=""
        loading="lazy"
        {...props}
      />
    ),

    li: ({ children, ...props }) => (
      <li className="my-1" {...props}>
        {children}
      </li>
    ),

    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-blue-400 bg-blue-50 text-blue-800 p-5 italic rounded-md mb-6"
        {...props}
      >
        {children}
      </blockquote>
    ),

    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-blue-600 font-medium underline decoration-2 underline-offset-4 hover:text-blue-800 transition-colors"
        {...props}
      >
        {children}
      </a>
    ),

    code: ({ children, ...props }) => (
      <code
        className="bg-gray-100 text-purple-700 text-sm px-1.5 py-0.5 rounded-md font-mono"
        {...props}
      >
        {children}
      </code>
    ),

    strong: ({ children, ...props }) => (
      <strong className="font-semibold" {...props}>
        {children}
      </strong>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-zinc-900 text-zinc-100 text-sm p-6 rounded-lg overflow-x-auto my-8 leading-relaxed font-mono"
        {...props}
      >
        {children}
      </pre>
    ),
  };
}
