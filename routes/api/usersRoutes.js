const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/usersController");

//GET all users
router.route("/").get(getAllUsers).post(createUser);

//GET users by Id, POST a user, DEL a user
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//POST a friend to users friends list
router.route("/:userId/friends/:friendsId").post(addFriend);

//DEL user from friends list
router.route("/:userId/friends/:friendsId").delete(removeFriend);

module.exports = router;
