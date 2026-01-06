import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Overview from "./pages/Overview";
import Investigation from "./pages/Investigation";
import CustomerResponse from "./pages/CustomerResponse";
import InternalNotes from "./pages/InternalNotes";

type Page =
  | "overview"
  | "investigation"
  | "customer"
  | "internal";

function App() {
  const [page, setPage] = useState<Page>("overview");

  return (
    <div style={{ padding: "24px", maxWidth: "800px" }}>
      <nav style={{ marginBottom: "24px" }}>
        <button onClick={() => setPage("overview")}>Overview</button>{" "}
        <button onClick={() => setPage("investigation")}>Investigation</button>{" "}
        <button onClick={() => setPage("customer")}>Customer Response</button>{" "}
        <button onClick={() => setPage("internal")}>Internal Notes</button>
      </nav>

      {page === "overview" && <Overview />}
      {page === "investigation" && <Investigation />}
      {page === "customer" && <CustomerResponse />}
      {page === "internal" && <InternalNotes />}
      <Analytics />
    </div>
  );
}

export default App;
