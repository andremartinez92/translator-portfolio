interface Props {
  className?: string;
}

const ChevronIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 96 960 960"
      width="48"
    >
      <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"></path>
    </svg>
  );
};

export default ChevronIcon;
