export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />

      <br />
      My own image:
      <br />
      <img
        id="wd-your-image"
        width="200px"
        alt="React logo, the library I'm learning to build Kambaz with in CS5610"
        src="/images/reactjs.jpg"
      />

      <br />
      An extra sample image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Buzz Aldrin on the Moon during Apollo 11 (NASA)"
        src="https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg"
      />
    </div>
  );
}