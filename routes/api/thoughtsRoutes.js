const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtsById,
  newThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtsController");

//GET all thoughts
router.route("/").get(getAllThoughts).post(newThought);

//GET thoughts by Id, POST a thought, DEL a thought
router
  .route("/:id")
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

//POST reaction to thoughts
router.route("/:thoughtId/reactions").post(addReaction);

//DEL reactions on thoughts
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
