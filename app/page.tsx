import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import BotHeader from "../components/BotHeader";
import Footer from "../components/Footer";

export default function HomePage() {
  const botName = "{ Rilume }";
  const botIcon = "/images/meta/bot-icon.png";
  const botInvite = "https://discord.com/oauth2/authorize?client_id=1408702490211258471"; 
  const supportServer = "https://discord.gg/ESRGwGQhxc";

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <BotHeader botName={botName} botIcon={botIcon} />
        <p className={styles.description}>
          多機能DiscordBOTの {botName} です！
        </p>
        <div className={styles.buttonContainer}>
          <a href={botInvite} className={styles.btn} target="_blank" rel="noopener noreferrer">
            BOTを招待する
          </a>
          <a href={supportServer} className={styles.btn} target="_blank" rel="noopener noreferrer">
            サポートサーバー
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
