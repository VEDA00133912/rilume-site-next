'use client';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Commands.module.css';

type Command = {
  name: string;
  description?: string;
  type?: number;
  options?: any[];
};

type Props = {
  commands: Command[];
};

const CommandsPage: React.FC<Props> = ({ commands }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Command | null>(null);

  const openModal = (cmd: Command) => {
    setModalData(cmd);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  const slashCommands = commands.filter(c => c.description);
  const contextCommands = commands.filter(c => !c.description);
  const userCommands = contextCommands.filter(c => c.type === 2);
  const messageCommands = contextCommands.filter(c => c.type === 3);

  const renderCommandCard = (cmd: Command, isContext = false) => (
    <div
      key={cmd.name}
      className={`${styles.commandCard} ${isContext ? styles.context : ''}`}
    >
      <h3 className={styles.commandName}>
        {isContext ? cmd.name : `/${cmd.name}`}
      </h3>
      {cmd.description && <p className={styles.commandDesc}>{cmd.description}</p>}
      <button
        className={`${styles.btn} ${styles.detailBtn}`}
        onClick={() => openModal(cmd)}
      >
        詳細を見る
      </button>
    </div>
  );

  const modal = modalOpen && modalData && (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <span className={styles.modalClose} onClick={closeModal}>&times;</span>
        <h3>{modalData.name}</h3>
        {modalData.description && <p>{modalData.description}</p>}

        <img
          className={styles.commandImg}
          src={`/images/commands/${modalData.name}.png`}
          alt={modalData.name}
          onError={e => {
            console.log("画像が見つかりません:", e.currentTarget.src);
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />

        {modalData.options && modalData.options.length > 0 && (
          <div className={styles.optionsContainer}>
            <div className={styles.optionsTitle}>オプション:</div>
            <ul id="modal-options">
              {modalData.options.map((opt, i) => (
                <li key={i}>{opt.name} ({opt.type})</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        {slashCommands.length > 0 && (
          <>
            <h2>スラッシュコマンド</h2>
            <div className={styles.commandsContainer}>
              {slashCommands.map(cmd => renderCommandCard(cmd))}
            </div>
          </>
        )}

        {userCommands.length > 0 && (
          <>
            <h2>ユーザーコンテキストメニュー</h2>
            <div className={styles.commandsContainer}>
              {userCommands.map(cmd => renderCommandCard(cmd, true))}
            </div>
          </>
        )}

        {messageCommands.length > 0 && (
          <>
            <h2>メッセージコンテキストメニュー</h2>
            <div className={styles.commandsContainer}>
              {messageCommands.map(cmd => renderCommandCard(cmd, true))}
            </div>
          </>
        )}
      </div>

      {modal && typeof window !== 'undefined' &&
        ReactDOM.createPortal(modal, document.body)}
    </>
  );
};

export default CommandsPage;
