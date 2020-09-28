import firebase from "../../../config/fire-config";
export default (req, res) => {
  var usersRef = firebase
    .database()
    .ref("/users")
    .orderByChild("code")
    .equalTo(req.query.code)
    .once("value")
    .then(function(snapshot) {
      let object = snapshot.val();
      if (Object.keys(object).length > 0) {
        const key = Object.keys(object)[0];
        let value = object[key];
        value.key = key;
        value.isValid = true;
        res.status(200).json(value);
      } else {
        res.status(200).json({ key: null });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
};
