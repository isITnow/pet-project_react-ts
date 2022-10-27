
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import s from './TheHeader.module.scss';

export const TheHeader = () => (
  <div className={s.header}>
    <span className={s.logo}>
      gevfinder
    </span>
    <ThemeSwitcher />
  </div>
);
