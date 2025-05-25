import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x-social.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div className="text-center items-center">
            © 2025 Developed with{" "}
            <span className="animate-pulse text-white">❤️</span> by{" "}
            <a
              href="https://www.virendrapatil.xyz/"
              target="_blank"
              className="font-bold text-white/80 hover:text-white"
            >
              Virendra Patil
            </a>
          </div>
          <ul className="flex gap-2.5">
            <li>
              <a href="https://github.com/virendrapatil24" target="_blank">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/virendrapatil_4/"
                target="_blank"
              >
                <InstaIcon />
              </a>
            </li>
            <li>
              <a href="https://x.com/virendrapatil24" target="_blank">
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/virendrapatil24/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
