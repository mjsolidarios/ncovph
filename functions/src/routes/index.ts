import { Router } from "express";
import * as cities from "./cities";
import * as confirmedCases from "./confirmedCases";
import * as cors from "./cors";
import * as countries from "./countries";
import * as health from "./health";
import * as nationalities from "./nationalities";
import * as ofwCases from "./ofwCases";
import * as provinces from "./provinces";
import * as rateLimit from "./rateLimit";
import * as regions from "./regions";
import * as root from "./root";
import * as sentryError from "./sentryError";
import * as sentryRequest from "./sentryRequest";

const router = Router();

router.use(cors.handler);
router.use(rateLimit.handler);
router.use(sentryRequest.handler);
router.use(health.path, health.handler);

router.get(root.path, root.handler);

router.get(nationalities.path, nationalities.handler);
router.get(countries.path, countries.handler);
router.get(regions.path, regions.handler);
router.get(provinces.path, provinces.handler);
router.get(cities.path, cities.handler);

router.get(confirmedCases.path, confirmedCases.handler);
router.get(ofwCases.path, ofwCases.handler);

router.use(sentryError.handler);

export default router;
