import { useState } from "react";
import "./App.css";
import Blog from "./components/blog";
import BlogCreate from "./components/blog-create";
import { isValidUrl } from "./utils/functions";

function App() {
  const initialState = {
    photo: "",
    title: "",
    description: "",
    category: "",
  };
  const [input, setInput] = useState({ ...initialState });
  const [blogs, setBlogs] = useState([]);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      input.photo == "" ||
      input.title == "" ||
      input.description == "" ||
      input.category == ""
    ) {
      alert("all fields are required");
      return;
    }
    if (!isValidUrl(input.photo)) {
      alert("invalid url");
      return;
    }
    setBlogs((prev) => [...prev, input]);
    setInput({ ...initialState });
  };
  return (
    <>
      <BlogCreate
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Blog blogs={blogs} />
    </>
  );
}

export default App;
