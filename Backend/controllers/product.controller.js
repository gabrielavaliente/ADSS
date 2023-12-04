const Product = require("../models/product.model");
const debug = require("debug")("app:product-controller");

const controller = {};


controller.saveAProducts = async (req, res, next) => {
    try {
      const { identifier } = req.params;
      const user = req.user;
  
      const product = await Product.findOne({
        _id: identifier,
        hidden: false,
      })
        .populate("user", "username email ")
  
      if (!product) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      let _products = user["savedPosts"] || [];
  
      const alreadySaved = _products.findIndex((_i) => _i.equals(product._id)) >= 0;
  
      if (alreadySaved) {
        _products = _products.filter((_i) => !_i.equals(_products._id));
      } else {
        _products = [_products._id, ..._products];
      }
  
      user["savedPosts"] = _products;
  
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
  
      return res.status(200).json({ product: newUser["savedPosts"] });
    } catch (error) {
      next(error);
    }
  };

  controller.toggleHiddenProduct = async (req, res, next) => {
    try {
      const { identifier } = req.params;
      const user = req.user;
  
      //Obtener el post con el id
      //Verificar pertenencia del post al usuario
      const product = await Product.findOne({
        _id: identifier,
        user: user._id,
      })
        .populate("user", "username email ")
        .populate("comments.user", "username email");
  
      if (!product) {
        return res.status(404).json({ error: "Post not found" });
      }
      //Cambiar el valor
      product.hidden = !product.hidden;
      //Commit los cambios
      const newProduct = await product.save();
      //Cambio de post
      return res.status(200).json({ newProduct });
    } catch (error) {
      next(error);
    }
  };

  
  controller.findSavedProducts = async (req, res, next) => {
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
  
      return res.status(200).json({ product: user["savedPosts"] });
    } catch (error) {
      next(error);
    }
  };

  controller.findOwnProduct = async (req, res, next) => {
    try {
      const { _id: userId } = req.user;
  
      const product = await Product.find({ user: userId })
        .populate("user", "username email _id")
        .populate("comments.user", "username email");
  
      return res.status(200).json({ posts });
    } catch (error) {
      next(error);
    }
  };

  controller.deleteProductById = async (req, res, next) => {


    try {
    const { identifier } = req.params;
    const user = req.user;

    const product = await Product.findOneAndDelete({
      _id: identifier,
      user: user._id,
    });

    if (!product) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
}


controller.saveProduct = async (req, res, next) => {

    try {
        const { title, description, image, productState, price, contact } = req.body;
        const { identifier } = req.params;
        const { user } = req;
        // debug({ user });

        /*const product = new Product({
            title: title,
            description: description,
            image: image,
            productState: productState,
            price: price,
            contact: contact,
        });*/

        let product = await Product.findById(identifier);

        if (!product) {
            product = new Product();
            product["user"] = user._id;
        } else {
            if (product["user"].equals(user._id)) {
                return res.status(403).json({ error: "This is not your post" });
            }
        }

        product["title"] = title;
        product["description"] = description;
        product["image"] = image;
        product["productState"] = productState;
        product["price"] = price;
        product["contact"] = contact;


        const productSaved = await product.save();
        if (!productSaved) {
            return res.status(509).json({ error: "Error creating Product" });
        }
        return res.status(201).json(productSaved);
    } catch (error) {
        next(error);
    }
};

controller.findOneProductById = async (req, res, next) => {

    try {
        const { identifier } = req.params;

        const product = await Product.findOne({
            _id: identifier,
            hidden: false,
        })
            .populate("user", "username email _id")
            .populate("comments.user", "username email");

        if (!product) {
            return res.status(404).json({ error: "Post not found" });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        next(error);

    }
}

controller.findAllProducts = async (req, res, next) => {
    try {
        const product = await Product.find({ hidden: false })
            .populate("user", "username email _id")
            .populate("comments.user", "username email");

        return res.status(200).json({ product });
    } catch (error) {
        next(error);

    }
}


controller.saveCommentProducts = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const { content, _id: commentProducts} = req.body;
    const user = req.user;

    //Obtener el post {id,hidden}
    const product = await Product.findOne({ _id: identifier, hidden: false })
      .populate("user", "username email")
    //Verificar que el post exista
    if (!product) {
      return res.status(404).json({ error: "Post not found" });
    }
    //Buscar la existencia de un comentario previo en base a commentId
    let _comments = product["comments"];

    const prevIndex = _comments.findIndex((_c) => _c._id.equals(commentProducts));

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
    post["comments"] = _comments;

    const newPupilaje = await (
      await product.save()
    ).populate("comments.user", "username email");
    //Retornamos el post actualizado
    return res.status(200).json(newProduct);
  } catch (error) {
    next(error);
  }
};


module.exports = controller;
