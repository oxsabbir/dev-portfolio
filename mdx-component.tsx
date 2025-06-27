import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl  font-bold text-gray-900 dark:text-white mb-6"
        {...props}
      >
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2
        className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"
        {...props}
      >
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3
        className="text-2xl font-medium text-gray-700 dark:text-gray-300 mt-8 mb-2"
        {...props}
      >
        {children}
      </h3>
    ),

    p: ({ children, ...props }) => (
      <p
        className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-4"
        {...props}
      >
        {children}
      </p>
    ),

    ul: ({ children, ...props }) => (
      <ul
        className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4"
        {...props}
      >
        {children}
      </ul>
    ),

    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4"
        {...props}
      >
        {children}
      </ol>
    ),

    li: ({ children, ...props }) => <li className="ml-2">{children}</li>,

    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 p-4 italic text-gray-700 dark:text-gray-300 mb-4"
        {...props}
      >
        {children}
      </blockquote>
    ),

    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        {...props}
      >
        {children}
      </a>
    ),

    code: ({ children, ...props }) => (
      <code
        className="bg-gray-100 dark:bg-gray-800 text-sm text-purple-600 dark:text-purple-400 px-1 py-0.5 rounded"
        {...props}
      >
        {children}
      </code>
    ),

    pre: ({ children, ...props }) => (
      <pre
        className="bg-black text-white p-4 rounded-lg overflow-x-auto my-4"
        {...props}
      >
        {children}
      </pre>
    ),
  };
}
