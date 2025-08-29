import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();
  const botName = '{ Rilume }';

  const socialIcons = [
    { href: 'https://x.com/ryo_001339', alt: 'Twitter', src: '/images/contact/twitter.png' },
    { href: 'https://github.com/VEDA00133912', alt: 'GitHub', src: '/images/contact/github.png' },
    { href: 'https://youtube.com/@00139-ryo', alt: 'YouTube', src: '/images/contact/youtube.png' },
    { href: 'https://discord.gg/ESRGwGQhxc', alt: 'Discord', src: '/images/contact/discord.png' },
    { href: 'https://instagram.com/ryo.namba_ma13/', alt: 'Instagram', src: '/images/contact/instagram.png' },
    { href: 'https://tiktok.com/@ryo_001339', alt: 'TikTok', src: '/images/contact/tiktok.png' },
  ];

  return (
    <footer className='footer'>
      <div className='social-links'>
        {socialIcons.map((icon) => (
          <a key={icon.alt} href={icon.href} target='_blank' rel='noopener noreferrer'>
            <div className='icon-wrapper'>
              <Image src={icon.src} alt={icon.alt} width={30} height={30} />
            </div>
          </a>
        ))}
      </div>
      <p className='copy'>
        © {year} {botName} All rights reserved.
      </p>
    </footer>
  );
}
