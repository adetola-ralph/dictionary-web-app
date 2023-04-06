import cx from 'classnames';

import { BookIcon } from "../../icons";
import { DarkModeToggle } from '../DarkModeToggle';
import { Fontselector } from '../Fontselector';

interface AppHeaderProps {
  onFontChange?: (value: string) => void;
}

export const AppHeader = ({ onFontChange }: AppHeaderProps) => {
  return (
    <header className="flex justify-between">
      <BookIcon className="text-dgray-300 w-8" />
      <div className="flex items-center">
        <Fontselector onChange={onFontChange} />
        <span className="h-full w-[0.0625rem] bg-dgray-200 mx-6" />
        <DarkModeToggle />
      </div>
    </header>
  )
};
