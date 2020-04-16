CREATE TABLE `tmp` SELECT id, title, img_src, img_down, anons, subtitle, turn, article_id FROM `banners` GROUP BY (article_id);

DROP TABLE `tmp`;

ALTER TABLE `tmp` RENAME TO `banners`;