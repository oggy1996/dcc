import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { H1 } from "./features/h1";

function App() {
  return (
    <Provider store={store}>
      <H1></H1>
      <iframe
        title="shivam rathi resume"
        src="https://drive.google.com/file/d/1ybYBOsl5osc27ZihU4pSLoAMop6uKXSG/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
    </Provider>
  );
}

export default App;
