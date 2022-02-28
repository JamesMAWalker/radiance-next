import { search } from '../../lib/cloudinary';

export default async function handler(req, res) {
  const params = JSON.parse(req.body)
  console.log('params: ', params);

  const results = await search(params)
  res.status(200).json({
    ...results
  })
}
