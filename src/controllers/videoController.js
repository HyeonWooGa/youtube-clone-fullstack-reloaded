export const trending = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("Search Videos");

export const watch = (req, res) => {
    return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
    return res.send("Edit Videos");
};
export const deletVideo = (req, res) => res.send("Delete Videos");
export const upload = (req, res) => res.send("Upload Videos");


