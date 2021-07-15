import SocialMedia from "./SocialMedia";
import Contact from "./Contact";
import "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <SocialMedia />
      <p>Copyright 2021, Rodrigo Calderon</p>
      <Contact />
    </footer>
  );
};

export default Footer;
