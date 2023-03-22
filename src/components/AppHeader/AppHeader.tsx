import cx from 'classnames';

import { useSetDarkMode } from "../../hooks";
import { BookIcon } from "../../icons";
import { DarkModeToggle } from '../DarkModeToggle';

export const AppHeader = () => {
  const { darkMode } = useSetDarkMode();

  return (
    <header className="flex justify-between">
      <BookIcon className="text-dgray-300 w-8" />
      <div className="flex items-center">
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
};
