import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchWidget = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    const timeoutHandlerId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 750);

    // useEffect tarafından döndürülen bu metotta CLEANUP işlemleri yapılır.

    // İlk tetikleme sonucunda dündürülecek olan bu metot, bir sonraki (2.) useEffect tetiklenmesinde çalışacak.
    // Fakat, dikkat et, useEffect içerisindeki mantık çalışmadan önce çalıştırılacak.

    // Diğer bir ifadeyle döndürülen bu metot hep bir sonraki useEffect tetiklenmesinden önce çalışıyor olacak.

    // .... Döngü bu şekilde ilerliyor.
    return () => {
      // canceling the last timer:
      clearTimeout(timeoutHandlerId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default SearchWidget;
