import {ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import { Button } from 'components/Button';

import s from './Search.module.scss';

interface ISearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormField = {
  user: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: ISearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormField>) => {
    event.preventDefault()
    const text = event.currentTarget.user.value.trim();
    if (text) {
      onSubmit(text);
      event.currentTarget.reset()
    }
  }
return  (
  <form onSubmit={handleSubmit} autoComplete='off'>
    <div className={s.search}>

      <label className={s.label} htmlFor="search">
        <SearchIcon />
      </label>
      <input
        id='search'
        type="text"
        className={s.textField}
        name="user"
        placeholder='Search GitHub username...'
        />
      {hasError && (
        <div className={s.error}>
          No result
        </div>
      )}
      <Button>Search</Button>
    </div>
  </form>
);
}
