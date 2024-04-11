module.exports = {
  async up(db) {
    db.createCollection("users");
  },

  async down(db, client) {
    db.collection("users").drop();
  },
};
