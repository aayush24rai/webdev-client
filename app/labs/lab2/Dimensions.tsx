export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box has a long sentence inside so you can see that the
          declared 120px by 60px size does not grow to fit the text
        </div>
        <div
          id="wd-my-dimension"
          className="wd-my-dimension-banner wd-bg-color-green wd-fg-color-white"
        >
          Aayush Rai - CS5610
        </div>
      </div>
    </div>
  );
}
