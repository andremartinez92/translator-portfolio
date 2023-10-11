interface Props {
  className?: string;
}

const TranslationIcon = ({ className }: Props) => {
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
        d="M30.2083 4.16667H12.5C11.3949 4.16667 10.3351 4.60566 9.55372 5.38706C8.77232 6.16846 8.33333 7.22827 8.33333 8.33334V41.6667C8.33333 42.7717 8.77232 43.8315 9.55372 44.6129C10.3351 45.3943 11.3949 45.8333 12.5 45.8333H37.5C38.6051 45.8333 39.6649 45.3943 40.4463 44.6129C41.2277 43.8315 41.6667 42.7717 41.6667 41.6667V15.625L30.2083 4.16667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.1667 4.16667V16.6667H41.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3333 27.0833H16.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3333 35.4167H16.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8333 18.75H16.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TranslationIcon;
