const LOVABLE_APP_URL = "https://admin-mate.lovable.app";

export default function Investigation() {
  return (
    <div>
      <h1>Investigation</h1>

      <h3>Reported issue</h3>
      <p>
        Customer says adoption of <b>Create Workflow</b> looks much lower than expected after launch.
        They’re worried the rollout isn’t landing.
      </p>

      <h3>What I checked first (and why)</h3>
      <p>
        I started by verifying whether the tracking was firing consistently across user roles. In my
        experience, “low adoption” is often a measurement problem (instrumentation, definition, or
        segmentation) before it’s a true usage problem.
      </p>

      <h3>Steps taken</h3>
      <ol>
        <li>
          Opened the demo app and verified the feature flow: Create → Complete (
          <a href={LOVABLE_APP_URL} target="_blank" rel="noreferrer">
            Lovable workspace
          </a>
          ).
        </li>
        <li>Logged in as <b>Admin</b> and completed a workflow.</li>
        <li>Checked the Event Log / Instrumentation view for a completion event.</li>
        <li>Logged in as <b>Member</b> and completed the same workflow.</li>
        <li>Checked the Event Log again and compared Admin vs Member.</li>
      </ol>

      <h3>What I observed</h3>
      <ul>
        <li>Admins can complete the workflow and a completion event shows up in the Event Log.</li>
        <li>Members can complete the workflow too, but the completion event does <b>not</b> show up.</li>
      </ul>

      <h3>Findings (root cause)</h3>
      <p>
        The feature is being used by both roles, but the <b>Workflow Completed</b> tracking is scoped
        to Admin users only. Because adoption is being measured using that completion event, the
        metric underreports real usage and makes adoption look artificially low.
      </p>

      <h3>Recommended resolution</h3>
      <ul>
        <li>
          Update tracking so <b>Workflow Completed</b> fires for both Admin and Member roles.
        </li>
        <li>
          (Optional) Add an earlier event like <b>Workflow Started</b> so you can see partial usage
          and where people drop off.
        </li>
      </ul>

      <h3>Why this matters</h3>
      <p>
        Nothing here looks like a product bug. It’s a tracking/definition issue — and those can
        quietly wreck trust if the customer thinks the numbers mean “nobody is using this.”
      </p>

      <h3>Next validation step (after the fix)</h3>
      <p>
        After updating the tracking, I’d re-run the same Admin vs Member flow and confirm the
        completion event shows up for both. Then I’d sanity check adoption again and make sure the
        “low adoption” story matches what we observe in the product.
      </p>
    </div>
  );
}
