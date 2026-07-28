function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-full border border-[#1F1F1F] px-6 py-3 transition hover:bg-[#1F1F1F] hover:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;