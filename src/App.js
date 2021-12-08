import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [displayText, setDisplayText] = useState("");

  // Creating a promise
  const hello = new Promise((resolve, reject) => {
    resolve("Hello");
  });

  // Using .then
  // hello.then(setDisplayText);

  // Chaining .then
  // hello.then((text) => text + " World!").then(setDisplayText);

  useEffect(() => {
    // Calling a GET api
    // axios.get("https://catfact.ninja/fact").then(console.log);

    // Handling the response and error
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setDisplayText(res.data.fact), handleError); // First function handles value, second handles errors

    // Using catch instead
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => res.data)
      .then((data) => data.fact)
      .then(setDisplayText)
      .catch(handleError); // Alternative to handle error (preferred)
  }, []);

  function handleError(error) {
    setDisplayText("Something went wrong!");
  }

  return <div className="App">{displayText}</div>;
}

export default App;
