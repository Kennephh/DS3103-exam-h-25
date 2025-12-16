import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "danger" | "success";
}

const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {

    const baseStyles = `
        px-3
        py-1
        rounded
        text-white
        transition-all
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
    `;

    const variants = {
        primary: "bg-sky-700 hover:bg-sky-800",
        secondary: "bg-gray-500 hover:bg-gray-600",
        danger: "bg-red-700 hover:bg-red-800",
        success: "bg-green-800 hover:bg-green-900"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className || ""}`} {...props}>
            {children}
        </button>
    );

}

export default Button;