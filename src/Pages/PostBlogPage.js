import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostBlogPage = ({ blogSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <strong>PostBlogPage</strong>
      <br />
      <br />
      <label>Title</label> &nbsp;
      <input
        type="text"
        value={title}
        onChange={(event) => {
          const newTitle = event.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <br />
      <br />
      <label>Author</label> &nbsp;
      <input
        type="text"
        value={author}
        onChange={(event) => {
          const newAuthor = event.target.value;
          setAuthor(newAuthor);
        }}
      ></input>
      <br />
      <br />
      <label>Category</label>
      <input
        type="text"
        value={category}
        onChange={(event) => {
          const newCategory = event.target.value;
          setCategory(newCategory);
        }}
      ></input>
      <br />
      <br />
      <label>Text</label> &nbsp;
      <textarea
        type="text"
        value={text}
        onChange={(event) => {
          const newText = event.target.value;
          setText(newText);
        }}
      ></textarea>
      <br />
      <br />
      <button
        id="submit"
        type="submit"
        onClick={
          ("click",
          () => {
            blogSubmit({
              title: title,
              author: author,
              category: category,
              text: text,
            });
            navigate("/");
          })
        }
      >
        Submit
      </button>
    </div>
  );
};

export default PostBlogPage;
