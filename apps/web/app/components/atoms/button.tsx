
export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    children: any;
    class?: string;
    type?: 'submit' | 'reset';
    title: string;
    className?: string;
}

const Button = ({ children, type, ...props }: ButtonProps) => (<button
    {...props}
    type={type ?? "button"}
    aria-label={props.title}
    aria-labelledby={props.title}
>{children}</button>)

export default Button