const LOVABLE_APP_URL = "https://admin-mate.lovable.app";

export default function CustomerResponse() {
  const subject = "Update on Create Workflow adoption tracking";

  const body = `Hey there —

We took a closer look at how “Create Workflow” is being tracked.

Good news: the feature is being used. The reason adoption looks lower than expected is that the “Workflow Completed” event is currently only firing for Admin users. Members can complete workflows too, but those completions aren’t being captured — so the adoption metric is undercounting real usage.

Next step: we’ll update the tracking so the completion event fires for both Admin and Member roles. After that, we’ll re-check adoption and confirm the numbers match what we’re seeing in the product.

If you want to sanity check it on your side, here’s the repro environment we used:
${LOVABLE_APP_URL}

Thanks —
Jamie`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    alert("Copied customer reply to clipboard");
  };

  return (
    <div>
      <h1>Customer Response</h1>

      <p>
        This is the customer-facing message I’d send to explain what’s happening,
        what we’re changing, and what they should expect next.
      </p>

      <button
        onClick={handleCopy}
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 10,
          padding: "8px 10px",
          cursor: "pointer",
          fontWeight: 700,
          margin: "12px 0",
        }}
      >
        Copy message
      </button>

      <div
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 12,
          background: "#fafafa",
          color: "#213547",
        }}
      >
        <strong>Subject:</strong> {subject}
        {"\n\n"}
        {body}
      </div>
    </div>
  );
}
