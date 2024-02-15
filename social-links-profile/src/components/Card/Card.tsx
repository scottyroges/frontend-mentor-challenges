import clsx from "clsx";
import styles from "./Card.module.css";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <article className={clsx(styles.card, className)}>{children}</article>;
};

export default Card;
