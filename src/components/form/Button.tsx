interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    id: string
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export function Button({ id, className, disabled, children, ...props }: ButtonProps) {
    return (
        <button id={id} className={`${className}`} disabled={disabled} {...props}>
            {children}
        </button>
    );
}
