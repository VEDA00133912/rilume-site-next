'use client';
import React from 'react';
import BotHeader from '../components/BotHeader';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Error.module.css';

export default function Error400() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <BotHeader titleSuffix='404 - Not Found' />
        ページが見つかりません
      </main>
      <Footer />
    </>
  );
}
