export function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
