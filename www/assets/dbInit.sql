CREATE TABLE sortfilter(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sort_type VARCHAR(255) NULL,
    sort_price_value_low INTEGER,
    sort_price_value_high INTEGER,
    filter_value VARCHAR(255) NULL
);

INSERT INTO sortfilter(
        sort_type,
        sort_price_value_low,
        sort_price_value_high,
        filter_value)
    VALUES ('range', 0, 99999999, '');