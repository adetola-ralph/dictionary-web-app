import cx from 'classnames';
import { ChangeEvent, FormEvent, useState } from "react";

import { SearchIcon } from "../../icons";

interface SearchInputProps {
  onSearchEnter: (value: string) => void;
}

export const SearchInput = ({ onSearchEnter }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSearchValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setHasError(false);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!searchValue) {
      setHasError(true);
      return;
    }

    onSearchEnter(searchValue);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={cx(
        "relative rounded-2xl bg-dgray-100 dark:bg-dgray-600 flex items-center border border-transparent transition-colors duration-200 ease-in-out",
        hasError && 'border-coral-red'
      )}>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="py-[0.875rem] md:py-5 pl-6 pr-16 bg-transparent w-full outline-none text-[1rem] leading-5 md:text-lg font-bold"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        <div className="absolute right-6">
          <SearchIcon className="w-4 text-veronica" />
        </div>
      </div>
      {hasError && (<p className="text-coral-red text-lg">Whoops, can’t be empty…</p>)}
    </form>
  );
};
