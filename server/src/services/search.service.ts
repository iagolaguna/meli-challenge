import { AxiosInstance } from 'axios';
import { ItemsMeliIntegration, parseSearchResults } from '~/utils/parseSearchResults';


export class SearchService {
  private axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async search (query?: string) {
    const url = this.getSearchUrl(query);
    const response = await this.axios.get<ItemsMeliIntegration>(url);
    const { results, available_filters } = response.data
    const data = parseSearchResults(results, available_filters)
    return data;
  }

  private getSearchUrl = (query?: string) => {
    const urlParams = new URLSearchParams();
    urlParams.set('limit', '4');
    query && urlParams.set('q', query);
    return `/sites/MLA/search?${urlParams.toString()}`
  }
}
