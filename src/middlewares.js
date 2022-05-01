export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn); // req.session.loggedIn 이 null, undefined 일 수 있으니 Boolean 으로 감싸줌
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user;
    next();
}