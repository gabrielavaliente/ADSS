const Pupilaje = require("../models/post.model");
const debug = require("debug")("app:post-controller");
const controller = {};



controller.savePupilaje = async (req, res, next) => {


    try {
        const { title, description, image, pupilajeState, price, contact, water,electricity,internet, mapLink } = req.body;
        const { identifier } = req.params;
        const { user } = req;



        let pupilaje = await Pupilaje.findById(identifier);

        if(!pupilaje){
          pupilaje= new Pupilaje();
          pupilaje["user"]=user._id;
        }else{
          if(!pupilaje["user"].equals(user._id)){
            return res.status(403).json({error:"This is not your post"})
          }
        }

        pupilaje["title"] = title;
        pupilaje["description"] = description;
        pupilaje["image"] = image;
        pupilaje["pupilajeState"] = pupilajeState;
        pupilaje["price"] = price;
        pupilaje["contact"] = contact;
        pupilaje["water"] = water;
        pupilaje["electricity"]=electricity;
        pupilaje["internet"]=internet;
        pupilaje["mapLink"] = mapLink;
    

        const pupilajeSaved = await pupilaje.save();
        if (!pupilajeSaved) {
            return res.status(409).json({ error: "Error creating Product" });
        }

        return res.status(201).json(pupilajeSaved);
    } catch (error) {
        next(error);

    }


}

controller.findAllPupilajes = async (req, res, next) => {
    try {
        const pupilaje = await Pupilaje.find({ hidden: false })
            .populate("user", "username email")
            .populate("comments.user", "username email");

        return res.status(200).json({ pupilaje });
    } catch (error) {
        next(error);

    }
}

controller.finOnePupilajeById = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const pupilaje = await Pupilaje.findOne({
            _id: identifier,
            hidden: false,
        })
            .populate("user", "username email _id")
            .populate("comments.user", "username email");


        if (!pupilaje) {
            return res.status(404).json({ error: "Post not found" });
        }
        return res.status(200).json(pupilaje);
    }
    catch (error) {
        next(error);


    }

}



controller.deletePupilajeById = async (req, res, next) => {

try {
    const { identifier } = req.params;
    const user = req.user;

    const pupilaje = await Pupilaje.findOneAndDelete({
      _id: identifier,
      user: user._id,
    });

    if (!pupilaje) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
}



controller.findByUserPupilaje = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const pupilajes = await Pupilaje.find({ user: identifier, hidden: false })
      .populate("user", "username email _id")
      .populate("comments.user", "username email");

    return res.status(200).json({ pupilajes });
  } catch (error) {
    next(error);
  }
};

controller.findOwnPupilaje = async (req, res, next) => {
  try {
    const { user } = req;

    const pupilaje = await Pupilaje.find({ user: user._id })
      .populate("user", "username email _id")
      .populate("comments.user", "username email");

    return res.status(200).json({ pupilaje });
  } catch (error) {
    next(error);
  }
};


controller.findSavedPupilajes = async (req, res, next) => {
  try {
    const user = await req.user.populate({
      path: "savedPosts",
      populate: [
        {
          path: "user",
          select: "username email",
        },
        
        {
          path: "comments.user",
          select: "username email",
        },
      ],
    });

    return res.status(200).json({ pupilaje: user["savedPosts"] });
  } catch (error) {
    next(error);
  }
};



controller.toggleHiddenPupilaje = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const user = req.user;

    //Obtener el post con el id
    //Verificar pertenencia del post al usuario
    const pupilaje = await Pupilaje.findOne({
      _id: identifier,
      user: user._id,
    })
      .populate("user", "username email ")
      .populate("comments.user", "username email");

    if (!pupilaje) {
      return res.status(404).json({ error: "Post not found" });
    }
    //Cambiar el valor
    pupilaje.hidden = !pupilaje.hidden;
    //Commit los cambios
    const newPupilaje = await pupilaje.save();
    //Cambio de post
    return res.status(200).json({ newPupilaje });
  } catch (error) {
    next(error);
  }
};

controller.saveAPupilaje = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const user = req.user;

    const post = await Pupilaje.findOne({
      _id: identifier,
      hidden: false,
    })
      .populate("user", "username email ")

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    let _posts = user["savedPosts"] || [];

    const alreadySaved = _posts.findIndex((_i) => _i && _i.equals(post._id)) >= 0;

    if (alreadySaved) {
      _posts = _posts.filter((_i) => _i && !_i.equals(post._id));
    } else {
      _posts = [post._id, ..._posts];
    }
    

    user["savedPosts"] = _posts;

    const newUser = await (
      await user.save()
    ).populate({
      path: "savedPosts",
      populate: [
        {
          path: "user",
          select: "username email",
        },
        {
          path: "comments.user",
          select: "username email",
        },
      ],
    });

    return res.status(200).json({ posts: newUser["savedPosts"] });
  } catch (error) {
    next(error);
  }
};




controller.saveCommentPupilaje = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const { content,commentPupilaje} = req.body;
    const user = req.user;

    //Obtener el post {id,hidden}
    const pupilaje = await Pupilaje.findOne({ _id: identifier, hidden: false })
      .populate("user", "username email")
    //Verificar que el post exista
    if (!pupilaje) {
      return res.status(404).json({ error: "Post not found" });
    }
    //Buscar la existencia de un comentario previo en base a commentId
    let _comments = pupilaje["comments"];

    const prevIndex = _comments.findIndex((_c) => _c._id.equals(commentPupilaje));

    if (prevIndex >= 0) {
      //Comentario ya existe
      const _comment = _comments[prevIndex];
      _comment.history = [..._comment.history, _comment.content];
      _comment.content = content;

      _comments[prevIndex] = _comment;
    } else {
      //Comentario no existe
      _comments = [
        ..._comments,
        { user: user._id, timestamp: new Date(), content },
      ];
    }

    //Guardar el post => commit
    pupilaje["comments"] = _comments;

    const newPupilaje = await (
      await pupilaje.save()
    ).populate("comments.user", "username email");
    //Retornamos el post actualizado
    return res.status(200).json(newPupilaje);
  } catch (error) {
    next(error);
  }
};


module.exports = controller;


