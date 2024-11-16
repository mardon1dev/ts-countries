import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CountryContext } from "./context/Context.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <CountryContext>
      <Provider store={store}>
        <App />
      </Provider>
    </CountryContext>
  </BrowserRouter>
);
