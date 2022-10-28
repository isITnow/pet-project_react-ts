import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as CompanyIcon} from 'assets/icon-company.svg';
import { ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon} from 'assets/icon-website.svg';
import { IInfoItemProps, InfoItem } from 'components/InfoItem';
import { LocalGithubUser } from 'types';

import s from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalGithubUser, 'location' | 'company' | 'twitter' | 'blog'> { }

export const UserInfo = ({ location, company, twitter, blog }: UserInfoProps) => { 
  const items: IInfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    }
  ]
  return (
    <div className={s.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
    ))}
  </div>
);
} 
