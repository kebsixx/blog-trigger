CREATE TRIGGER after_update_product
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
    INSERT INTO product_log (product_id, old_price, new_price, update_time)
    VALUES (NEW.product_id, OLD.price, NEW.price, NOW());
END;