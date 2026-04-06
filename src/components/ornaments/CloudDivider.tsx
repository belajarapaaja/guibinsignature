const CloudDivider = () => {
  return (
    <div className="relative w-full h-12 overflow-hidden opacity-30">
      <div className="absolute whitespace-nowrap animate-cloud-scroll">
        {Array.from({ length: 6 }).map((_, i) => (
          <svg key={i} className="inline-block mx-4" width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path
              d="M10 30 Q20 10 35 20 Q45 5 60 15 Q70 0 85 15 Q100 5 110 20 Q115 30 110 30 Z"
              fill="none"
              stroke="hsl(43,52%,54%)"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M15 32 Q30 18 45 25 Q55 12 65 22 Q80 10 95 22 Q105 28 100 32 Z"
              fill="hsl(43,52%,54%)"
              opacity="0.08"
            />
          </svg>
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <svg key={`d-${i}`} className="inline-block mx-4" width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path
              d="M10 30 Q20 10 35 20 Q45 5 60 15 Q70 0 85 15 Q100 5 110 20 Q115 30 110 30 Z"
              fill="none"
              stroke="hsl(43,52%,54%)"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default CloudDivider;
