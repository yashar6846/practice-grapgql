const { mainCards, animals, categories } = require("../db");
const Animal = {
  category: (parent, args, ctx) => {
    return categories.find((category) => {
      return category.id === parent.cateqory;
    });
  },
};

module.exports = Animal;
