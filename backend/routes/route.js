// route.js
import express from "express";
import { sendReservationData } from "../controller/reservation.js";

const router = express.Router();

router.post('/send', sendReservationData);

export default router;
    