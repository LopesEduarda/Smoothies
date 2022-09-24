CREATE TABLE smoothiesMenu (
	id VARCHAR(255) NOT NULL,
    name VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
    ingredients text not null
);

select * from smoothiesMenu;


CREATE TABLE customerSmoothieOrder (
	customer_name VARCHAR(255) NOT NULL,
	allergicIngredient VARCHAR(255) DEFAULT '',
	item_menu_name VARCHAR(255) NOT NULL,
    foreign key (item_menu_name) references smoothies(name)
);

select * from customerSmoothieOrder;