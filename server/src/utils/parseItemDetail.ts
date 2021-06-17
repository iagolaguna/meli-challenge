import { author } from './constants';
import { getAmoutAndDecimalFromPrice } from './getAmoutAndDecimalFromPrice';

export type ItemMeliIntegration = {
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

export type ItemDetailIntegration = {
  sold_quantity: number;
} & ItemMeliIntegration

export type ItemDescription = {
  plain_text: string;
}

export const parseItemDetail = (item: ItemDetailIntegration, description: string) => {
  const { id, title, currency_id, price, shipping, condition, thumbnail, sold_quantity } = item
  const { amount, decimals } = getAmoutAndDecimalFromPrice(price);

  return {
    author,
    item: {
      id,
      title,
      price: { currency: currency_id, amount, decimals },
      picture: thumbnail,
      free_shipping: shipping.free_shipping,
      sold_quantity,
      condition,
      description
    }
  }
}
