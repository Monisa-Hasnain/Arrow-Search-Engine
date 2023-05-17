-- Create the database
CREATE DATABASE ArrowSearchEngine;

-- Use the database
USE ArrowSearchEngine;

-- drop database ArrowSearchEngine;

-- drop table results;

CREATE TABLE IF NOT EXISTS results (
                id INT AUTO_INCREMENT PRIMARY KEY,
                query VARCHAR(255),
                ranks INT,
                link VARCHAR(255),
                title VARCHAR(255),
                snippet TEXT,
                html TEXT,
                created DATETIME
            )

-- select * from results;
-- select * from results where query='arrow';
