import clsx from "clsx";
import style from "./Header.module.css";

const Header = ({ name, location }: { name: string; location: string }) => {
  return (
    <div className={clsx(style.wrapper)}>
      <h1 className={clsx(style.name)}>{name}</h1>
      <h2 className={clsx(style.location)}>{location}</h2>
    </div>
  );
};

export default Header;
