const LOVABLE_APP_URL = "https://admin-mate.lovable.app";

export default function Overview() {
  return (
    <div>
      <h1>Low Adoption of “Create Workflow” Feature</h1>

      <p>
        Customer reports that adoption of the <b>Create Workflow</b> feature looks much lower than
        expected after launch.
      </p>

      <h3>Customer context</h3>
      <ul>
        <li><b>Roles:</b> Admin, Member</li>
        <li><b>Feature flow:</b> Create → Complete</li>
        <li><b>Where they’re looking:</b> “Feature adoption” metric</li>
      </ul>

      <h3>Repro environment</h3>
      <ul>
        <li>
          <b>Demo app (customer context):</b>{" "}
          <a href={LOVABLE_APP_URL} target="_blank" rel="noreferrer">
            Open Lovable workspace
          </a>
        </li>
        <li>
          <b>Known tracking behavior:</b> completion event logs for Admin but not Member
        </li>
      </ul>

      <h3>Risk</h3>
      <p>
        <b>High:</b> customer is questioning whether the rollout is working and whether the product
        is worth expanding.
      </p>
    </div>
  );
}
