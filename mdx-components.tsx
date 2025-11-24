import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-8 mb-3 text-gray-800">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link 
        href={href as string} 
        className="text-primary hover:underline font-semibold"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary bg-gray-50 pl-6 py-4 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code className="bg-gray-100 text-primary px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        )
      }
      return (
        <code className={className}>
          {children}
        </code>
      )
    },
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-6">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {children}
      </td>
    ),
    img: ({ src, alt }) => (
      <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
        <Image
          src={src as string}
          alt={alt as string}
          fill
          className="object-cover"
        />
      </div>
    ),
    hr: () => (
      <hr className="my-8 border-gray-200" />
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-700">
        {children}
      </em>
    ),
    ...components,
  }
}
