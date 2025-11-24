"use client";

export function DeleteButton() {
  return (
    <button
      type="submit"
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      onClick={(e) => {
        if (!confirm("Are you sure you want to delete this post?")) {
          e.preventDefault();
        }
      }}
    >
      Delete
    </button>
  );
}
