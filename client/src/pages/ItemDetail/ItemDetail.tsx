import useItemDetail, { Condition } from "hooks/useItemDetail";
import { useParams } from "react-router";
import { formatAmount } from "utils/formatAmount";
import style from "./ItemDetail.module.scss";

const getConditionLabel = (condition: Condition) => {
  if (condition === Condition.NEW) {
    return "Nuevo";
  }
};

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useItemDetail({ id });
  if (!data?.item) {
    return null;
  }
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <img src={data.item.picture} alt="Producto" />
          <div className={style.content}>
            <span>{`${getConditionLabel(data.item.condition)} - ${
              data.item.sold_quantity
            } vendidos`}</span>
            <h3>{data.item.title}</h3>
            <span className={style.price}>
              $ {formatAmount(data.item.price.amount)}
            </span>
            <button type="button">Comprar</button>
          </div>
        </div>
        <div className={style.description}>
          <h1>Descripcíon del producto</h1>
          <p>{data.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
