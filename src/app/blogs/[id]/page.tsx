import { notFound } from 'next/navigation';
import { sql } from '@/lib/db';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Mermaid from '@/components/ui/mermaid';

interface PageProps {
  params: Promise<{ id: string }>;
}


export default async function BlogPage({ params }: PageProps) {
  const { id } = await params;

  const rows = await sql`
    SELECT id, title, brief, tags, content
    FROM blogs
    WHERE id = ${id}
  `;

  const blog = rows[0];

  if (!blog) notFound();

  return (
    <div className="w-[--page-width] px-4 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-2xl font-heading sm:text-3xl">
        {blog.title}
      </h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1({ children }) {
              return (
                <h1 className="mt-10 mb-5 text-xl font-bold tracking-tight sm:text-2xl">
                  {children}
                </h1>
              );
            },

            h2({ children }) {
              return (
                <h2 className="mt-10 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                  {children}
                </h2>
              );
            },

            h3({ children }) {
              return (
                <h3 className="mt-8 mb-3 text-l font-semibold sm:text-xl">
                  {children}
                </h3>
              );
            },

            p({ children }) {
              return (
                <p className="mb-5 text-base leading-7">
                  {children}
                </p>
              );
            },

            ul({ children }) {
              return (
                <ul className="mb-6 ml-6 list-disc space-y-2">
                  {children}
                </ul>
              );
            },

            ol({ children }) {
              return (
                <ol className="mb-6 ml-6 list-decimal space-y-2">
                  {children}
                </ol>
              );
            },

            li({ children }) {
              return <li className="leading-7">{children}</li>;
            },

            a({ href, children }) {
              return (
                <a
                  href={href}
                  className="text-primary underline underline-offset-4 hover:opacity-80"
                >
                  {children}
                </a>
              );
            },

            blockquote({ children }) {
              return (
                <blockquote className="my-6 border-l-4 pl-4 italic text-muted-foreground">
                  {children}
                </blockquote>
              );
            },

            table({ children }) {
              return (
                <div className="not-prose my-6 w-full overflow-x-auto rounded-lg border border-neutral-300 dark:border-neutral-700">
                  <table className="w-full border-collapse text-sm">
                    {children}
                  </table>
                </div>
              );
            },

            thead({ children }) {
              return (
                <thead className="bg-neutral-100 dark:bg-neutral-800">
                  {children}
                </thead>
              );
            },

            tbody({ children }) {
              return <tbody>{children}</tbody>;
            },

            tr({ children }) {
              return (
                <tr className="border-b border-neutral-300 last:border-b-0 dark:border-neutral-700">
                  {children}
                </tr>
              );
            },

            th({ children }) {
              return (
                <th className="border-r border-neutral-300 px-4 py-2 text-left font-semibold last:border-r-0 dark:border-neutral-700">
                  {children}
                </th>
              );
            },

            td({ children }) {
              return (
                <td className="border-r border-neutral-300 px-4 py-2 align-top last:border-r-0 dark:border-neutral-700">
                  {children}
                </td>
              );
            },

            code({ className, children, ...props }) {
              if (className?.includes('language-mermaid')) {
                return (
                  <div className="my-8 w-full overflow-x-auto">
                    <Mermaid chart={String(children).trim()} />
                  </div>
                );
              }

              const isBlock = className?.startsWith('language-');

              return (
                <code
                  className={
                    isBlock
                      ? 'font-mono text-sm'
                      : 'rounded bg-muted px-1.5 py-0.5 font-mono text-sm'
                  }
                  {...props}
                >
                  {children}
                </code>
              );
            },

            pre({ children }) {
              const child = Array.isArray(children) ? children[0] : children;
              const isMermaid =
                (child as any)?.props?.className?.includes('language-mermaid');

              if (isMermaid) return <>{children}</>;

              return (
                <pre className="my-6 overflow-x-auto rounded-lg bg-muted p-4">
                  {children}
                </pre>
              );
            },
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
