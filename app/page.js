"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./style.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] = useState(false);
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`/api/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  const searchPost = (e) => {
    if (e.type == "keydown" && e.key !== "Enter") {
      return;
    }
    setSearch(true);
    fetch(`/api/posts?q=${inputRef.current.value}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .finally(() => setSearch(false));
  };

  return (
    <div style={{ background: "#ffffff" }}>
      <main className="container mx-auto px-4 py-6">
        <div className="headerDivFlex">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#000" }}>
            Welcome to Revnitro Blog
          </h2>
          <div className=" justify-end px-4">
            <input
              id="InputboxMedia"
              onKeyDown={searchPost}
              ref={inputRef}
              type="text"
              className="px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Search..."
              style={{ color: "black" }}
              disabled={search}
            />
            <button
              id="buttonWidth"
              style={{ background: "#2200ff" }}
              onClick={searchPost}
              disabled={search}
              className="px-1 py-2 bg-blue-500 text-white rounded-md "
            >
              {search ? "..." : "Search"}
            </button>
          </div>
        </div>

        <p style={{ color: "#000", marginTop: "25px", fontSize: "18px" }}>
          With a combination of highly technical proficiency and captivating
          storytelling, RevNitros perceptive blogs provide an in-depth look into
          the automobile industry. RevNitro provides a top-notch automotive
          journal experience for both professionals and fans, ranging from
          in-depth reviews to cutting-edge engineering studies.{" "}
        </p>
      </main>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ marginTop: "30px" }}
      >
        {posts.map((post) => (
          <Link key={post._id} href={"/post/" + post._id}>
            <div className="border border-gray-200 p-4">
              <img
                className="w-full h-48 object-cover mb-4"
                src={post.image}
                alt="Post Image1"
              />
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "#000" }}
              >
                {post.title}
              </h2>
              <p className="text-gray-600">{post.short_description}</p>
            </div>
          </Link>
        ))}

        {!posts.length > 0 && inputRef.current.value && (
          <p style={{ color: "black" }}>
            No posts available for this query: <b>{inputRef.current.value}</b>
          </p>
        )}
      </div>
    </div>
  );
}
