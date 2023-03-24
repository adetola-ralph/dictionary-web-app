import { DictionarEntry } from "../../types";

interface DictionaryEntryProps {
  entry: DictionarEntry;
}

export const DictionaryEntry = ({ entry }: DictionaryEntryProps) => {
  const onSynonymWordClick = (word: string) => {};

  return (
    <>
      <div className="flex justify-between items-center pt-11">
        <div>
          <h2 className="text-2xl font-bold text-dgray-500 dark:text-white">
            {entry.word}
          </h2>
          {entry.phonetic && (
            <p className="text-xl text-veronica">{entry.phonetic}</p>
          )}
        </div>
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
                <div className="space-x-2">
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
        <span className="text-dgray-300 text-sm underline">source</span>
        {
          entry.sourceUrls.map((url, urlIndex) => (
            <a href={url} key={urlIndex} className="text-sm underline">{url}</a>
          ))
        }
      </div>
    </>
  );
};
