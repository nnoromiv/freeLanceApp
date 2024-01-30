import express from "express"
import {Addjob, getjobbyuser} from '../controllers/jobController.js'


const router = express.Router();

router.post('/insert', Addjob )
router.route('/:id').get(getjobbyuser)

export default router;