import s from './InfoItem.module.scss';

export interface IInfoItemProps {
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,
}

export const InfoItem = ({ icon, text, isLink }: IInfoItemProps) => { 
  const currentText = text || 'Not available';
  let currentHref = '';
  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `http://${text}`;
  }

  return (
    <div className={`${s.infoItem}${text ? '' : ` ${s.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (<a
          href={currentHref}
          target="_blank"
          rel='noreferrer'
          className={s.link}
        >
          currentText
        </a>) : currentText}
      </div>
  </div>
);
}
