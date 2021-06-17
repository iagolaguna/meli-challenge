import express from 'express';
import axios from '~/utils/axios';
import { SearchService } from '~/services/search.service';
import { ItemService } from '~/services/item.service';

const router = express.Router();

const searchService = new SearchService(axios);
const itemService = new ItemService(axios)

router.get('/search', async (req, res) => {
  const { q } = req.query;
  const data = await searchService.search(q as string);
  res.json(data)
})

router.get('/items/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await itemService.getById(id)
    res.json(item)
  } catch (err) {
    console.log('Error:', err)
    next(err)
  }
})

export default router;
