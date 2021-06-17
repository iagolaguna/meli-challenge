import axios from 'axios';
import { BASE_MELI_URL } from '~/utils/constants';

export default axios.create({ baseURL: BASE_MELI_URL });
