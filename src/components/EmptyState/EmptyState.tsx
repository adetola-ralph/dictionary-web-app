export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center pt-32">
      <p className="text-3xl">😕</p>
      <p className="font-bold text-lg pt-11 dark:text-white text-center">
        No Definitions Found
      </p>
      <p className="pt-6 text-base text-dgray-300 text-center">
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.
      </p>
    </div>
  )
};