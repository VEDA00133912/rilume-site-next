'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import styles from '../styles/Commands.module.css';

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

type Props = {
  commands: DiscordCommand[];
};

const CommandsPage: React.FC<Props> = ({ commands }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<DiscordCommand | null>(null);
  const [imageExists, setImageExists] = useState(false);

  const openModal = (cmd: DiscordCommand) => {
    setModalData(cmd);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
    setImageExists(false);
  };

  useEffect(() => {
    if (!modalData) return;

    const img = new window.Image();
    img.src = `/images/commands/${modalData.name}.png`;
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
  }, [modalData]);

  const slashCommands = commands.filter(c => c.description);
  const contextCommands = commands.filter(c => !c.description);
  const userCommands = contextCommands.filter(c => c.type === 2);
  const messageCommands = contextCommands.filter(c => c.type === 3);

  const renderCommandCard = (cmd: DiscordCommand, isContext = false) => (
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
        <p>{modalData.description || 'このコマンドはコンテキストメニューです'}</p>

        {imageExists && (
          <div className={styles.commandImgWrapper}>
            <Image
              src={`/images/commands/${modalData.name}.png`}
              alt={modalData.name}
              width={400}
              height={400}
            />
          </div>
        )}

        {modalData.options && modalData.options.length > 0 && (
          <div className={styles.optionsContainer}>
            <div className={styles.optionsTitle}>オプション</div>
            <ul id='modal-options'>
              {modalData.options.map((opt, i) => (
                <li key={i}>
                  <div>
                    <span className={styles.optionName}>{opt.name}</span>
                    {opt.description && (
                      <p className={styles.optionDesc}>{opt.description}</p>
                    )}
                  </div>
                </li>
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
