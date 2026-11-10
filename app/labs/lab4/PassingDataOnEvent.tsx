"use client";
const hello = () => {
  alert("Hello");
};
const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};
export default function PassingDataOnEvent() {
  return (
    <div id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      <button onClick={hello} id="wd-pass-data-click">
        Pass Data
      </button>{" "}
      <button onClick={() => lifeIs("Good!")} id="wd-pass-data-parameter-click">
        Pass Data Parameter
      </button>{" "}
      <button onClick={() => lifeIs("NLP + Web Development")} id="wd-pass-data-course-click">
        Pass Course Data
      </button>
      <hr />
    </div>
  );
}
