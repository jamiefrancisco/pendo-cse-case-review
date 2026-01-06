export default function InternalNotes() {
  return (
    <div>
      <h1>Internal Notes</h1>

      <h3>Root cause</h3>
      <p>
        The <b>Workflow Completed</b> event is scoped to Admin-only interactions.
        Members can complete the workflow, but their completions are not tracked.
      </p>

      <h3>Why this happened</h3>
      <p>
        The completion event was attached to an Admin-only control late in the
        workflow. Because adoption was measured using that event, Member usage
        was effectively invisible.
      </p>

      <h3>Impact</h3>
      <ul>
        <li>Adoption metrics significantly underreported real usage</li>
        <li>Customer confidence in rollout was shaken</li>
        <li>No actual product bug — instrumentation issue only</li>
      </ul>

      <h3>Resolution</h3>
      <ul>
        <li>Update completion event to fire for all relevant roles</li>
        <li>Optionally add an earlier event (e.g. “Workflow Started”) for visibility</li>
      </ul>

      <h3>Checklist for future cases</h3>
      <ul>
        <li>Confirm events fire for all intended user roles</li>
        <li>Validate event placement in the feature flow</li>
        <li>Compare tracked behavior against real user behavior</li>
        <li>Sanity check adoption definitions before escalating</li>
      </ul>

      <h3>Escalation guidance</h3>
      <p>
        This issue does not require engineering escalation. Fix can be handled
        through tracking definition updates and customer education.
      </p>

      <h3>Notes</h3>
      <p>
        This is a common pattern with feature adoption issues — especially when
        teams track only final-step events or assume all users interact with
        features the same way.
      </p>
    </div>
  );
}
