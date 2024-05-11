import ErrorHandler from "../error/errorMiddleware.js"
import { Reservationdata } from "../models/dataSchema.js"

export const sendReservationData = async (req, res, next) => {
    const { firstname, lastname, email, phone, date, time } = req.body;

    if (!firstname || !lastname || !email | !phone | !date || !time) {
        return next(new ErrorHandler("Pleaser Fill Full REservation Form", 400))
    }
    try {
        await Reservationdata.create({firstname, lastname, email, phone, date, time});
        res.status(200).json({
            success: true,
            message: " Reservation Send SuccessFully"
        })
    } catch (error) {
        if (error.name == "ValidationError") {
            const ValidationError = Object.values(error.errors).map((err) => { err.message })
            return next(new ErrorHandler(ValidationError.join(' , ', 400)))
        }
        return next(error)
    }



}