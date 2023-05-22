-- Create the database
CREATE DATABASE ArrowSearchEngine;

-- Use the database
USE ArrowSearchEngine;

-- drop database ArrowSearchEngine;
-- drop table search_results;

CREATE TABLE search_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    query VARCHAR(255),
    title VARCHAR(255),
    url VARCHAR(255),
    snippet TEXT,
    source VARCHAR(255),
    priority INT,
    blocked BOOL
);

select * from search_results;

-- select * from results where query='arrow';
