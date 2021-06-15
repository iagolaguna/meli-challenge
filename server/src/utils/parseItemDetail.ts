
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

type ItemDetailIntegration = {
  sold_quantity: number;
} & ItemMeliIntegration


export const parseItemDetail = (item: ItemDetailIntegration, description: string) => {
  const { id, title, currency_id, price, shipping, condition, thumbnail, sold_quantity } = item

  return {
    author: {
      name: "Iago",
      lastname: "Laguna"
    },
    item: {
      id,
      title,
      price: { price, currency: currency_id, amount: 0 },
      picture: thumbnail,
      free_shipping: shipping.free_shipping,
      sold_quantity,
      condition,
      description
    }
  }
}
