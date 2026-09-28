export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text fields</h5>
      <label htmlFor="wd-your-form-first-name">First name:</label>
      <br />
      <input type="text" defaultValue="Aayush" id="wd-your-form-first-name" />
      <br />
      <label htmlFor="wd-your-form-last-name">Last name:</label>
      <br />
      <input type="text" defaultValue="Rai" id="wd-your-form-last-name" />
      <br />
      <label htmlFor="wd-your-form-student-id">Student ID:</label>
      <br />
      <input
        type="password"
        placeholder="NUID"
        id="wd-your-form-student-id"
      />
      <br />

      <h5>Textarea</h5>
      <label htmlFor="wd-your-form-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={40}
        rows={4}
        defaultValue="Dual BS in Computer Science and Mathematics at Kansas State University, starting an MS in Computer Science at Northeastern's Khoury College this fall. Background spans ML/NLP research, computer vision, and cybersecurity, and I want to get solid at building full-stack web apps."
      />
      <br />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-freshman"
      />
      <label htmlFor="wd-your-form-standing-freshman">Freshman</label>
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-sophomore"
      />
      <label htmlFor="wd-your-form-standing-sophomore">Sophomore</label>
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-junior"
      />
      <label htmlFor="wd-your-form-standing-junior">Junior</label>
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-senior"
      />
      <label htmlFor="wd-your-form-standing-senior">Senior</label>
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-form-standing-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="wd-your-form-enrollment"
        id="wd-your-form-enrollment-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-form-enrollment-full-time">Full-time</label>
      <input
        type="radio"
        name="wd-your-form-enrollment"
        id="wd-your-form-enrollment-part-time"
      />
      <label htmlFor="wd-your-form-enrollment-part-time">Part-time</label>
      <br />

      <h5>Checkboxes</h5>
      <label>Areas of interest:</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-ml"
        defaultChecked
      />
      <label htmlFor="wd-your-form-interest-ml">Machine Learning / NLP</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-sec"
        defaultChecked
      />
      <label htmlFor="wd-your-form-interest-sec">Cybersecurity</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-web"
        defaultChecked
      />
      <label htmlFor="wd-your-form-interest-web">Web Development</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-quant"
      />
      <label htmlFor="wd-your-form-interest-quant">Quantitative Finance</label>
      <br />

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-form-major">Major:</label>
      <br />
      <select id="wd-your-form-major" defaultValue="MSCS">
        <option value="BSCS">BS Computer Science</option>
        <option value="BSMATH">BS Mathematics</option>
        <option value="MSCS">MS Computer Science</option>
        <option value="MSDS">MS Data Science</option>
      </select>
      <br />
      <label htmlFor="wd-your-form-topics">Topics to deepen this term:</label>
      <br />
      <select
        multiple
        id="wd-your-form-topics"
        defaultValue={["REACT", "NODE"]}
      >
        <option value="HTML">HTML &amp; CSS</option>
        <option value="REACT">React / Next.js</option>
        <option value="NODE">Node.js &amp; Express</option>
        <option value="MONGO">MongoDB</option>
        <option value="DEPLOY">Deployment</option>
      </select>
      <br />

      <h5>Other field types</h5>
      <label htmlFor="wd-your-form-email">School email:</label>
      <br />
      <input
        type="email"
        placeholder="you@northeastern.edu"
        id="wd-your-form-email"
      />
      <br />
      <label htmlFor="wd-your-form-grad-year">Expected graduation year:</label>
      <br />
      <input
        type="number"
        id="wd-your-form-grad-year"
        defaultValue={2028}
        min={2026}
        max={2032}
      />
      <br />
      <label htmlFor="wd-your-form-start">Program start date:</label>
      <br />
      <input
        type="date"
        id="wd-your-form-start"
        defaultValue="2026-09-08"
        min="1900-01-01"
        max="2100-12-31"
      />
      <br />
      <label htmlFor="wd-your-form-excitement">
        How excited am I about this course (0–10):
      </label>
      <br />
      <input
        type="range"
        id="wd-your-form-excitement"
        min="0"
        max="10"
        defaultValue="9"
      />
      <br />

      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
