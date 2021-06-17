import { AxiosInstance } from 'axios';
import { ItemDescription, ItemDetailIntegration, parseItemDetail } from '../utils/parseItemDetail';

export class ItemService {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getById (id: string) {
    const itemUrl = `/items/${id}`
    const descriptionUrl = `${itemUrl}/description`
    const [responseItem, responseItemDescription] = await Promise.all([
      this.axios.get<ItemDetailIntegration>(itemUrl),
      this.axios.get<ItemDescription>(descriptionUrl)
    ]);
    return parseItemDetail(responseItem.data, responseItemDescription.data.plain_text)
  }
}
