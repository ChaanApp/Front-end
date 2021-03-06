import React, { useState } from "react";
import styles from "./loginUser.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

const initialState = {
  email: "",
  password: "",
};

export default function LoginUser() {
  const router = useRouter();

  const [dataLogin, setDataLogin] = useState(initialState);

  function saveState(event) {
    // initialState[event.target.name] = event.target.value;
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function login(event) {
    event.preventDefault();
<<<<<<< HEAD
    const url = "https://api.chaan.site/organizer/login";
=======
    const url = " https://api.chaan.site/organizer/login";
>>>>>>> 06605f1b8c8f0635cef16770356b3bd39f51386e
    const options = {
      method: "POST",
      body: JSON.stringify(dataLogin),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(url, options)
      .then((res) => res.json())
      .then((response) => {
       // console.log(response.data);
        if (response.data.token.token) {
          localStorage.setItem(
            "tokenUser",
            JSON.stringify(response.data.token.token)
          );
          localStorage.setItem(
            "idUser",
            JSON.stringify(response.data.token.id)
          );
          router.push("/dashboard-organizer");
        } else {
          alert(response.data);
        }
      })
      .catch((err) => {
       // console.log(err);
        alert("El email y/o contraseña son incorrectos");
      });
  }

  return (
    <div className={styles.containerLoginAndimg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Login</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div>
              <p className={styles.upInputLogin}>Email</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Email"
                name="email"
                onChange={saveState}
                value={dataLogin.email}
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Password</p>
              <input
                className={styles.inputLogin}
                type="password"
                placeholder="Password"
                name="password"
                onChange={saveState}
                value={dataLogin.password}
              />
            </div>
            <div className={styles.contetaContaseña}>
              <a className={styles.aContaseña}>Forgot my password</a>
            </div>
          </div>
          <button className={styles.btnL} onClick={login}>
            Login
          </button>
        </div>
      </div>
<<<<<<< HEAD
      <div className={styles.contImgLoginW}>
=======
      <div className={styles.contImgLoginWMD}>
>>>>>>> 06605f1b8c8f0635cef16770356b3bd39f51386e
        <Image
          width={500}
          height={500}
          className={styles.imgLoginW}
          src="/picLogW.jpg"
          alt=""
        />
      </div>
<<<<<<< HEAD
      <div className={styles.contImgLoginWMD}>
        <Image
          width={500}
          height={680}
          className={styles.imgLoginW}
          src="/picLogW.jpg"
          alt=""
        />
      </div>
=======
>>>>>>> 06605f1b8c8f0635cef16770356b3bd39f51386e
    </div>
  );
}
