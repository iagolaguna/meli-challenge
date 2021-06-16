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
  const a = new Intl.NumberFormat(this, {
    style: "currency",
    currency: price.currency,
    currencyDisplay: "symbol",
  }).format(price.price);
  console.log("price", a);
  return (
    <div className={style.item} onClick={onClick}>
      <div className={style.container}>
        <img className={style.image} src={picture} alt="Item" />
        <div className={style.content}>
          <div className={style.price}>
            <span>$ {price.price}</span>
            {free_shipping && (
              <img
                src={IcFreeShipping}
                srcSet={`${IcFreeShipping} 1200w, ${IcFreeShipping2x} 1900w`}
                alt="Free shipping"
              />
            )}
          </div>
          <p>{title}</p>
        </div>
      </div>
      {hasDivider && <Divider />}
    </div>
  );
};
