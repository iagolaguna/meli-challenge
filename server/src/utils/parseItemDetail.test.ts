import { ItemDetail, ItemDetailIntegration, parseItemDetail } from '~/utils/parseItemDetail';
import { author } from '~/utils/constants';

describe('parseItemDetail', () => {
  it('should parse data', () => {
    const item: ItemDetailIntegration = {
      condition: 'new',
      id: 'MELI01',
      currency_id: "USD",
      price: 1000.50,
      shipping: {
        free_shipping: true
      },
      thumbnail: 'thumbnail',
      title: 'title',
      sold_quantity: 0,
    }
    const description = 'Description Item'
    const description2 = `${description} 2`

    const item2: ItemDetailIntegration = {
      ...item,
      id: 'MELI02',
      price: 1000,
      sold_quantity: 50,
      shipping: {
        free_shipping: false,
      },
    }

    const expected1: ItemDetail = {
      author,
      item: {
        condition: 'new',
        id: 'MELI01',
        price: {
          currency: "USD",
          amount: 1000,
          decimals: 50
        },
        free_shipping: true,
        picture: 'thumbnail',
        title: 'title',
        description,
        sold_quantity: 0,
      }
    }

    const expected2: ItemDetail = {
      author,
      item: {
        condition: 'new',
        id: 'MELI02',
        price: {
          currency: "USD",
          amount: 1000,
          decimals: 0
        },
        free_shipping: false,
        picture: 'thumbnail',
        title: 'title',
        description: description2,
        sold_quantity: 50,
      }
    }

    const result1 = parseItemDetail(item, description);
    const result2 = parseItemDetail(item2, description2);
    expect(result1).toStrictEqual(expected1);
    expect(result2).toStrictEqual(expected2);
  })
})

