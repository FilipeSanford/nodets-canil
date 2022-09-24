import {Router} from "express";
import * as PageControllers from "../controllers/pageController"; //NO JS FICARIA pageController.js"
import * as SearchControllers from "../controllers/searchController"; //NO JS FICARIA searchController.js

const router = Router();

//CONFIGURANDO AS ROTAS

router.get("/", PageControllers.home);
router.get("/dogs", PageControllers.dogs);
router.get("/cats", PageControllers.cats);
router.get("/fishes", PageControllers.fishes);

router.get("/search", SearchControllers.search);

export default router;