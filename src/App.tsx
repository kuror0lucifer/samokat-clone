import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Route, Routes } from "react-router-dom";

function App() {
  const [id, setId] = React.useState<string>("");

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home id={id} setId={setId} />}></Route>
        <Route
          path="/products"
          element={<Home id={id} setId={setId} />}
        ></Route>
      </Routes>
    </Provider>
  );
}

export default App;
