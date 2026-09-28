export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>

      <p id="wd-p-your-1">
        I&apos;m finishing a dual BS in Computer Science and Mathematics, and
        starting an MS in Computer Science at Northeastern&apos;s Khoury College
        this fall. This class is part of that program, and Chapter 1 is my first
        real look at how Next.js structures a project.
      </p>
      <p id="wd-p-your-2">
        Outside of coursework, I spent two years as a Resident Advisor and founded
        the Multicultural Greek Council on my campus. Neither of those had much to
        do with writing code, but both involved a lot of the same thing this
        course keeps coming back to: taking something unfamiliar and breaking it
        into pieces small enough to actually work through.
      </p>

      <p id="wd-ai-p">
        Browsers collapse extra line breaks and blank lines in raw HTML source down
        to nothing, so text written on separate lines in your code still renders as
        one continuous block unless you explicitly mark a boundary. The paragraph
        tag is that explicit boundary: it tells the browser &quot;this text ends
        here, start a new block after it,&quot; which is what actually produces the
        vertical gap — the gap comes from the tag, never from however you happened
        to format your source file.
      </p>
    </div>
  );
}