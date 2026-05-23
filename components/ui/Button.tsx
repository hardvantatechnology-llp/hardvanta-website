import Link from "next/link";

type ButtonProps = {
  text: string;

  href?: string;

  variant?: "primary" | "secondary";

  fullWidth?: boolean;
};

export default function Button({
  text,
  href = "/contact",
  variant = "primary",
  fullWidth = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        primary-btn
        ${variant}
        ${fullWidth ? "full-width" : ""}
      `}
    >
      <span>{text}</span>
    </Link>
  );
}
