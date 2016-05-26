import { Router } from 'express';

let router = Router();

router.get('/', (req, res) => {
	res.redirect('https://www.google.com');
});

export default router;
