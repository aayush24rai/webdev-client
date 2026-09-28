export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />

      <h5>On my own</h5>
      <a href="https://www.youtube.com" id="wd-your-link">
        A site I visit often
      </a>
      <br />
      <a
        href="https://github.com/aayush24rai"
        id="wd-your-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/aayush24rai/"
        id="wd-your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        My LinkedIn
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>

      <p id="wd-ai-a">
        The links above to my own profiles open in a new tab, which needed
        target=&quot;_blank&quot; on the anchor tag. Opening a new tab this way
        gives the new page a reference back to the original one through
        window.opener, which it could use to redirect the page you came from —
        adding rel=&quot;noopener noreferrer&quot; is what breaks that
        connection so the two tabs stay independent.
      </p>
    </>
  );
}
