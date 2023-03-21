interface ChevronIconProps {
  className?: string;
}

export const ChevronIcon = ({ className }: ChevronIconProps) => {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      className={className}
    >
      <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="1.5" />
    </svg>
  );
};
