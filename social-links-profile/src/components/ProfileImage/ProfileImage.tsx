import clsx from "clsx";
import style from "./ProfileImage.module.css";

const ProfileImage = ({
  altText = "profile image",
  src,
}: {
  altText?: string;
  src: string;
}) => {
  return (
    <div className={clsx(style.wrapper)}>
      <img className={clsx(style.img)} alt={altText} src={src} />
    </div>
  );
};

export default ProfileImage;
