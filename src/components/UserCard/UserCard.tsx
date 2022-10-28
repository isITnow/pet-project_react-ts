import s from './UserCard.module.scss';

interface UserCardProps { }

export const UserCard = ({ }: UserCardProps) => (
  <div className={s.userCard}>
    UserCard Component
  </div>
);
