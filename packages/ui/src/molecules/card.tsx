import { Link } from "..";

export type CardProps = HTMLLinkElement & {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
};
const Card = ({ className, title, children, href }: CardProps): JSX.Element => (
  <Link
    className={className}
    href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
  >
    <h2>
      {title} <span>-&gt;</span>
    </h2>
    <p>{children}</p>
  </Link>
);

export default Card;
