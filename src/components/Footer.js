import SocialMediaIcon from "./footerChildren/SocialMediaIcon";

function Footer() {

  const socialIconsClasses = [
    'fa-brands fa-twitter',
    'fab fa-facebook-f',
    'fa-brands fa-instagram',
    'fab fa-github'
  ];

  const icons = socialIconsClasses.map((item)=>
    <SocialMediaIcon
      key={item}
      iconClass={item}
  />)

  return (
    <footer>
      {icons}
    </footer>
  )
}

export default Footer;