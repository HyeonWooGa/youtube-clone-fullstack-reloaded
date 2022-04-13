import Video from "../models/Video";

export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos});
};

export const watch = async (req, res) => {
    const { id } = req.params; //const id = req.params.id
    const video = await Video.findById(id);
    console.log(video);
    res.render("watch", { pageTitle: video.title, video});
}
export const getEdit = (req, res) => {
    const { id } = req.params; //const id = req.params.id
    return res.render("edit", { pageTitle: `Editing: `})
}
export const postEdit = (req, res) => {
    const { id } = req.params; //const id = req.params.id
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video"});
}

export const postUpload = async (req, res) => {
    const {title, description, hashtags} = req.body;
    try{
        await Video.create({
            title,
            description,
            //createdAt: Date.now(),
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
        return res.redirect("/");
    } catch (error) {
        return res.render("upload", { pageTitle: "Upload Video", errorMessage: error._message, });
    }
    
}

