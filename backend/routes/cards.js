const router = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const {
  validationCreateCard,
  validationCardId,
} = require('../middlewares/validations');

router.get('/', getCards);
router.post('/', validationCreateCard, createCard);
router.delete('/:id', validationCardId, deleteCard);
router.put('/:id/likes', validationCardId, likeCard);
router.delete('/:id/likes', validationCardId, dislikeCard);

module.exports = router;
