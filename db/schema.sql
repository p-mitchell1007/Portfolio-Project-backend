DROP DATABASE IF EXISTS video_games_dev;

CREATE DATABASE video_games_dev;

\c video_games_dev;

DROP TABLE IF EXISTS video_games

CREATE TABLE video_games (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  release_year INT NOT NULL,
  category TEXT NOT NULL,
  description TEXT 
);
