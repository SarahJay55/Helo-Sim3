CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    img TEXT,
    auth_id TEXT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender VARCHAR(50),
    hair_color VARCHAR(50),
    eye_color VARCHAR(50),
    hobby VARCHAR(50),
    birth_day INTEGER,
    birth_month VARCHAR(50),
    birth_year INTEGER,
    friends_first VARCHAR(50),
    friends_last VARCHAR(50)
);