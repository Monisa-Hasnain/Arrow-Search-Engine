-- Create the database
CREATE DATABASE ArrowSearchEngine;

-- Use the database
USE ArrowSearchEngine;

-- drop database ArrowSearchEngine;

-- Create the page table with columns.
CREATE TABLE page (
    id SERIAL PRIMARY KEY,
    URL VARCHAR(255) UNIQUE not null,
    title VARCHAR(255) DEFAULT 'Unknown',
    publishing_date TIMESTAMP,
    author VARCHAR(255) DEFAULT 'Unknown',
    descriptions TEXT,
    content TEXT,
    keywords VARCHAR(255),
    header_tags TEXT,
    image VARCHAR(255),
    video VARCHAR(255),
    metadata TEXT,
    statusNo INT NOT NULL,
    PageRank FLOAT DEFAULT null,
    status_flag  ENUM('blocked', 'unblocked') DEFAULT 'unblocked',
    inbound VARCHAR(255),
    outbound VARCHAR(255)
);

INSERT INTO page (URL, title, publishing_date, author, descriptions, content, keywords, header_tags, image, video, metadata, statusNo, PageRank, status_flag, inbound, outbound)
VALUES ('http://127.0.0.1:5000', 'Example', '2023-05-05 10:30:00', 'John Doe', 'Example description', 'Example content', 'example, keywords', 'Example header tags', 'example.jpg', 'example.mp4', 'Example metadata', 1, 0.5, 'unblocked', 'http://example.com/inbound', 'http://example.com/outbound'),
 ('http://127.0.0.1:5000/1', 'Example1', '2023-05-05 10:30:00', 'John Doe', 'Example description1', 'Example content1', 'example, keywords', 'Example header tags', 'example.jpg', 'example.mp4', 'Example metadata', 1, 0.5, 'unblocked', 'http://example.com/inbound', 'http://example.com/outbound'),
 ('http://127.0.0.1:5000/2', 'Example2', '2023-05-05 10:30:00', 'John Doe', 'Example description2', 'Example content2', 'example, keywords', 'Example header tags', 'example.jpg', 'example.mp4', 'Example metadata', 1, 0.5, 'unblocked', 'http://example.com/inbound', 'http://example.com/outbound'),
 ('http://127.0.0.1:5000/3', 'Example3', '2023-05-05 10:30:00', 'John Doe', 'Example description3', 'Example content3', 'example, keywords', 'Example header tags', 'example.jpg', 'example.mp4', 'Example metadata', 1, 0.5, 'unblocked', 'http://example.com/inbound', 'http://example.com/outbound'),
 ('http://127.0.0.1:5000/4', 'Example4', '2023-05-05 10:30:00', 'John Doe', 'Example description4', 'Example content4', 'example, keywords', 'Example header tags', 'example.jpg', 'example.mp4', 'Example metadata', 1, 0.5, 'unblocked', 'http://example.com/inbound', 'http://example.com/outbound');

select * from page;