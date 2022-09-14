const { Router } = require('express');

const authMiddleware = require('./middlewares/authMiddleware'); 

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

const router = Router();

router.post('/auth', AuthController.authenticate);
router.post('/auth/register', AuthController.register);

router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);

router.post('/users', authMiddleware, UserController.store);
router.put('/users/:id', authMiddleware, UserController.update);
router.delete('/users/:id', authMiddleware, UserController.delete);


module.exports = router;