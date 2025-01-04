import { NavLink } from "components/uikit";
import { Navbar } from "components/uikit/Navbar";

export const HeadNav = () => {
  return (
    <>
      <Navbar>
        <Navbar.Right>
          <NavLink href="/">Home</NavLink>
          <NavLink
            as="a"
            href="https://github.com/topratiksharma?tab=repositories"
            target="_blank"
          >
            Projects
          </NavLink>
        </Navbar.Right>
      </Navbar>
    </>
  );
};
