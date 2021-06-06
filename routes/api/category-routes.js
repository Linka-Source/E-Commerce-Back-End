const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
try {
  const categoryData = await Category.findAll({ 
    include: [{model: Product}]});
    res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
try {
  const categoryData = await Category.findByPk(req.params.id. {
    include: [{ model:Product}]
  });
  if (!categoryData) {
    res.status(404).json({ message: 'Did not find category with this ID.'});
    return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', (req, res) => {
  // create a new category
Category.create({
  category_name: req.body.category_name
})
.then(categoryData => res.json(categoryData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

