import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This sample paragraph uses a style attribute for a purple background
        and white text
      </p>
      <p
        id="wd-my-style-attr"
        style={{ backgroundColor: "green", color: "yellow" }}
      >
        I&apos;m Aayush, a first-year MS CS student at Northeastern&apos;s
        Khoury College. I styled this green and yellow paragraph with a style
        attribute just to see it work, even though I know the CSS file is the
        better habit.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different look
          and feel
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph has its own ID, wd-ai-id-selector, and a teal
          background with white text
        </p>
        <p id="wd-id-selector-3">
          This third ID is mine. Before Boston I spent my time on ML and NLP
          research plus security operations at K-State, so I gave this
          paragraph Northeastern red to mark the new chapter.
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element&apos;s
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector" id="wd-ai-class-selector-p">
          This sample paragraph uses the wd-ai-class-selector class
        </p>
        <h4 className="wd-ai-class-selector" id="wd-ai-class-selector-h4">
          This sample heading shares the wd-ai-class-selector look
        </h4>
        <p className="wd-my-class" id="wd-my-class-p">
          My own class gives this paragraph a terminal look, green on black,
          because that&apos;s what my screen looked like during security
          operations shifts.
        </p>
        <h4 className="wd-my-class" id="wd-my-class-h4">
          My heading shares the same class, so a p and an h4 look the same
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                This sample span is a descendant of .wd-selector-1, styled by
                .wd-selector-1 .wd-ai-selector-5
              </span>
            </p>
            <div className="wd-my-selector-6" id="wd-my-selector-6">
              My extra node is a direct child of .wd-selector-2, picked out by
              .wd-selector-2 &gt; .wd-my-selector-6. Change the &gt; to a space
              and nothing else on the page changes color.
            </div>
          </div>
        </div>
      </div>
      <div id="wd-css-cascade">
        <h3>CSS selection rule mechanism</h3>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          This sample paragraph matches a p tag rule (green), a class rule
          (yellow) and an id rule (red) for background-color - the id wins
        </p>
        <p id="wd-my-cascade" className="wd-my-cascade wd-my-cascade-tie">
          My specificity experiment: tag, class and id rules all fight over my
          text color, and the id wins even though it comes first in index.css.
          The purple border shows source order breaking a tie between two
          classes - kind of like checking which firewall rule actually fires.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
