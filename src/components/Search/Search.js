import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  Button,
  Container,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import SingleContent from "../SingleContent/SingleContent";
// import "./Search.css";

const searchStyle = {
  display: "flex",
  height: "100px",
  justifyContent: "center",
  padding: "20px",
};

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + searchText,
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = res.data;
      if (data.items.length > 0) {
        setContent(data.items);
        console.log(data.items)
      }
    } catch (error) {
      console.error(error);
      setSearchText("");
    }
  };

  return (
    <div>
      <Container>
        <div className="search" style={searchStyle}>
          <TextField
            className="searchBox"
            style={{ flex: 1 }}
            size="medium"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10, height: "55px" }}
            size="small"
          >
            <SearchIcon />
          </Button>
        </div>
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent key={c.id} id={c.id} detail={c} />
            ))}
        </div>
      </Container>
    </div>
  );
};
export default Search;

/*


*/
