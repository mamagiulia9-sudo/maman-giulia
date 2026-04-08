export function MamaGiuliaLogo({ size = 240, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="120" cy="120" r="120" fill="#EDE5C0" />
      <text
        x="120" y="108"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="34" fontWeight="300" fontStyle="italic"
        fill="#5A9E9B"
      >
        Mama
      </text>
      <text
        x="120" y="148"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="40" fontWeight="700"
        fill="#5A9E9B"
      >
        Giulia
      </text>
    </svg>
  );
}
