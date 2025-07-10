import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./store/ProductContext";
import { UserProvider } from "./store/UserContext";
import { ChatProvider } from "./store/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
);
