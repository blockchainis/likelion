import { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ hits: [] });

  function getApiUrl(q) {
    return `https://hn.algolia.com/api/v1/search?query=${q}`;
  }

  useEffect(() => {
    async function fetchData(query) {
      const result = await axios(getApiUrl(query));
      setData(result.data);
    }
    fetchData(query);
  }, [query]);

  //서버에서 데이터 요청
  return (
    <div>
      <h1>헤커뉴스 데이터 입니다.</h1>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      ></input>
      <div>
        <SearchResults data={data} />
      </div>
    </div>
  );
}

export default App;