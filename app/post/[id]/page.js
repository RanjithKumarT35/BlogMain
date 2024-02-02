"use client";
import { useEffect, useState } from "react";

export default function Post({ params }) {
  const id = params.id;
  const [post, setPost] = useState(null);
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    fetch(`/api/post/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <>
      {post && (
        <main
          className="container mx-auto px-4 py-6"
          style={{ background: "#fff", marginTop: "20px" }}
        >
          {/* --------------------------------------Default code------------------------------------- */}
          <h2 className="text-4xl font-bold mb-4" style={{ color: "black" }}>
            {" "}
            {post.title}{" "}
          </h2>
          <p className="text-gray-500">{post.created_at_formatted}</p>
          <img
            style={{
              marginTop: "20px",
            }}
            src={post.image}
            className="my-4"
          />

          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description}
          </p>

          {/* --------------------------------------Default code------------------------------------- */}
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title1}{" "}
          </h6>

          <img
            style={{
              marginTop: "20px",
            }}
            src={post.image1}
            className="my-4"
          />
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description1}
          </p>

          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title2}{" "}
          </h6>
          <img
            style={{
              marginTop: "20px",
            }}
            src={post.image2}
            className="my-4"
          />
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description2}
          </p>

          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title3}{" "}
          </h6>
          <img
            style={{
              marginTop: "20px",
            }}
            src={post.image3}
            className="my-4"
          />
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description3}
          </p>

          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title4}{" "}
          </h6>
          <img
            style={{
              marginTop: "20px",
            }}
            src={post.image4}
            className="my-4"
          />
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description4}
          </p>

          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title5}{" "}
          </h6>
          <img
            style={{
              marginTop: "20px",
            }}
            src={post.image5}
            className="my-4"
          />
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description5}
          </p>

          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title6}{" "}
          </h6>
          <img
            style={{
              marginTop: "20px",
            }}
            src={post.image6}
            className="my-4"
          />
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description6}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title7}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description7}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title8}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description8}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title9}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description9}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title10}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description10}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title11}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description11}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title12}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description12}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title13}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description13}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title14}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description14}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title15}{" "}
          </h6>
          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description15}
          </p>
          <h6
            className="text-4xl font-bold mb-4"
            style={{ color: "black", fontSize: "24px", marginTop: "25px" }}
          >
            {" "}
            {post.title16}{" "}
          </h6>

          <p style={{ color: "#000000", fontWeight: "600" }}>
            {post.description16}
          </p>
        </main>
      )}
    </>
  );
}
