DROP DATABASE IF EXISTS video_games_dev;

CREATE DATABASE video_games_dev;

\c video_games_dev;

CREATE TABLE video_games (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  release_year INT NOT NULL,
  category TEXT NOT NULL
);
