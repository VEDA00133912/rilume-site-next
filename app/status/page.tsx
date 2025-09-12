'use client';
import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import BotHeader from '../../components/BotHeader';
import styles from '../../styles/Status.module.css';

type BotStatus = {
  online: boolean;
  guildCount: number;
  guildMember: number;
  lastUpdate: string;
};

export default function StatusPage() {
  const [status, setStatus] = useState<BotStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        setStatus(data);
      } catch (err) {
        console.error(err);
        setError('ステータスの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, []);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <BotHeader titleSuffix='ステータス' />
        {loading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}

        {status && (
          <>
            <div className={styles.statusCard}>
              <p>
                <strong>ステータス:</strong>{' '}
                <span className={status.online ? styles.online : styles.offline}>
                  {status.online ? 'Online' : 'Offline'}
                </span>
              </p>
              <p>
                <strong>参加サーバー数:</strong> {status.guildCount}
              </p>
              <p>
                <strong>総メンバー数:</strong> {status.guildMember}
              </p>
              <p>
                <strong>最終確認時刻:</strong>{' '}
                {new Date(status.lastUpdate).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
              </p>
            </div>
            <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '1.1em' }}>
              現在BOTは{status.online ? '正常に動作しています' : '停止しています'}
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
