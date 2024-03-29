const { Users, Thoughts } = require("../models");

const usersControllers = {
  //To get all users
  async getAllUsers(req, res) {
    try {
      const dbUserData = await Users.find()
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .select("-__v");
      res.json(dbUserData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  //To get user and user data by Id
  async getUserById({ params }, res) {
    try {
      const dbUserData = await Users.findOne({ _id: params.id })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .populate({
          path: "friends",
          select: "-__v",
        })
        .select("-__v");

      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }

      res.json * dbUserData;
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  //To create new user
  async createUser({ body }, res) {
    try {
      const dbUserData = await Users.create(body);
      res.json(dbUserData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  //To update a user by Id
  async updateUser({ params, body }, res) {
    try {
      const dbUserData = await Users.findOneAndUpdate(
        { _id: params.id },
        body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }

      res.json(dbUserData);
    } catch (err) {
      console.error(err);
      res.statsu(400).json(err);
    }
  },

  //To add friend to users friend list
  async addFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $addToSet: { friends: params.friendId } },
        { new: true }
      );

      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }

      res.json(dbUserData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  //To remove a friend from users list
  async removeFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );

      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }

      res.json(dbUserData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  //To delete a user by Id

  async deleteUser({ params }, res) {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: params.id });

      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }

      await Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });

      res.json({ message: "User and thoughts deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },
};

module.exports = usersControllers;
