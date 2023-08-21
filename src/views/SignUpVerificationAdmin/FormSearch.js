import { useState } from "react";
import { styled } from "styled-components";

const Formsearch = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
`;
const InputSearch = styled.input`
  outline: none;
`;

export default function FormSearch({ text, style, onSubmit }) {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(search);
  };
  return (
    <Formsearch
      className="d-flex col-6 px-2 mr-3 "
      style={style}
      role="search"
      onSubmit={handleSubmit}
    >
      <button className="border-0 p-0 bg-transparent">
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            color: text === "Search" ? "rgba(10, 72, 116, 0.8)" : "black",
          }}
        ></i>
      </button>
      <InputSearch
        className="border-0 w-100 py-1 px-2"
        type="search"
        placeholder={text}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </Formsearch>
  );
}
