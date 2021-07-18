import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import { ThemeButton, NavLinkStyled, Logo, NavStyled } from "../styles";

const NavBar = (props) => {
  return (
    ///////////////////////////////////////////////////////////////////////////////////////

    <NavStyled class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <Logo to="/" className="navbar-brand">
            <img
              src={props.currentTheme === "light" ? lightLogo : darkLogo}
              width="100"
              alt="logo error"
            />
          </Logo>
        </a>

        <ThemeButton onClick={props.toggleTheme} className="nav-item">
          {props.currentTheme === "light" ? "Dark" : "Light"} mode
        </ThemeButton>
        <NavLinkStyled to="/posters" className="nav-item">
          Posters
        </NavLinkStyled>
        <NavLinkStyled to="/stores" className="nav-item">
          Posters Stores
        </NavLinkStyled>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Features
            </a>
            <a class="nav-link" href="#">
              Pricing
            </a>
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </div>
    </NavStyled>

    //////////////////////////////////////////////////////////////////////////////////////

    // <NavStyled className="navbar navbar-expand-lg">
    //   <div className="container-fluid">
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //       <Logo to="/" className="navbar-brand">
    //         <img
    //           src={props.currentTheme === "light" ? lightLogo : darkLogo}
    //           width="100"
    //           alt="logo error"
    //         />
    //       </Logo>

    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
    //         <ThemeButton onClick={props.toggleTheme} className="nav-item">
    //           {props.currentTheme === "light" ? "Dark" : "Light"} mode
    //         </ThemeButton>
    //         <NavLinkStyled to="/posters" className="nav-item">
    //           Posters
    //         </NavLinkStyled>
    //       </ul>
    //     </div>
    //   </div>
    // </NavStyled>
  );
};

export default NavBar;
