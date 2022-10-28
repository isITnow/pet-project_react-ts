import { LocalGithubUser } from 'types';
import s from './UserStats.module.scss';

interface IUserStatsProps extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> {}

export const UserStats = ({ repos, followers, following }: IUserStatsProps) => (
  <div className={s.userStats}>
    <div className={s.info}>
      <span className={s.infoTitle}>Repos</span>
      <span className={s.infoNumber}>{ repos }</span>
    </div>
    <div className={s.info}>
      <span className={s.infoTitle}>Following</span>
      <span className={s.infoNumber}>{ following }</span>
    </div>
    <div className={s.info}>
      <span className={s.infoTitle}>Followers</span>
      <span className={s.infoNumber}>{ followers }</span>
    </div>
  </div>
);
