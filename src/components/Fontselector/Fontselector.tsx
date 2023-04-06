import cx from "classnames";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { ChevronIcon } from "../../icons";

const fontOptions = [
  {
    label: "Sans Serif",
    value: "font-sans",
  },
  {
    label: "Serif",
    value: "font-serif",
  },
  {
    label: "Mono",
    value: "font-mono",
  },
];

interface FontselectorProps {
  onChange?: (value: string) => void;
}

export const Fontselector = ({ onChange }: FontselectorProps) => {
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);

  const onFontChange = (font: { label: string, value: string }) => {
    setSelectedFont(font);
    onChange?.(font.value);
  }

  return (
    <div className="relative">
      <Listbox value={selectedFont} onChange={onFontChange}>
        <Listbox.Button className="flex w-full flex-row items-center overflow-hidden whitespace-nowrap space-x-4">
          <span className={cx("dark:text-white", selectedFont.value)}>
            {selectedFont.label}
          </span>
          <span>
            <ChevronIcon className="w-3 text-veronica" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 z-50 shadow-dshadow dark:shadow-dshadow-dark w-48 p-6 bg-white dark:bg-dgray-600 rounded-2xl">
            {fontOptions.map((font, fontIndex) => (
              <Listbox.Option
                value={font}
                key={fontIndex}
                className={cx(
                  "dark:text-white hover:text-veronica dark:hover:text-veronica cursor-pointer pb-4 last:pb-0",
                  font.value
                )}
              >
                {font.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
