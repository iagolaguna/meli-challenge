
type ItemMeliIntegration = {
  id: string;
  title: string;
  currency_id: string;
  price: number;
  shipping: {
    free_shipping: boolean;
  }
  condition: string;
  thumbnail: string;
}

type AvailableFilterValue = {
  name: string;
};

type AvailableFilter = {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
};

// type ItemsMeliIntegration = {
//   results: ItemMeliIntegration[];
//   available_filters: AvailableFilter[];
// }

export const parseSearchResults = (result: ItemMeliIntegration[], availableFilters: AvailableFilter[]) => {
  console.log(availableFilters)
  const [categories] = availableFilters.filter(({ id }) => id === 'category') || []
  const items = result.map(({ id, title, currency_id, price, shipping, condition, thumbnail }) =>
  ({
    id,
    title,
    price: { price, currency: currency_id, amount: 0 },
    picture: thumbnail,
    free_shipping: shipping.free_shipping,
    condition
  }))

  return {
    author: {
      name: "Iago",
      lastname: "Laguna"
    },
    categories: categories.values.map(({ name }) => name),
    items
  }
}
