import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post('/posts')
    };

    return (
        <>
            <h1 className="title">Create</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={onSubmit}>
                    <textarea
                        rows={10}
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>

                    {errors.body && (<p className="error">{errors.body}</p>)}

                    <button disabled={processing} className="primary-btn mt-4">Create Post</button>
                </form>
            </div>
        </>
    )
}
