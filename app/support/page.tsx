import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import BotHeader from '../../components/BotHeader';
import styles from '../../styles/Support.module.css';

export default function SupportPage() {
  const supportServer = 'https://discord.gg/CytkCY2zpf';
  const twitter = 'https://x.com/ryo_001339';

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <BotHeader titleSuffix='サポート' />

        <section className={styles.supportSection}>
          <h2>サポートDiscordサーバー</h2>
          <p>BOTの不具合報告や質問は、下記のサーバーから受け付けています。</p>
          <a
            href={supportServer}
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            サポートサーバーに参加
          </a>
        </section>

        <section className={styles.supportSection}>
          <h2>Twitterで不具合を報告</h2>
          <p>こちらのアカウントのDMでも不具合報告や質問を受け付けています。</p>
          <a
            href={twitter}
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            アカウントへ移動
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
