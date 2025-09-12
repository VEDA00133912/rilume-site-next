'use client';
import React from 'react';
import BotHeader from '../components/BotHeader';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Error.module.css';

export default function Error500() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <BotHeader titleSuffix='サポート' />
        サーバーで問題が発生しました
      </main>
      <Footer />
    </>
  );
}
