import * as React from "react";
import styles from "./responsiveDrawer.module.scss";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const drawerWidth = 281;
const StyledLink = styled.a`
  color: white;
`;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={styles.ContainerAMenuM}>
      <h2 className={styles.TitleMenuDot}> cha'an</h2>
      <div className={styles.ContainerAMenuM}>
        <Link href="/login-user">
          <StyledLink className={styles.aOneMenuM} href="">
            Login
          </StyledLink>
        </Link>
        <Link href="/signinUser">
          <StyledLink className={styles.aOneMenuMtwo} href="">
            SignUp
          </StyledLink>
        </Link>
        <Link href="/">
          <StyledLink className={styles.aMenuM} href="">
            ¿Qué es cha'an?
          </StyledLink>
        </Link>
        <Link href="/login-invitee">
          <StyledLink className={styles.aMenuM} href="">
            Soy invitado
          </StyledLink>
        </Link>
        <Link href="/register-event">
          <StyledLink className={styles.aTwoMenuM} href="">
            Crear un evento
          </StyledLink>
        </Link>
      </div>
      <div className={styles.iconDot}>
        <FiberManualRecordIcon sx={{ fontSize: 34 }} />
        <FiberManualRecordIcon sx={{ fontSize: 34 }} />
        <FiberManualRecordIcon sx={{ fontSize: 34 }} />
        <FiberManualRecordIcon sx={{ fontSize: 34 }} />
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.contenticonMenu}>
      <AppBar className={styles.appBarStyles}>
        <Image
          width={500}
          height={500}
          className={styles.iconMenu}
          src="/menu.png"
          alt=""
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        />
      </AppBar>
      <div
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
