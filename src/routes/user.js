import { Router } from 'express';

const router = Router();

function firstS(item) {
  return item.name.toLowerCase().indexOf('s')===0;
}
function filsalary(item) {
  return item.salary>2000;
}

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users).filter(firstS));
});

router.get('/salary', (req, res) => {
  return res.send(Object.values(req.context.models.users).filter(filsalary));
});

export default router;
