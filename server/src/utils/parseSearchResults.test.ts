import { ItemMeliIntegration } from '~/utils/parseItemDetail';
import { AvailableFilter, parseSearchResults } from './parseSearchResults';
import { author } from '~/utils/constants';

describe('parSearchResults', () => {
  it('should parse data', () => {
    const results: ItemMeliIntegration[] = [{
      condition: 'new',
      id: 'MELI01',
      currency_id: "USD",
      price: 1000.50,
      shipping: {
        free_shipping: true
      },
      thumbnail: 'thumbnail',
      title: 'title'
    }, {
      condition: 'new',
      id: 'MELI02',
      currency_id: "USD",
      price: 1000,
      shipping: {
        free_shipping: false
      },
      thumbnail: 'thumbnail',
      title: 'title'
    }];

    const availableFilters: AvailableFilter[] = [{
      id: 'category',
      name: 'categorias',
      type: 'text',
      values: [{
        name: 'Categoria 1'
      },
      {
        name: 'Categoria 2'
      },
      {
        name: 'Categoria 3'
      }
      ]
    }, {
      id: 'otherType',
      name: '',
      type: 'text',
      values: [{
        name: 'otherType 1'
      },
      {
        name: 'otherType 2'
      },
      {
        name: 'otherType 3'
      }
      ]
    }]

    const result = parseSearchResults(results, availableFilters);
    expect(result).toStrictEqual({
      author,
      items: [
        {
          condition: 'new',
          id: 'MELI01',
          price: {
            currency: "USD",
            amount: 1000,
            decimals: 50
          },
          free_shipping: true,
          picture: 'thumbnail',
          title: 'title'
        },
        {
          condition: 'new',
          id: 'MELI02',
          price: {
            currency: "USD",
            amount: 1000,
            decimals: 0
          },
          free_shipping: false,
          picture: 'thumbnail',
          title: 'title'
        }
      ],
      categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
    });
  })
})

