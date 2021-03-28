import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    username: string;
    googleId: string;
};

const userSchema = new mongoose.Schema<UserDocument>(
    {
        username: { type: String, unique: true },
        googleId: { type: String, unique: true },
    },
    { timestamps: true },
);

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;