import clsx from "clsx";
import styles from "./Slogan.module.css";

const Slogan = ({ children }: { children: string }) => {
  return <p className={clsx(styles.slogan)}>"{children}"</p>;
};

export default Slogan;
