import cx from "classnames";
import debounce from "lodash/debounce";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { SearchIcon } from "../../icons";

interface SearchInputProps {
  onSearch: (value: string) => void;
  className?: string;
}

export const SearchInput = ({ className, onSearch }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  // TODO: should this be done with debounce or with the enter key
  const search = useCallback(
    debounce((value: string) => {
      if (value) {
        onSearch(value)
      }
    }, 500),
    [onSearch]
  );

  useEffect(() => {
    search(searchValue);
  }, [searchValue])

  return (
    <div
      className={cx(
        "relative rounded-2xl bg-dgray-100 dark:bg-dgray-600 flex items-center",
        className
      )}
    >
      <input
        type="text"
        name="search-input"
        id="search-input"
        className="py-[0.875rem] md:py-5 pl-6 pr-16 bg-transparent w-full outline-none text-[1rem] leading-5 md:text-lg font-bold"
        value={searchValue}
        onChange={handleChange}
      />
      <div className="absolute right-6">
        <SearchIcon className="w-4 text-veronica" />
      </div>
    </div>
  );
};
