import Image from 'next/image';

interface BotHeaderProps {
  titleSuffix?: string;
  breakLine?: boolean;
}

export default function BotHeader({ titleSuffix, breakLine = false }: BotHeaderProps) {
  const botName = '{ Rilume }';
  const botIcon = '/images/meta/bot-icon.png';

  return (
    <header className='bot-header'>
      <Image
        src={botIcon}
        alt={`${botName}-icon`}
        width={100}
        height={100}
        className='bot-icon'
      />
      <h1 className='bot-title'>
        {botName} {titleSuffix && (breakLine ? <><br />{titleSuffix}</> : ` ${titleSuffix}`)}
      </h1>
    </header>
  );
}
