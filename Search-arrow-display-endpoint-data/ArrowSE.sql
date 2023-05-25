-- Create the database
CREATE DATABASE ArrowSearchEngine;

-- Use the database
USE ArrowSearchEngine;

-- drop database ArrowSearchEngine;

-- drop table results;

CREATE TABLE search_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    query VARCHAR(255),
    title VARCHAR(255),
    url VARCHAR(255),
    snippet TEXT,
    source VARCHAR(255),
    image_urls TEXT,
    video_urls TEXT,
    priority INT,
    blocked BOOL
);

-- select * from results;
-- select * from results where query='arrow';
