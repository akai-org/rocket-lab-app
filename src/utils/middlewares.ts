import { label, NextMiddleware } from "next-api-middleware";
import { connectDB } from "../mongo/db";
import { Credentials } from "./credentials";

const connectDatabase: NextMiddleware = async (req, res, next) => {
    try {
        await connectDB()
        await next()
    } catch (error) {
        console.log(error)
        res.status(500).send('error occured dupa')
    }
}

export const withMiddleware = label({connectDatabase, withAdmin: Credentials.withAdmin}, ['connectDatabase'])