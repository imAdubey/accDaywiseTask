import express, {Request, Response} from 'express'
import {queryExecute} from '../database/dbConfig';

const router = express.Router();

/* GET home page. */
router.get('/', async(req: Request, res: Response)=>{
  const query: string = 'SELECT * FROM users';
  const params: object = [];
  const queRes = await queryExecute(query, params);
  res.send(queRes);
});

export = router;
