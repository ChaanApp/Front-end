import * as React from "react";
import styles from "./responsiveDrawerUser.module.scss";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const drawerWidth = 281;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={styles.ContainerAMenuM}>
      <h2 className={styles.TitleMenuDot}> cha’an</h2>
      <div className={styles.ContainerAMenuM}>
        <a className={styles.aOneMenuM} href="">
          Name User
        </a>
        <a className={styles.aMenuM} href="">
          ¿Qué es cha’an?
        </a>
        <a className={styles.aMenuM} href="">
          Soy invitado
        </a>
        <a className={styles.aTwoMenuM} href="">
          Crear un evento
        </a>
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
        <img
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
