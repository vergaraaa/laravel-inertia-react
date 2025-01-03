import { Link } from "@inertiajs/react";

export default function Home({ name }) {
    return (
        <>
            <div className="title">Home {name}</div>

            <Link preserveScroll href="/" className="block mt-[1000px] title">{new Date().toLocaleTimeString()}</Link>
        </>
    )
}
