interface Props {
  className?: string;
}

const TrainingIcon = ({ className }: Props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_396_114)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 20C24 23.866 20.866 27 17 27C13.134 27 10 23.866 10 20C10 16.134 13.134 13 17 13C20.866 13 24 16.134 24 20ZM22 20C22 22.7614 19.7614 25 17 25C14.2386 25 12 22.7614 12 20C12 17.2386 14.2386 15 17 15C19.7614 15 22 17.2386 22 20Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 39H4C1.79086 39 0 37.2091 0 35V4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V35C50 37.2091 48.2091 39 46 39H28V46C28 48.2091 26.2091 50 24 50H10C7.79086 50 6 48.2091 6 46V39ZM4 2H46C47.1046 2 48 2.89543 48 4V35C48 36.1046 47.1046 37 46 37H44V34C44 33.4477 43.5523 33 43 33H35C34.4477 33 34 33.4477 34 34V37H28V34C28 31.7909 26.2091 30 24 30H10C7.79086 30 6 31.7909 6 34V37H4C2.89543 37 2 36.1046 2 35V4C2 2.89543 2.89543 2 4 2ZM36 37H42V35H36V37ZM8 34C8 32.8954 8.89543 32 10 32H24C25.1046 32 26 32.8954 26 34V46C26 47.1046 25.1046 48 24 48H10C8.89543 48 8 47.1046 8 46V34Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_396_114">
          <rect width="50" height="50" fill="transparent" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TrainingIcon;
