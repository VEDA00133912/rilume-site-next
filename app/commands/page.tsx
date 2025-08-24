'use client';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import BotHeader from '../../components/BotHeader';
import CommandsPage from '../../components/CommandsPage';
import styles from '../../styles/Commands.module.css';

export default function Page() {
  const botName = "{ Rilume }";
  const botIcon = "/images/meta/bot-icon.png";
  const [commands, setCommands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/commands')
      .then(res => res.json())
      .then(data => {
        setCommands(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <BotHeader botName={botName} botIcon={botIcon} titleSuffix="コマンド一覧" />
        {loading ? <p>Loading commands...</p> : <CommandsPage commands={commands} />}
      </main>
      <Footer />
    </>
  );
}
