import cx from "classnames";

import { Toggle } from "../Toggle";
import { MoonIcon } from "../../icons";
import { useSetDarkMode } from "../../hooks";

export const DarkModeToggle = () => {
  const { setDarkMode, darkMode } = useSetDarkMode();
  
  return (
    <div className="flex space-x-5">
      <Toggle checked={darkMode} onChange={setDarkMode} />
      <MoonIcon className={cx(darkMode ? 'text-veronica' : 'text-dgray-300', 'h-5 w-4')}/>
    </div>
  )
}