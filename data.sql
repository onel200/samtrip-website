CREATE DATABASE bus_tracker;
USE bus_tracker;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    department_id VARCHAR(100),
    name VARCHAR(100),
    bus_no VARCHAR(50),
    password VARCHAR(255),
    search_query VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

