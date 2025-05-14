import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../models/user.model.js';

export const getAllUsers = async (req, res, next) => {
    try {
        if (req.myUser.role !== 'admin') {
            return next({ status: 403, message: 'you are not admin' });
        }
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next({ message: error.message });
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return next({ message: 'user not found', status: 401 });
        }

        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth) {
            return next({ message: 'user not found', status: 401 });
        }
        const token = generateToken(user);
        res.json({ name: user.name, token });
        next()
    } catch (error) {
        next({ message: error.message });
    }
}


export const signUp = async (req, res, next) => {
    try {
        const { name, phone, email, password, date_registered } = req.body;
        const user = new User({ name, phone, email, password, date_registered });
        await user.save();
        user.password = '****';
        const token = generateToken(user);
        res.json({ name: user.name, token });
    } catch (error) {
        next({ message: error.message });
    }
}
export const updateUser = async (req, res, next) => {
    try {
        
        const { id } = req.params;
        const {_id, name, phone, email, password, date_registered } = req.body;
        if (id !== _id) {
            return next({ status: 409, message: 'id conflict' });
        }
        if(req.myUser._id!== id){
            return next({ status: 403, message: 'you are not allowed to update this user' });
        }
        const user = await User.findByIdAndUpdate(id, {
            $set: { name, phone, email, password, date_registered },
        }, { new: true });
        if (!user) {
            return next({ message: 'user not found', status: 404 });
        }
        res.json(user);
    } catch (error) {
        next({ message: error.message });
    }
}