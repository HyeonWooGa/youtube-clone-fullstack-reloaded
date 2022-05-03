import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join"});
export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location} = req.body;
    const pageTitle = "Join";
    if(password !== password2) {
        return res.status(400).render("join", { 
            pageTitle,
            errorMessage: "Password confirmation does not match.",
        });
    }
    const exists = await User.exists({ $or : [ {username }, { email }] });
    if(exists) {
        return res.status(400).render("join", { 
            pageTitle,
            errorMessage: "This username/email is already taken.",
        });
    }
    try {
        await User.create({
            name,
            username,
            email,
            password,
            location,
        });
    } catch(error) {
        return res.status(400).render("join", { pageTitle: "Join", errorMessage: error._message, });
    }
    return res.redirect("/login");
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login"});
export const postLogin = async (req,res) => {
    const pageTitle = "Login"
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user) {
        return res
          .status(400)
          .render("login", { 
            pageTitle, 
            errorMessage: "An account with this username does not exists.",
        });
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) {
        return res
          .status(400)
          .render("login", { 
            pageTitle, 
            errorMessage: "Wrong password.",
        });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
}

export const startGithubLogin = (req, res) => {
    const baseUrl = `https://github.com/login/oauth/authorize`;
    const config = {
        client_id: "6d21d5e44427657f61f5",
        allow_signup: false,
        scope: "read:user user:email",
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    return res.redirect(finalUrl);
}

export const logout = (req, res) => res.send("Log Out");
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => res.send("Remove User");
export const see = (req, res) => res.send("See");