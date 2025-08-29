'use client';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import BotHeader from '../../components/BotHeader';
import CommandsPage from '../../components/CommandsPage';
import styles from '../../styles/Commands.module.css';

type DiscordCommandOption = {
  type: number;
  name: string;
  description: string;
  required?: boolean;
  choices?: { name: string; value: string | number }[];
  options?: DiscordCommandOption[];
};

type DiscordCommand = {
  id: string;
  type: number;
  name: string;
  description: string;
  options?: DiscordCommandOption[];
};

export default function Page() {
  const [commands, setCommands] = useState<DiscordCommand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/commands')
      .then(res => res.json())
      .then((data: DiscordCommand[]) => {
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
        <BotHeader titleSuffix='コマンド一覧' />
        {loading ? <p>Loading commands...</p> : <CommandsPage commands={commands} />}
      </main>
      <Footer />
    </>
  );
}
