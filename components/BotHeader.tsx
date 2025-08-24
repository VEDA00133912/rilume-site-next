// components/BotHeader.tsx
import Image from "next/image";
import styles from "./BotHeader.module.css";

interface BotHeaderProps {
  botName: string;
  botIcon: string;
  titleSuffix?: string;
  breakLine?: boolean;
}

export default function BotHeader({ botName, botIcon, titleSuffix, breakLine = false }: BotHeaderProps) {
  return (
    <header className={styles.header}>
      <Image
        src={botIcon}
        alt={`${botName} アイコン`}
        width={100}
        height={100}
        className={styles.botIcon}
      />
      <h1 className={styles.title}>
        {botName} {titleSuffix && (breakLine ? <><br />{titleSuffix}</> : ` ${titleSuffix}`)}
      </h1>
    </header>
  );
}
