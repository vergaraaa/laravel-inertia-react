import { Link } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({ posts }) {
    const route = useRoute();

    return (
        <>
            <div className="title">Hello</div>

            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>
                                Posted on:{" "}
                                <span>
                                    {new Date(post.created_at).toLocaleString()}
                                </span>
                            </span>
                        </div>

                        <p className="font-medium">{post.body}</p>

                        {/* <Link href={`/posts/${post.id}`} className="text-link">Read more...</Link> */}

                        <Link href={route('posts.show', post)} className="text-link">Read more...</Link>
                    </div>
                ))}
            </div>

            <div className="py-12">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""
                                }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            key={link.label}
                            className="p-1 mx-1 text-slate-300"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></span>
                    )
                )}
            </div>
        </>
    );
}
