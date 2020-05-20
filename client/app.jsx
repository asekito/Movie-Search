import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <Search />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
