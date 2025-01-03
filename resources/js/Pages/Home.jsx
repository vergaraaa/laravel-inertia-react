export default function Home({ posts }) {
    return (
        <>
            <div className="title">Hello</div>

            <div>
                {
                    posts.map((post) => (
                        <div key={post.id} className="p-4 border-b">
                            <div className="text-sm text-slate-600">
                                <span>Posted on: <span>{new Date(post.created_at).toLocaleString()}</span></span>
                            </div>

                            <p className="font-medium">{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
