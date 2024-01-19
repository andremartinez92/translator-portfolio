interface Props {
  className?: string;
}

const EnFlagIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-en"
      viewBox="0 0 640 480"
      className={className}
    >
      <clipPath id="gb-clip">
        <path d="M640 0 L640 480 L0 480 Z" />
      </clipPath>

      <clipPath id="us-clip">
        <path d="M0 0 L640 0 L0 480 Z" />
      </clipPath>

      <g clipPath="url(#us-clip)">
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path
          stroke="#fff"
          strokeWidth="37"
          d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
        />
        <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
        <marker id="us-a" markerHeight="30" markerWidth="30">
          <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
        </marker>
        <path
          fill="none"
          markerMid="url(#us-a)"
          d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
        />
      </g>

      <g clipPath="url(#gb-clip)">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
        />
        <path
          fill="#C8102E"
          d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
        />
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
      </g>
    </svg>
  );
};

export default EnFlagIcon;
