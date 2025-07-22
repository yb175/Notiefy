import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main";
import { Provider } from "react-redux";
import store from "./stores";

function Index() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);