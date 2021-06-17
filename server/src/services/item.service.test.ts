import MockAdapter from 'axios-mock-adapter';
import { ItemService } from '~/services/item.service';
import axios from '~/utils/axios';
import { ItemDetailIntegration } from '~/utils/parseItemDetail';


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
const description = { plain_text: 'Description' }

describe('ItemService', () => {
  let itemService: ItemService;
  const mock = new MockAdapter(axios)
  beforeEach(() => {
    itemService = new ItemService(axios);
  })

  it('should call axios with correct url', async () => {
    const id = 'MELI01';
    const itemUrl = `/items/${id}`
    const itemDescriptionUrl = `${itemUrl}/description`
    const axiosSpy = jest.spyOn(axios, 'get');
    mock.onGet(`${itemUrl}`).reply(200, item)
    mock.onGet(`${itemDescriptionUrl}`).reply(200, description)
    await itemService.getById(id);

    expect(axiosSpy).toBeCalledWith(itemUrl)
    expect(axiosSpy).toBeCalledWith(itemUrl)
  })
})
