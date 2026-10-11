export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>

      <h5>My favorite recipe</h5>
      <ol id="wd-your-favorite-recipe">
        <li>Crack 2-3 eggs into a bowl and whisk until fully blended, no streaks of white left.</li>
        <li>Add a splash of milk and a pinch of salt, whisk again.</li>
        <li>Melt butter in a nonstick pan over low-medium heat.</li>
        <li>Pour in the eggs and let them sit for a few seconds without touching.</li>
        <li>Push the eggs gently from the edges toward the center with a spatula as they set.</li>
        <li>Remove from heat while still slightly wet — they keep cooking off the heat.</li>
        <li>Season with pepper and serve immediately.</li>
      </ol>

      <h5>My favorites</h5>
      <ul id="wd-your-books">
        <li>Dan Brown series</li>
        <li>Harry Potter</li>
        <li>The Intelligent Investor</li>
        <li>48 Laws of Power</li>
      </ul>

      <h5>HTML tags from this chapter</h5>
      <ul id="wd-ai-html-tags">
        <li>h1 – a top-level heading (h6 is the smallest)</li>
        <li>div – a generic block container for grouping</li>
        <li>span – a generic inline container</li>
        <li>p – a paragraph with vertical space around it</li>
        <li>ol – a numbered list where order matters</li>
        <li>ul – a bulleted list where order does not matter</li>
        <li>li – one item inside an ol or ul</li>
        <li>table – rows and columns of data</li>
      </ul>
    </div>
  );
}