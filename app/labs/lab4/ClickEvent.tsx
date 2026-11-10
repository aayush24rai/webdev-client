"use client";
export default function ClickEvent() {
  const hello = () => {
    alert("Hello World!");
  };
  const greetAayush = () => {
    alert("Hi, I am Aayush Rai - CS5610 at Northeastern!");
  };
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button onClick={hello} id="wd-onclick-hello">
        Click Hello
      </button>{" "}
      <button onClick={greetAayush} id="wd-onclick-aayush">
        Click Aayush
      </button>
      <hr />
    </div>
  );
}
