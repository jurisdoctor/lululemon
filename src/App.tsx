import "./App.css";

import { AppState } from "./store/wiki/types";
import Button from "./components/Button/Button";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loading from "./components/Loading/Loading";
import Table from "./components/Table/Table";
import { useSelector } from "react-redux";

const App = () => {
  const { error, status } = useSelector((state: AppState) => state.wiki);
  console.log(status, error);

  return (
    <div className="App">
      <h1>on this day</h1>
      <Button />
      <Table />
      {status === "loading" && <Loading />}
      {status === "failed" && <ErrorMessage />}
    </div>
  );
};

export default App;
