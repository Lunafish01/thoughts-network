const { Thoughts, Users } = require("../models");

const thoughtsController = {
  //To create a new thought
  async newThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);

      const updatedUser = await Users.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //To get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find();
      res.json(thoughts);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  //To get thought by Id
  async getThoughtsById({ params }, res) {
    try {
      console.log("Thoughts Id from Params:", params.id);
      const thought = await Thoughts.findById(params.id);
      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this Id" });
      }
      res.json(thought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  //To update a thought
  async updateThought({ params, body }, res) {
    try {
      const updatedThought = await Thoughts.findByIdAndUpdate(params.id, body, {
        new: true,
      });
      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this Id" });
      }
      res.json(updatedThought);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  //To delete a thought
  async deleteThought({ params }, res) {
    try {
      const thought = await Thought.findByIdAndRemove(params.id);
      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this Id" });
      }
      await Users.findByIdAndUpdate(thought.userId, {
        $pull: { thoughts: thought._id },
      });
      res.json({ message: "Thought deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },
};

module.exports = thoughtsController;
