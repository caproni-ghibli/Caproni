import { sql } from '@/lib/db';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function Blogs() {

    const blogs = await sql`SELECT id, title, brief, tags, content FROM blogs ORDER BY id DESC`;


    return (
        <div className="w-(--page-width) px-5 max-w-full">
            <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Blogs</h1>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {blogs.map((blog) => (
                    <Link
                        href={`blogs/${blog.id}`}
                        key={blog.id}
                        className="block h-full"
                    >
                        <div
                            className="
                                border-border h-full dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5 text-text font-base flex flex-col cursor-pointer
                                transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none
                            "
                        >
                        <h2 className="text-base font-heading sm:text-lg mb-2">
                            {blog.title}
                        </h2>

                        <p className="mb-2 text-xs">{blog.brief}</p>

                        <div className="flex flex-wrap mt-auto items-center gap-1">
                            {blog.tags?.map((tag: string) => (
                            <span key={tag} className="font-heading text-[0.5rem]">
                                #{tag}
                            </span>
                            ))}
                        </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}