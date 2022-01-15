import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../SingleContent/SingleContent";


const Home = () => {
  const [content, setContent] = useState([]);

  const fetchSearch = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://www.googleapis.com/books/v1/volumes?q=test",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = res.data;
      if (data.items.length > 0) {
        setContent(data.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <>
      <div className="trending">
        {content &&
          content.map((c) => <SingleContent key={c.id} id={c.id} detail={c} />)}
      </div>
    </>
  );
};
export default Home;
