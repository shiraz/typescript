import { Router } from 'express';

import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todos';

const router = Router();

router.delete('/:id', deleteTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.post('/', createTodo);

export default router;