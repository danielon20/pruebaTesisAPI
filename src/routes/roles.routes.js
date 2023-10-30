import { Router } from "express";

import { getRoles } from "../controllers/roles.controller";
import { getRoleById } from "../controllers/roles.controller";
import { createNewRole } from "../controllers/roles.controller";
import { deleteRoleById } from "../controllers/roles.controller";
import { updateRoleById } from "../controllers/roles.controller";

const router = Router();

router.get('/roles',getRoles)

router.get('/roles/:id',getRoleById)

router.post('/roles',createNewRole)

router.put('/roles/:id',updateRoleById)

router.delete('/roles/:id',deleteRoleById)

export default router;