import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { AppHeader } from "../AppHeader";
import { SearchInput } from "../SearchInput";
import { DictionarEntry, ErrorEntry } from "../../types";
import { DictionaryEntry } from "../DictionaryEntry";

export const AppContainer = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const { error, data = [], isLoading } = useQuery({
    queryKey: ["search-dictionary", searchValue],
    queryFn: async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
      );

      const data: Array<DictionarEntry> | ErrorEntry = await response.json();

      if (!response.ok) {
        throw new Error((data as ErrorEntry).message);
      }

      return data;
    },
    enabled: isEnabled,
    onSettled: () => {
      setIsEnabled(false);
    },
    retry: false,
  });

  const handleSearchEnter = (value: string) => {
    setSearchValue(value);
    setIsEnabled(true);
  }

  const dictEntry = data as Array<DictionarEntry>;

  return (
    <div className="container-md max-w-screen-md mx-auto p-6 md:p-0 md:pt-14 lg:pb-32 md:pb-28 pb-20">
      <AppHeader />
      <div className="pt-6 md:pt-[3.25rem]">
        <SearchInput onSearchEnter={handleSearchEnter} />
      </div>

      <>{!!error && <div>there is an error</div>}</>

      {
        !!dictEntry.length && dictEntry.map((entry, index) => (
          <DictionaryEntry entry={entry} key={index} />
        ))
      }
    </div>
  );
};
