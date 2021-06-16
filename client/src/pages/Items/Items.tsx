import useSearchItems from "hooks/useSearchItems";
import { useHistory, useLocation } from "react-router";
import style from "./Items.module.scss";
import { Item } from "pages/Items/Item/Item";

const Items = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const [, query] = location.search.split("search=");
  const { data, error, isLoading } = useSearchItems({ query });

  return (
    <div className={style.root}>
      <div className={style.container}>
        {data?.items.map((item, i) => (
          <Item
            onClick={() => history.push(`/items/${item.id}`)}
            key={item.id}
            {...item}
            hasDivider={i !== data.items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
export default Items;
