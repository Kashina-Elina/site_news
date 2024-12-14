"use client";
import { useState } from "react";

export default function AddNewsForm() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>(""); // Дата в формате ISO (YYYY-MM-DD)
  const [excerpt, setExcerpt] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addNews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, excerpt, text, image }),
      });

      if (response.ok) {
        // const data = await response.json();
        setResponseMessage("News added successfully!");
        // Очистка формы
        setTitle("");
        setDate("");
        setExcerpt("");
        setText("");
        setImage("");
      } else {
        const errorText = await response.text();
        setResponseMessage(`Error: ${errorText}`);
      }
    } catch (error: unknown) {
      setResponseMessage(`Error: ${error}`);
    }
  };

  return (
    <div className="text-white grid grid-cols-1 gap-8">
      <form onSubmit={handleSubmit} className="w-full mx-auto">
        <label className="flex flex-col mb-2">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="text-black w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col mb-2">
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="text-black w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col mb-2">
          Excerpt:
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
            className="text-black w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col mb-2">
          Text:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="text-black w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="flex flex-col mb-2">
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="text-black w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="w-96 ml-32 flex rounded-full bg-white hover:bg-violet-600 text-black hover:text-white items-center mt-4 justify-center"
        >
          Add News
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
