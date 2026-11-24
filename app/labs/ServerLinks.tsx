// Links graders use to find the Express server: its GitHub repo and its deployed root URL.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function ServerLinks() {
  return (
    <ul id="wd-server-links" className="list-disc pl-6">
      <li>
        <a
          id="wd-server-github"
          className="text-blue-700 underline"
          href="https://github.com/aayush24rai/webdev-server"
        >
          Node server GitHub repository
        </a>
      </li>
      <li>
        <a id="wd-server-url" className="text-blue-700 underline" href={HTTP_SERVER}>
          Deployed Node server ({HTTP_SERVER})
        </a>
      </li>
    </ul>
  );
}
