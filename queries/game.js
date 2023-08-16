const db = require("../db/dbConfig.js");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM video_games");
    return allGames;
  } catch (error) {
    return error;
  }
};

const getGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM video_games WHERE id = $1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

const createGame = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO video_games (name, release_year, category, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [game.name, game.release_year, game.category, game.description]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one(
      "DELETE FROM video_games WHERE id = $1 RETURNING *",
      id
    );
    return deletedGame;
  } catch (error) {
    return error;
  }
};

const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.one(
      "UPDATE video_games SET name = $1, release_year = $2, category = $3, description = $4 WHERE id = $5 RETURNING *",
      [game.name, game.release_year, game.category, game.description, id]
    );
    return updatedGame;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
};

