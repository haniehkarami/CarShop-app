import React from "react";

import styles from "./Layout.module.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Carshoop</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Next.js Courses{" "}
        <a href="https://github.com/haniehkarami" target="_blank">
          Hanieh Karami
        </a>{" "}
        &copy;
      </footer>
    </>
  );
}

export default Layout;
