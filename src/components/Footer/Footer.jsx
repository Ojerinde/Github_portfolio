import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/errorboundary">Test Error Boundary</Link>
          </li>
          <li>
            <Link to="/nopage">Test 404 page</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a
              href="https://github.com/Ojerinde"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub className="icon icon__git" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Joel_Ojerinde"
              target="_blank"
              rel="noreferrer"
            >
              <ImTwitter className="icon icon__twit" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ojerinde/"
              target="_blank"
              rel="noreferrer"
            >
              <ImLinkedin className="icon icon__lin" />
            </a>
          </li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut laborum
        eos ipsa at necessitatibus, totam sit iusto reprehenderit blanditiis
        quae, beatae corrupti omnis voluptatem atque eveniet cum adipisci
        dolorem esse.
      </p>
    </footer>
  );
};
export default Footer;
