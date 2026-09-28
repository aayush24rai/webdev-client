import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import AnchorTag from "./AnchorTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./forms/Forms";
import HighlightedParagraphLab from "./HighlightedParagraph";
import HighlightedBoxLab from "./HighlightedBox";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Lab 1 — Building UIs with HTML</h1>
      <HeadingTags />
      <ParagraphTag />
      <AnchorTag />
      <ListTags />
      <Tables />
      <Images />
      <Forms />
      <HighlightedParagraphLab />
      <HighlightedBoxLab />
    </div>
  );
}
