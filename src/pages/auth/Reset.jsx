import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import resetImg from "../../assets/forgot.jpg";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="reset password" width="300px" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form>
            <input type="text" placeholder="Email" />
            <button className="--btn --btn-block --btn-primary">
              {" "}
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">-Login</Link>
              </p>

              <p>
                <Link to="/register">-Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
