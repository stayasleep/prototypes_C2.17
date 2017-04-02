Place your queries below
-- use select to find one user
SELECT * FROM `users` WHERE `name`= 'oreo'

-- use update to change one user's email
UPDATE `users` SET `email`='neworeo@lfz.com' WHERE `name`='oreo'

-- insert one new user
INSERT INTO `users` SET `name`='old greg', `status`='graduated', `DOB`='1944-01-01', `created`='2017-04-01', `email`='oldgreg@lfz.com', `password`=sha1('oldgreggg')

-- delete the user you just created
DELETE FROM `users` WHERE `name`='old greg'

-- create 10 items
INSERT INTO `c2.17db`.`todo_items` (`id`, `title`, `details`, `timestamp`, `user_id`) VALUES (NULL, 'star wars1', 'skip it', CURRENT_TIMESTAMP, 'mov1');

-- select all of user of your choice
SELECT `id`, `title`, `details`, `timestamp`, `user_id` FROM `todo_items` WHERE `id`='1'

-- insert a new todo_item by that user
ALTER TABLE `todo_items` ADD `useless` INT(11) NOT NULL AFTER `user_id`;
UPDATE `todo_items` SET `useless`='2' WHERE `user_id`='mov1';

-- delete a todo_item by that user
DELETE FROM `todo_items` WHERE `user_id`='mov1'


-- perform a select to get all info by a user's id
ALTER TABLE `todo_items` ADD `useless` INT(11) NOT NULL AFTER `user_id`;

