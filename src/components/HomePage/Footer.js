import GithubIcon from "images/social-media/github.svg";
import TwitterIcon from "images/social-media/twitter.svg";
import LinkedIcon from "images/social-media/linked-in.svg";

const SocialMediaLink = ({ href, iconEl, ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      className="w-7 h-7 text-slate-600 hover:text-slate:700 dark:text-slate-400 dark:hover:text-slate-300 transition-transform hover:scale-105"
    >
      {iconEl}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="text-center flex gap-x-8 pointer-fine:gap-x-3 items-center justify-center">
      <SocialMediaLink
        href="https://github.com/topratiksharma"
        iconEl={<GithubIcon width="1.75rem" />}
        ariaLabel="My Github Profile"
      />
      <SocialMediaLink
        href="https://x.com/NomadicPratik"
        iconEl={<TwitterIcon width="1.75rem" />}
        ariaLabel="My X Profile"
      />
      <SocialMediaLink
        href="https://www.linkedin.com/in/sharmapratik/"
        iconEl={<LinkedIcon width="1.75rem" />}
        ariaLabel="My Linedin profile"
      />
    </footer>
  );
};
