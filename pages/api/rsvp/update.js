import firebase from "../../../config/fire-config";

export default (req, res) => {
  var body = req.body;

  firebase
    .database()
    .ref("users/" + body.key)
    .set(body.value)
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(() => {
      res.status(500);
    });
};
