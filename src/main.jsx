import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
	<React.StrictMode>
		<Toaster />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
