import { createRoot } from "react-dom/client";
import Journal from "./journal/journal.jsx";
import PropsPractice from "./props/props.jsx";
import JokeApp from "./jokes/gateway.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<Journal />);
