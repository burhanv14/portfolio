'use server'

import dbConn from "./utils/dbConn";
import Email from "./models/email";
import {NextResponse} from "next/server";

const submitEmail = async (data) => {
    try {

        const body = await req.json();
        await dbConn();

        await Email.create(data);

        return 

    }catch (e) {
        return 
    }
}

export default submitEmail;