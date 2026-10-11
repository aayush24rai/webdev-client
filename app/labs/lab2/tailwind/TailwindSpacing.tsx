export default function TailwindSpacing() {
  return (
    <div>
      <h2 className="text-3xl">Margin</h2>
      <div className="bg-blue-200 mb-4 p-4">
        This div has a bottom margin of 4.
      </div>
      <div className="bg-blue-200 ms-4 me-8 p-4">
        This div has a start margin of 4 and an end margin of 8.
      </div>
      <h2 className="text-3xl mt-8">Padding</h2>
      <div className="bg-green-200 ps-2 pt-4 pb-8 mb-4">
        This div has starting padding of 2, top padding of 4, and bottom padding of 8.
      </div>
      <div className="bg-green-200 p-6">This div has padding all around of 6.</div>
      <div id="wd-my-spacing" className="bg-orange-200 mt-10 ms-12 ps-16 pe-2 pt-2 pb-10">
        Aayush&apos;s box: a top margin of 10 and a start margin of 12, then a
        big start padding of 16 and bottom padding of 10, but only 2 on the
        top and end. Kind of like my NLP notes: lots of space on one side.
      </div>
      <div id="wd-ai-spacing" className="bg-purple-200 mt-6 ps-8 pb-4">
        This sample div has a top margin of 6, starting padding of 8, and
        bottom padding of 4.
      </div>
    </div>
  );
}
