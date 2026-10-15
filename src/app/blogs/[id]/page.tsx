import { notFound } from 'next/navigation';
import { sql } from '@/lib/db';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Mermaid from '@/components/ui/mermaid';

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

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
    // w-full + max-w keeps your desktop width but lets the page shrink on phones.
    // On Tailwind v4 use max-w-(--page-width) instead of max-w-[--page-width].
    <div className="mx-auto w-full max-w-[--page-width] px-4 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-heading leading-tight break-words sm:mb-8 sm:text-3xl">
        {blog.title}
      </h1>

      <div className="prose prose-base max-w-none break-words dark:prose-invert sm:prose-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1({ children }) {
              return (
                <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight sm:mt-10 sm:mb-5 sm:text-3xl">
                  {children}
                </h1>
              );
            },

            h2({ children }) {
              return (
                <h2 className="mt-8 mb-3 text-xl font-bold tracking-tight sm:mt-10 sm:mb-4 sm:text-2xl">
                  {children}
                </h2>
              );
            },

            h3({ children }) {
              return (
                <h3 className="mt-6 mb-3 text-lg font-semibold sm:mt-8 sm:text-xl">
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
                <ul className="mb-6 ml-5 list-disc space-y-2 sm:ml-6">
                  {children}
                </ul>
              );
            },

            ol({ children }) {
              return (
                <ol className="mb-6 ml-5 list-decimal space-y-2 sm:ml-6">
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
                  className="text-primary underline underline-offset-4 break-words hover:opacity-80"
                >
                  {children}
                </a>
              );
            },

            blockquote({ children }) {
              return (
                <blockquote className="my-6 border-l-4 pl-3 italic text-muted-foreground sm:pl-4">
                  {children}
                </blockquote>
              );
            },

            // Images from markdown never overflow the screen
            img({ src, alt }) {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt={alt ?? ''}
                  className="my-6 h-auto max-w-full rounded-lg"
                />
              );
            },

            // The wrapper scrolls horizontally; min-w stops columns being crushed
            table({ children }) {
              return (
                <div className="not-prose my-6 w-full overflow-x-auto rounded-lg border border-neutral-300 dark:border-neutral-700">
                  <table className="w-full min-w-[32rem] border-collapse text-sm">
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
                <th className="border-r border-neutral-300 px-3 py-2 text-left font-semibold last:border-r-0 sm:px-4 dark:border-neutral-700">
                  {children}
                </th>
              );
            },

            td({ children }) {
              return (
                <td className="border-r border-neutral-300 px-3 py-2 align-top last:border-r-0 sm:px-4 dark:border-neutral-700">
                  {children}
                </td>
              );
            },

            code({ className, children, ...props }) {
              if (className?.includes('language-mermaid')) {
                return (
                  <div className="my-8 w-full overflow-x-auto [&_svg]:h-auto [&_svg]:max-w-full">
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
                      : 'rounded bg-muted px-1.5 py-0.5 font-mono text-sm break-words'
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
                <pre className="my-6 overflow-x-auto rounded-lg bg-muted p-3 text-sm sm:p-4">
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
