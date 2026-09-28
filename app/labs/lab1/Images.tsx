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
        width="400px"
        alt="A photo I picked to represent this section"
        src="https://picsum.photos/seed/aayush-cs5610/500/350"
      />

      <br />
      An extra sample image:
      <br />
      <img
        id="wd-ai-image"
        width="400px"
        alt="Sample placeholder photo"
        src="https://picsum.photos/seed/wd-ai-image/500/350"
      />
    </div>
  );
}