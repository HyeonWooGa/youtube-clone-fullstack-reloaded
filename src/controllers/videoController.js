export const trending = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search Videos");

export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit")
export const deletVideo = (req, res) => res.send("Delete Videos");
export const upload = (req, res) => res.send("Upload Videos");


