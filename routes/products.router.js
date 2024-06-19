import express from 'express';
import { faker } from '@faker-js/faker';

const router = express.Router()

router.get('/', (req, res) => {
  const products = []

  const { limit } = req.query

  for (let i = 0; i < (limit || 10); i++){
    products.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      image: faker.image.url()
    })
  }

  res.json(products)
})

router.get('/:id', (req, res) => {

  const { id } = req.params

  res.json(
    {
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      id
    },
  )
})


export default router
