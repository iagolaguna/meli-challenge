import useItemDetail from "hooks/useItemDetail";
import { useParams } from "react-router";
import style from "./ItemDetail.module.scss";

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useItemDetail({ id });

  console.log(id);
  console.log(data);

  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <img src={data?.item.picture} alt="Product" />
          <div className={style.content}>
            <span>{`Nuevo - ${data?.item.sold_quantity} vendidos`}</span>
            <h3>{data?.item.title}</h3>
            <span className={style.price}>$ {data?.item.price.price}</span>
            <button type="button">Comprar</button>
          </div>
        </div>
        <div className={style.description}>
          <h1>Descripcíon del producto</h1>
          <p>{data?.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
