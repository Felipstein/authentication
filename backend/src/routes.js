const { Router } = require('express');

const authMiddleware = require('./middlewares/authMiddleware'); 

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

const router = Router();

router.post('/auth', AuthController.authenticate);
router.post('/auth/register', AuthController.register);
router.post('/auth/validate', AuthController.validate);

router.use(authMiddleware);

router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);


module.exports = router;