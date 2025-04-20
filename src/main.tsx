import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<h1 className="text-blue-500">Olá mundo!</h1>
	</StrictMode>,
);
