"use client";

export default function CreatePostButton() {
  async function createPost() {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "New post",
        content: "This was created by clicking the button",
      }),
    });

    if (res.ok) {
      alert("Post created!");
      window.location.reload(); 
    } else {
      const error = await res.json();
      alert(`Error: ${error.error}`);
    }
  }

  return (
    <button
      onClick={createPost}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
    >
      Create Post
    </button>
  );
}
