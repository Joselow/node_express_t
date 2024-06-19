import express from 'express';
import { faker } from '@faker-js/faker';
import productRouter from './routes/products.router.js'

const app = express()
const port = 3000;

app.use('/api/products', productRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo' })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json(
    {
      categoryId,
      productId
    },
  )
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json(
      {
        limit,
        offset
      },
    )
  }
  else {
    res.json({
      message: 'bad request'
    }).status(400)
  }

})

app.listen(port, () => {
  console.log('puerto en http://localhost:'+port);
})
