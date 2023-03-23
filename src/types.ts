export interface DictionarEntry {
  word: string;
  phonetic?: string;
  phonetics: phoneticsEntryType[];
  license: licenseType;
  sourceUrls: string[];
  meanings: meaningEntryType[];
}

interface phoneticsEntryType {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: licenseType;
}

interface licenseType {
  name: string;
  url: string;
}

interface meaningEntryType {
  partOfSpeech: speechPartEnum;
  synonyms: string[];
  antonyms: string[];
  definitions: definitionType[];
}

interface definitionType {
  synonyms: string[];
  antonyms: string[];
  definition: string;
  example?: string;
}

enum speechPartEnum {
  NOUN = 'noun',
  PRONOUN = 'pronoun',
  VERB = 'verb',
  ADJECTIVE = 'adjective',
  ADVERB = 'adverb',
  PREPOSITION = 'preposition',
  CONJUNCTION = 'conjunction',
  INTERJECTION = 'interjection',
}

export interface ErrorEntry {
  title: string;
  message: string;
  resolution: string;
}