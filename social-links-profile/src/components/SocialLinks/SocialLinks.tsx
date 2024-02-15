import clsx from "clsx";
import style from "./SocialLinks.module.css";
import Link from "../Link/Link";

const SocialLinks = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <Link href="/">Github</Link>
      <Link href="/">Frontend Mentor</Link>
      <Link href="/">LinkedIn</Link>
      <Link href="/">Twitter</Link>
      <Link href="/">Instagram</Link>
    </div>
  );
};

export default SocialLinks;
