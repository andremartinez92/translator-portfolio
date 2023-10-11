interface Props {
  className?: string;
}

const EmailIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      fill="none"
    >
      <path
        d="M40 8H8C5.79086 8 4 9.79086 4 12V36C4 38.2091 5.79086 40 8 40H40C42.2091 40 44 38.2091 44 36V12C44 9.79086 42.2091 8 40 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 14L26.06 25.4C25.4425 25.7869 24.7286 25.992 24 25.992C23.2714 25.992 22.5575 25.7869 21.94 25.4L4 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailIcon;
