import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const botName = "{ Rilume }";

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://x.com/ryo_001339" target="_blank" rel="noopener noreferrer">
          <img src="/images/contact/twitter.png" alt="Twitter" />
        </a>
        <a href="https://github.com/VEDA00133912" target="_blank" rel="noopener noreferrer">
          <img src="/images/contact/github.png" alt="GitHub" />
        </a>
        <a href="https://youtube.com/@00139-ryo" target="_blank" rel="noopener noreferrer">
          <img src="/images/contact/youtube.png" alt="YouTube" />
        </a>
        <a href="https://discord.gg/ESRGwGQhxc" target="_blank" rel="noopener noreferrer">
          <img src="/images/contact/discord.png" alt="Discord" />
        </a>
        <a href="https://instagram.com/ryo.namba_ma13/" target="_blank" rel="noopener noreferrer">
          <img src="/images/contact/instagram.png" alt="Instagram" />
        </a>
        <a href="https://tiktok.com/@ryo_001339" target="_blank" rel="noopener noreferrer">
          <img src="/images/contact/tiktok.png" alt="TikTok" />
        </a>
      </div>
      <p className={styles.copy}>
        © {year} {botName} All rights reserved.
      </p>
      {/* BOT-ICON: https://x.com/shouu_kyun/status/1454722759154487296 */}
    </footer>
  );
}
