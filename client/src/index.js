import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import client from "./client";
import App from "../components/App";
import "./index.css";

const Root = () => {
  return (
    <div id="app">
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
