import express from 'express';
import axios from 'axios';
import { parseItemDetail } from '../utils/parseItemDetail';
import { ItemsMeliIntegration, parseSearchResults } from '../utils/parseSearchResults';

const router = express.Router();

const BASE_MELI_URL = 'https://api.mercadolibre.com/';

router.get('/status', (_req, res) => {
  res.json({ message: 'OK' });
});

router.get('/search', async (req, res) => {
  const { q } = req.query;
  const urlParams = new URLSearchParams();
  if (q) {
    urlParams.set('q', q as string);
  }
  urlParams.set('limit', '4');
  const url = `${BASE_MELI_URL}/sites/MLA/search?${urlParams.toString()}`
  const response = await axios.get<ItemsMeliIntegration>(url);
  const { results, available_filters } = response.data
  const data = parseSearchResults(results, available_filters)
  res.json(data)
})

router.get('/items/:id', async (req, res, next) => {
  const id = req.params.id;
  const itemUrl = `${BASE_MELI_URL}/items/${id}`
  const descriptionUrl = `${itemUrl}/description`
  try {

    const [responseItem, responseItemDescription] = await Promise.all([axios.get(itemUrl), axios.get(descriptionUrl)]);
    const description = responseItemDescription.data.plain_text
    const response = parseItemDetail(responseItem.data, description)
    res.json(response)
  } catch (err) {
    console.log(err)
    next(err)
  }
})

export default router;
