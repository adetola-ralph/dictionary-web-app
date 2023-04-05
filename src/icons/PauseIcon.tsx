interface PauseIconProps {
  className?: string;
}

export const PauseIcon = ({ className }: PauseIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 75 75"
      fill="none"
    >
      <circle opacity="0.25" cx="38" cy="37.5" r="37.5" fill="#A445ED" />
      <rect
        x="24.9959"
        y="25.0024"
        width="8.00458"
        height="24.9988"
        fill="#A445ED"
      />
      <rect
        x="41.9987"
        y="25.0024"
        width="8.00458"
        height="24.9988"
        fill="#A445ED"
      />
    </svg>
  );
};
