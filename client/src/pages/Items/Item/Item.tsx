import { SearchItem } from "hooks/useSearchItems";
import IcFreeShipping from "assets/ic_shipping.png";
import IcFreeShipping2x from "assets/ic_shipping@2x.png";
import style from "./Item.module.scss";
import Divider from "components/Divider/Divider";

type ItemProps = {
  hasDivider?: boolean;
  onClick: () => void;
} & SearchItem;

export const Item = ({
  title,
  picture,
  price,
  free_shipping,
  hasDivider = true,
  onClick,
}: ItemProps) => {
  const formatedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0,
  })
    .format(price.price)
    .substring(1);

  return (
    <div className={style.item} onClick={onClick}>
      <div className={style.container}>
        <img className={style.image} src={picture} alt="Producto" />
        <div className={style.content}>
          <div className={style.price}>
            <span aria-label="Precio">$ {formatedPrice}</span>
            {free_shipping && (
              <img
                src={IcFreeShipping}
                srcSet={`${IcFreeShipping} 1200w, ${IcFreeShipping2x} 1900w`}
                alt="Envío gratis icon"
              />
            )}
          </div>
          <h1>{title}</h1>
        </div>
      </div>
      {hasDivider && <Divider />}
    </div>
  );
};
