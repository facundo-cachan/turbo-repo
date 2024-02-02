export type LinkProps = {
  className?: string;
  target?: HTMLLinkElement["target"];
  children: React.ReactNode;
  href: string;
};
const Link = ({
  className,
  target,
  children,
  href,
}: LinkProps): JSX.Element => (
  <a
    href={href}
    className={className}
    rel={target ?? "noopener noreferrer"}
    target={target || "_blank"}
  >
    {children}
  </a>
);

export default Link;
