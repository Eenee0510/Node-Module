import logo from "./logo.svg";
import "./App.css";

function App() {
  const getData = async () => {
    return await fetch("http://localhost:3000/get-data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
}

export default App;
