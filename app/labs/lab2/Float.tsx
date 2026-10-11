const STARSHIP =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";
export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        <div className="wd-float-done" />
      </div>
      <div>
        <div
          id="wd-ai-float"
          className="wd-float-right wd-bg-color-green wd-fg-color-white"
        >
          AI float
        </div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>
      <div id="wd-my-float">
        <img className="wd-float-left" src="/images/reactjs.jpg" alt="React" />
        <p>
          My float goes left, the opposite of the first Starship image. React is
          the reason I&apos;m doing all this CSS: by the end of CS5610 I want
          Kambaz to look like the real thing, and after years of training ML
          models and reading security logs, building a UI people can actually
          click on feels like a nice change. This text wraps around the React
          logo until the clearing div below stops the float.
        </p>
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
