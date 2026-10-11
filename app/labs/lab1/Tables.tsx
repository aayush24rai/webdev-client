export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Node.js</td>
            <td align="center">3/3/21</td>
            <td align="right">76</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Express</td>
            <td align="center">3/10/21</td>
            <td align="right">93</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">MongoDB</td>
            <td align="center">3/17/21</td>
            <td align="right">100</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">REST APIs</td>
            <td align="center">3/24/21</td>
            <td align="right">82</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Git</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">87</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">88.7</td>
          </tr>
        </tfoot>
      </table>

      <h4>Daily Macros</h4>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Day</th>
            <th align="center">Calories</th>
            <th align="center">Protein (g)</th>
            <th align="center">Carbs (g)</th>
            <th align="center">Fat (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mon</td>
            <td align="right">2480</td>
            <td align="right">205</td>
            <td align="right">175</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Tue</td>
            <td align="right">2510</td>
            <td align="right">210</td>
            <td align="right">180</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Wed</td>
            <td align="right">2450</td>
            <td align="right">200</td>
            <td align="right">170</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Thu</td>
            <td align="right">2600</td>
            <td align="right">215</td>
            <td align="right">190</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Fri</td>
            <td align="right">2530</td>
            <td align="right">208</td>
            <td align="right">178</td>
            <td align="right">87</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Target</td>
            <td align="right">~2500</td>
            <td align="right">200+</td>
            <td align="right">~175</td>
            <td align="right">~85</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}