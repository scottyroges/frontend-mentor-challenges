import clsx from "clsx";
import style from "./Link.module.css";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a className={clsx(style.wrapper)} href={href}>
      <div className={clsx(style.link)}>{children}</div>
    </a>
  );
};

export default Link;
