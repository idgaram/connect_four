// import "./styles/Button.css";

export default function Button({
  children,
  onClick,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <button type="button" onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
}
