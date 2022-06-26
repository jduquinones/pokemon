import React from 'react'
import { Outlet } from 'react-router-dom'
import './css/normalize.css';
import styles from './css/layout.module.css'
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';


export function Layout() {
  return (
    <main className={styles.main} >
      <Nav />
      <section>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
