import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import {
  ThemeButton,
  NavLinkStyled,
  Logo,
  NavStyled,
  SignoutStyled,
} from "../styles";
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const NavBar = (props) => {
  return (
    <NavStyled class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Logo to="/" className="navbar-brand">
          <img
            src={props.currentTheme === "light" ? lightLogo : darkLogo}
            width="100"
            alt="logo error"
          />
        </Logo>

        <ThemeButton onClick={props.toggleTheme} className="nav-item">
          {props.currentTheme === "light" ? "Dark" : "Light"} mode
        </ThemeButton>
        {authStore.user ? (
          <>
            <p>hello {authStore.user.username}</p>
            <SignoutStyled onClick={authStore.signout}></SignoutStyled>
          </>
        ) : (
          <>
            <SigninButton />
            <SignupButton />
          </>
        )}
        <NavLinkStyled to="/posters" className="nav-item">
          Posters
        </NavLinkStyled>
        <NavLinkStyled to="/stores" className="nav-item">
          Posters Stores
        </NavLinkStyled>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav"></div>
        </div>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
