import React from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    try {
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="search">
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          onClick={fetchSearch}
          variant="contained"
          style={{ marginLeft: 10 }}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
    </div>
  );
};
export default Search;
