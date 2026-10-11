export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>
      <p className="wd-border-fat wd-border-red wd-border-solid">
        Solid fat red border
      </p>
      <p className="wd-border-thin wd-border-blue wd-border-dashed">
        Dashed thin blue border
      </p>
      <p
        id="wd-ai-border"
        className="wd-border-fat wd-border-dashed wd-border-yellow"
      >
        Dashed fat yellow border
      </p>
      <p id="wd-my-border" className="wd-border-fat wd-border-blue wd-border-dashed">
        Fat dashed blue border around my note: three small classes, no new
        rule, and it already looks like a warning box in a security dashboard
      </p>
    </div>
  );
}
