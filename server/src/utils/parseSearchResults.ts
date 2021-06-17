import { getAmoutAndDecimalFromPrice } from '~/utils/getAmoutAndDecimalFromPrice';
import { author } from './constants';

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

export type ItemsMeliIntegration = {
  results: ItemMeliIntegration[];
  available_filters: AvailableFilter[];
}

export const parseSearchResults = (result: ItemMeliIntegration[], availableFilters: AvailableFilter[]) => {
  const [categories] = availableFilters.filter(({ id }) => id === 'category') || []
  const items = result.map(({ id, title, currency_id, price, shipping, condition, thumbnail }) => {
    const { amount, decimals } = getAmoutAndDecimalFromPrice(price);
    return ({
      id,
      title,
      price: { currency: currency_id, amount, decimals },
      picture: thumbnail,
      free_shipping: shipping.free_shipping,
      condition
    })
  })

  return {
    author,
    categories: categories?.values.map(({ name }) => name) || [],
    items
  }
}
