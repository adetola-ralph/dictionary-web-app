import cx from 'classnames';
import { Switch } from "@headlessui/react";

interface ToggleProps {
  onChange?: (checked: boolean) => void
  checked?: boolean;
}

export const Toggle = ({ onChange, checked = false }: ToggleProps) => {
  const switchClass= 'relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 p-[0.1875rem]';
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={cx({
        'bg-veronica': checked,
        'bg-dgray-300': !checked,
      }, switchClass)}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${checked ? "translate-x-5" : "translate-x-0"}
          pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white transition duration-200 ease-in-out`}
      />
    </Switch>
  );
};
