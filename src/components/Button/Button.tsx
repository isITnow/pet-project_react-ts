import s from './Button.module.scss';

interface ButtonProps {
  children: string,
}

export const Button = ({ children }: ButtonProps) => (
    <button className={s.button} type='button'>
      {children}
    </button>
);
