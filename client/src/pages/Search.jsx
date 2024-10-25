import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchRounded } from "@mui/icons-material";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>
        <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
