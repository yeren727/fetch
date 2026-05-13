import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { BASE_URL } from "../App";


function PostDetails() {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [post, setSinglePost] = useState(null);

    async function fetchSinglePost() {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/posts/${id}`);
        const data = await response.json();
        setSinglePost(data);
        setLoading(false);
    }
    useEffect(() => {
        if (id) {
            fetchSinglePost();
        }
    }, [id]);



     return (
        <div
            style={{
                maxWidth: "600px",
                margin: "20px auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2
                style={{
                    color: "#333",
                    marginBottom: "15px",
                    fontSize: "28px",
                }}
            >
                {post?.title}
            </h2>

            <p
                style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    color: "#555",
                }}
            >
                <strong>User ID:</strong> {post?.userId}
            </p>

            <p
                style={{
                    fontSize: "16px",
                    marginBottom: "15px",
                    color: "#555",
                }}
            >
                <strong>Post ID:</strong> {post?.id}
            </p>

            <p
                style={{
                    whiteSpace: "pre-line",
                    lineHeight: "1.6",
                    color: "#444",
                    backgroundColor: "#fff",
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #eee",
                }}
            >
                {post?.body}
            </p>
        </div>
    );
};
 

export default PostDetails;