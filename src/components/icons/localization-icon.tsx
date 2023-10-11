interface Props {
  className?: string;
}

const LocalizationIcon = ({ className }: Props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M41.6667 20.8333C41.6667 33.3333 25 45.8333 25 45.8333C25 45.8333 8.33333 33.3333 8.33333 20.8333C8.33333 16.4131 10.0893 12.1738 13.2149 9.04823C16.3405 5.92262 20.5797 4.16667 25 4.16667C29.4203 4.16667 33.6595 5.92262 36.7851 9.04823C39.9107 12.1738 41.6667 16.4131 41.6667 20.8333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 27.0833C28.4518 27.0833 31.25 24.2851 31.25 20.8333C31.25 17.3815 28.4518 14.5833 25 14.5833C21.5482 14.5833 18.75 17.3815 18.75 20.8333C18.75 24.2851 21.5482 27.0833 25 27.0833Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocalizationIcon;
