import LogoML from "assets/Logo_ML.png";
import LogoML2x from "assets/Logo_ML@2x.png";

export const Logo = () => {
  return (
    <img
      src={LogoML}
      alt="Logo Mercado livre"
      srcSet={`${LogoML} 1200w, ${LogoML2x} 1900w`}
    />
  );
};
