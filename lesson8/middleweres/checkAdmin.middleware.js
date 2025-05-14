export const authAdmin = (req, res, next) => {
    if (req.myUser.role !== 'admin'){
        return next({ status: 403, message: 'you are not admin' }) // 403-Forbidden
    }
    next();
}