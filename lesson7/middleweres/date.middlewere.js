export const addDate = (req, res, next) => {
    const currentDate = new Date();
    req.date = currentDate;
    console.log("Date added to request object");
    
    next();
}
export const printDate = (req, res, next) => {
    if (req.method == 'GET') {
        console.log(`Current date is: ${req.date.toLocaleDateString()}`);
    }
    next();
}
export const blockOnShabbat = (req, res, next) => {
    const currentDate = new Date(req.date);
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();
    debugger
    if ((dayOfWeek == 5 && currentHour > 11) || (dayOfWeek == 6 && currentHour < 22)) { // 6 represents Saturday
        return res.status(418).json({ message: "Access is blocked on Shabbat" });
    }
    next();
}