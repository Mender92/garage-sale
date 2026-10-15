import { Link } from "react-router-dom";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F1F1F]";

const variants = {
  primary:
    "bg-[#1F1F1F] text-white hover:bg-black",
  secondary:
    "border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white",
};

function Button({
  children,
  className = "",
  variant = "secondary",
  to,
  href,
  type = "button",
  ...props
}) {
  const styles = `${baseStyles} ${variants[variant] ?? variants.secondary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles} {...props}>
      {children}
    </button>
  );
}

export default Button;