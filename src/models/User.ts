import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    username: string;
    googleId: string;
    githubId: string;
    image: string;
};

const userSchema = new mongoose.Schema<UserDocument>(
    {
        username: { type: String },
        googleId: { type: String, unique: true },
        githubId: { type: String, unique: true },
        image: { type: String },
    },
    { timestamps: true },
);

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;