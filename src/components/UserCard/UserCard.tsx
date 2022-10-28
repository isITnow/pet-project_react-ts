import { UserStats } from 'components/UserStats';
import { UserTitle } from 'components/UserTitle';
import { LocalGithubUser } from 'types';
import s from './UserCard.module.scss';

interface IUserCardProps extends LocalGithubUser { }

export const UserCard = (props: IUserCardProps) => (
  <div className={s.userCard}>
    <img src={props.avatar} alt={props.name} className={ s.avatar } />
    <UserTitle
      created={props.created}
      login={props.login}
      name={props.name}
    />
    <p className={`${s.bio}${props.bio ? '' : `${s.empty}`}`}>
      {props.bio || 'This profile has no bio' }
    </p>
    <UserStats repos={props.repos} followers={props.followers} following={props.following} />
  </div>
);
