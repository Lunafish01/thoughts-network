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

router.route("/").get(getAllThoughts).post(newThought);

router
  .route("/:id")
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
