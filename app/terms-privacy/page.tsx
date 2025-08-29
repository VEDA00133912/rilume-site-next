import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import BotHeader from '../../components/BotHeader';
import TermsContent from '../../components/TermsContent';
import PrivacyContent from '../../components/PrivacyContent';
import styles from '../../styles/Terms.module.css';

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <BotHeader titleSuffix='利用規約・プライバシーポリシー' breakLine={true} />

        <section className={styles.termsSection}>
          <TermsContent />
        </section>

        <section className={styles.privacySection}>
          <PrivacyContent />
        </section>
      </main>
      <Footer />
    </>
  );
}
