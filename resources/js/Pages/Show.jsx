import { Link, useForm } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({ post }) {
    const route = useRoute();
    const { delete: destroy } = useForm();

    const onSubmit = (e) => {
        e.preventDefault();

        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', post));
    }

    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>
                        Posted on:{" "}
                        <span>
                            {new Date(post.created_at).toLocaleString()}
                        </span>
                    </span>
                </div>

                <p className="font-medium">{post.body}</p>

                <div className="flex items-center justify-end gap-2">
                    <Link href={route("posts.edit", post)} className="bg-green-500 rounded-md text-sm px-4 py-1 text-white">Edit</Link>

                    <form onSubmit={onSubmit}>
                        <button type="submit" className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                    </form>
                </div>

            </div>
        </>
    )
}
