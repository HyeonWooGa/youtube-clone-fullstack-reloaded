import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn); // req.session.loggedIn 이 null, undefined 일 수 있으니 Boolean 으로 감싸줌
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user || {}; // req.session.user 가 undefined 일 수 있으니 logeedInUser 는 loggedIn 상태에서만 사용 ex)if loggedIn 하위 항목으로
    console.log(req.session.user)
    next();
};

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn) {
        return next();
    } else {
        return res.redirect("/login");
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggedIn) {
        return next();
    } else {
        return res.render("/");
    }
};

export const avatarUpload = multer({ 
    dest: "uploads/avatars/", 
    limits: {
        fileSize: 3000000,
    }  
});
export const videoUpload = multer({ 
    dest: "uploads/videos/", 
    limits: {
        fieldSize: 10000000,
    } 
});