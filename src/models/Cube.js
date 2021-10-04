const uniqid = require('uniqid');

class Cube {
  static #cubes = [
    {
      id: 'skmadw88d1kdfmd',
      name: "Rubik's Cube",
      description:
        "The Rubik's Cube is a 3-D combination puzzle invented in 1974[2][3] by Hungarian sculptor and professor of architecture Ernő Rubik. Originally called the Magic Cube,[4] the puzzle was licensed by Rubik to be sold by Ideal Toy Corp. in 1980[5] via businessman Tibor Laczi and Seven Towns founder Tom Kremer.",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Rubiks_cube_solved.jpg/220px-Rubiks_cube_solved.jpg',
      difficulty: '3',
    },
  ];

  constructor(name, description, imageUrl, difficulty) {
    this.id = uniqid();
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
  }

  static get cubes() {
    return Cube.#cubes.slice();
  }

  static add(cube) {
    Cube.#cubes.push(cube);
  }
}

module.exports = Cube;
