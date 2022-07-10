const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
	return res.render('login.ejs');
});

module.exports = router;
