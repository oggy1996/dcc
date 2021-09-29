import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { H1 } from "./features/h1";

function App() {
  return (
    <Provider store={store}>
      <H1></H1>
    </Provider>
  );
}

export default App;
