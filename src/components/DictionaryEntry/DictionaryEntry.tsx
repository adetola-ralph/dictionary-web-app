import { ExternalLinkIcon } from "../../icons";
import { DictionarEntry } from "../../types";
import { AudioPlayer } from "../AudioPlayer";

interface DictionaryEntryProps {
  entry: DictionarEntry;
}

export const DictionaryEntry = ({ entry }: DictionaryEntryProps) => {
  const onSynonymWordClick = (word: string) => {};

  const phonetics = !!entry.phonetics.length ? entry.phonetics[0] : {};

  return (
    <>
      <div className="flex justify-between items-center pt-11">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-dgray-500 dark:text-white">
            {entry.word}
          </h2>
          {phonetics.text && (
            <p className="md:text-xl text-veronica">{phonetics.text}</p>
          )}
        </div>
        {phonetics.audio && (
          <AudioPlayer audio={phonetics.audio} className="shrink" />
        )}
      </div>
      {entry.meanings.map(
        ({ partOfSpeech, definitions, synonyms }, meaningIndex) => (
          <div
            className="pt-8 md:pt-10 flex flex-col space-y-8 md:space-y-10"
            key={meaningIndex}
          >
            <div className="flex items-center space-x-5">
              <p className="text-lg italic font-bold shrink">{partOfSpeech}</p>
              <div className="flex-1 h-[0.0625rem] bg-dgray-200 dark:bg-dgray-400 w-full" />
            </div>
            <div>
              <p className="text-dgray-300 text-lg">Meaning</p>
              <ul className="pt-4 md:pt-6 list-disc space-y-3 list-inside pl-6 marker:text-veronica">
                {definitions.map(({ definition }, definitionIndex) => (
                  <li key={definitionIndex}>{definition}</li>
                ))}
              </ul>
            </div>
            {!!synonyms.length && (
              <div className="flex flex-row space-x-6">
                <span className="text-dgray-300 text-lg">Synonyms</span>
                <div className="gap-x-2 flex flex-wrap">
                  {synonyms.map((word, synonymIndex) => (
                    <span
                      onClick={() => onSynonymWordClick(word)}
                      key={synonymIndex}
                      className="text-veronica text-lg font-bold hover:underline hover:cursor-pointer"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      )}
      <div className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 border-t border-dgray-200 dark:border-dgray-400 mt-8 md:mt-10 pt-6 md:pt-5">
        <span className="text-dgray-300 text-sm underline">Sources</span>
        {entry.sourceUrls.map((url, urlIndex) => (
          <a
            href={url}
            key={urlIndex}
            className="text-sm underline flex items-center"
            target="_blank"
          >
            {url}
            <ExternalLinkIcon className="text-dgray-300 h-3 w-3 ml-2" />
          </a>
        ))}
      </div>
    </>
  );
};
