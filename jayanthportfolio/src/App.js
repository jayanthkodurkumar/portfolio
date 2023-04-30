import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import "./app.css";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <HashLoader color={"#D4FC79"} loading={loading} size={50} />{" "}
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
