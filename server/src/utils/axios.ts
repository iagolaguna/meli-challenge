import axios from 'axios';

const BASE_MELI_URL = 'https://api.mercadolibre.com/';

export default axios.create({ baseURL: BASE_MELI_URL });
