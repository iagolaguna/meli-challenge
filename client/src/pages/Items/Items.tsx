import useSearchItems from "hooks/useSearchItems";
import { useHistory, useLocation } from "react-router";
import style from "./Items.module.scss";
import { Item } from "pages/Items/Item/Item";

const getQueryFromSearchLocation = (search: string) => {
  const [, query] = search.split("search=");
  return query;
};

const Items = () => {
  const location = useLocation();
  const history = useHistory();
  const { data } = useSearchItems({
    query: getQueryFromSearchLocation(location.search),
  });

  if (!data) {
    return null;
  }

  return (
    <div className={style.root}>
      <div className={style.container}>
        {data.items.map((item, i) => (
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
