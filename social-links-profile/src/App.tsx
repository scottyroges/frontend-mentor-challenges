import style from "./App.module.css";
import Card from "@components/Card/Card";
import ProfileImage from "@components/ProfileImage/ProfileImage";
import image from "@assets/images/avatar-jessica.jpeg";
import Header from "@components/Header/Header";
import Slogan from "./components/Slogan/Slogan";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <main className={style.main}>
      <Card className={style.card}>
        <ProfileImage src={image} />
        <Header name="Jessica Randall" location="London, United Kingdom" />
        <Slogan>Front-end developer and avid reader.</Slogan>
        <SocialLinks />
      </Card>
    </main>
  );
}

export default App;
