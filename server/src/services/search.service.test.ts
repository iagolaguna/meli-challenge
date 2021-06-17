import MockAdapter from 'axios-mock-adapter';
import { SearchService } from '~/services/search.service';
import axios from '~/utils/axios';
import { ItemMeliIntegration } from '~/utils/parseItemDetail';
import { AvailableFilter, ItemsMeliIntegration } from '~/utils/parseSearchResults';

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
}];

const availableFilters: AvailableFilter[] = [{
  id: 'category',
  name: 'categorias',
  type: 'text',
  values: [{
    name: 'Categoria 1'
  }
  ]
}]
const data: ItemsMeliIntegration = {
  results,
  available_filters: availableFilters
}

describe('SearchService', () => {
  let searchService: SearchService;
  const mock = new MockAdapter(axios)

  beforeEach(() => {
    searchService = new SearchService(axios);
  })

  it('should call axios with correct url', async () => {
    const query = 'iphone';
    const url = '/sites/MLA/search'
    const searchUrl = `${url}?limit=4&q=${query}`;
    mock.onGet(searchUrl).reply(200, data)
    const axiosSpy = jest.spyOn(axios, 'get');
    await searchService.search(query);
    expect(axiosSpy).toBeCalledWith(searchUrl)
  })
})
