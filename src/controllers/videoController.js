export const trending = (req, res) => {
    const videos = [];
    return res.render("home", { pageTitle: "Home", videos });
}
export const search = (req, res) => res.send("Search Videos");

export const watch = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" })
export const deletVideo = (req, res) => res.send("Delete Videos");
export const upload = (req, res) => res.send("Upload Videos");


