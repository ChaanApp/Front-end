import React, { useEffect, useState } from "react";
import styles from "./responsiveDrawerUser.module.scss";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const drawerWidth = 281;
const StyledLink = styled.a`
  color: white;
`;

function ResponsiveDrawer(props) {
  const router = useRouter();
  const [dataUser, setDataUser] = useState([]);
  const { organizerId } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  useEffect(() => {
    const miStorage = window.localStorage;
    const token = JSON.parse(miStorage.getItem("tokenUser"));
    const id = JSON.parse(miStorage.getItem("idUser"));

    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      async function getInfo() {
        const url = ` http://api.chaan.site/organizer/${id}`;
        const user = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            return data.data.organizer;
          });
        setDataUser(user);
        //console.log("Desde nav", user);
      }
      getInfo();
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={styles.ContainerAMenuM}>
      <h2 className={styles.TitleMenuDot}> cha&#39;an</h2>
      <div className={styles.ContainerAMenuM}>
        <Link href="/dashboard-organizer">
          <StyledLink className={styles.aOneMenuM} href="">
            Hola&#39; {dataUser.name}
          </StyledLink>
        </Link>
        <Link href="/">
          <StyledLink className={styles.aMenuM} href="">
            ¿Qué es cha&#39;an?
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
    organizerId !== undefined ? () => organizerId().document.body : undefined;

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
