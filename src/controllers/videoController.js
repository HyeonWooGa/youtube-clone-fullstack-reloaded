export const trending = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search Videos");

export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => {
    return res.send("Edit Videos");
};
export const deletVideo = (req, res) => res.send("Delete Videos");
export const upload = (req, res) => res.send("Upload Videos");


