import mongoose from "mongoose";

const portfolioEmail = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })

const Email = mongoose.models.Email || mongoose.model('Email', portfolioEmail)

export default Email;