var char = 19
var ru_version = ["NMD_R1 ПРАЗДНИЧНАЯ ОБУВЬ","ОБУВЬ ULTRABOOST DNA X LEGO® COLORS","ОБУВЬ ULTRABOOST 4.0 DNA","DISNEY MICKEY FORTARUN ОБУВЬ","Футболка adidas x LEGO® VIDIYO ™","ДЖЕЙМС ХАРДЕН ТОМ. 5 ТОЛСТОВКА","ДЖЕЙМС ХАРДЕН ТОМ. 5 ТОЛСТОВКА","Толстовка с капюшоном из флиса с логотипом ESSENTIALS (ПЛЮС РАЗМЕР)","TIRO 21 TRACK PANTS","ГОЛУБАЯ ВЕРСИЯ ШАПКА","ADICOLOR МАНЖЕТА ВЯЗАНАЯ ШАПКА С ЯРКАМИ","ТРЕФОИЛЬНАЯ ШАПКА","РЮКЗАК MACRO","РЮКЗАК MACRO","РЮКЗАК ОТРЯДА","ФЕСТИВАЛЬНАЯ СУМКА ADICOLOR CLASSIC","Nike Air Force 1","Nike Air Max 90 Премиум","Nike Glide FlyEase Премиум","Кроссовки Nike Tiempo Legend 9 Elite FG","Челси Страйк","Nike Спортивная Одежда","Бостон Селтикс","Команда 31 на корте","Nike Dri-FIT Pro","Nike ACG Karst","Команда Академии Nike","Nike SB Heritage86","Серия А Рейс","Рейс Российской Премьер-лиги","Клуб Премьер-лиги","Поле Челси","купить сейчас"]
var arr = [
	{
		img: `https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/62d96641e799450fbbdfad0800cb06ed_9366/NMD_R1_Primeblue_Shoes_Black_GZ9256_01_standard.jpg`,
		title: `NMD_R1 PRIMEBLUE SHOES`,
		h2: 140, //$
		a: `https://www.adidas.com/us/nmd_r1-primeblue-shoes/GZ9256.html?cm_sp=SLOT-7.1-_-CP_%20XCAT_BACK%20TO%20SCHOOL_NLP_CP-PSC-XCAT-MENBACKTOSCHOOL-JUL21-FW21-_-PRODUCTSELECTIONCAROUSEL-PRODUCT-CARD-_-724711`,
		type: "shoes"
	},
	{
		img: `https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/Ultraboost_DNA_x_LEGO(r)_Colors_Shoes_White_FZ3983_01_standard.jpg`,
		title: `ULTRABOOST DNA X LEGO® COLORS SHOES`,
		h2: 180, //$
		a: `https://www.adidas.com/us/ultraboost-dna-x-lego-colors-shoes/FZ3983.html?cm_sp=SLOT-7.9-_-CP_%20XCAT_BACK%20TO%20SCHOOL_NLP_CP-PSC-XCAT-MENBACKTOSCHOOL-JUL21-FW21-_-PRODUCTSELECTIONCAROUSEL-PRODUCT-CARD-_-724711`,
		type: "shoes"
	},
	{
		img: `https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/08cb85d987914b2581a5acb800c38695_9366/Ultraboost_4.0_DNA_Shoes_Black_GW2289_01_standard.jpg`,
		title: `ULTRABOOST 4.0 DNA SHOES`,
		h2: 180, //$
		a: `https://www.adidas.com/us/ultraboost-4.0-dna-shoes/GW2289.html`,
		type: "shoes"
	},
	{
		img: `https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b9ae0f7b1aa04fe09a06ad2600cafe63_9366/Disney_Mickey_Fortarun_Shoes_Red_H68111_01_standard.jpg`,
		title: `DISNEY MICKEY FORTARUN SHOES`,
		h2: 55, //$
		a: `https://www.adidas.com/us/disney-mickey-fortarun-shoes/H68111.html?cm_sp=SLOT-10.2-_-CP_%20XCAT_BACK%20TO%20SCHOOL_NLP_CP-PSC-XCAT-GIRLSBACKTOSCHOOL-JUL21-FW21-_-PRODUCTSELECTIONCAROUSEL-PRODUCT-CARD-_-724714`,
		type: "shoes"
	},
	{
		img: `https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/50977267bf154e619076ad18010be304_9366/GU4279_01_laydown.jpg`,
		title: `adidas x LEGO® VIDIYO™ Tee Shirt`,
		h2: 40, //$
		a: `https://www.adidas.com/us/adidas-x-lego-vidiyo-tee-shirt/GU4279.html`,
		type: "clothes"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c67a212123204b9983c0ac7c0072cadd_9366/James_Harden_Vol._5_Hoodie_White_GM6874_01_laydown.jpg`,
		title: `JAMES HARDEN VOL. 5 HOODIE`,
		h2: 75, //$
		a: `https://www.adidas.com/us/james-harden-vol.-5-hoodie/GM6874.html`,
		type: "clothes"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/df5ffe6599a946378bc6abd1010934b2_9366/James_Harden_Vol._5_Hoodie_Blue_GI4504_01_laydown.jpg`,
		title: `JAMES HARDEN VOL. 5 HOODIE`,
		h2: 55, //$
		a: `https://www.adidas.com/us/james-harden-vol.-5-hoodie/GI4504.html`,
		type: "clothes"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/02ba0f49013742c8b97dad1a00e7589c_9366/Essentials_Logo_Fleece_Hoodie_(Plus_Size)_Pink_H42013_01_laydown.jpg`,
		title: `ESSENTIALS LOGO FLEECE HOODIE (PLUS SIZE)`,
		h2: 50, //$
		a: `https://www.adidas.com/us/essentials-logo-fleece-hoodie-plus-size/H42013.html`,
		type: "clothes"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1b9a1d3704d94db99503acaa011a8cfd_9366/Tiro_21_Track_Pants_Grey_GM7384_01_laydown.jpg`,
		title: `TIRO 21 TRACK PANTS`,
		h2: 40, //$
		a: `https://www.adidas.com/us/tiro-21-track-pants/GM7384.html`,
		type: "trousers"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6eb987b32e07412a8269ad1300eebbcf_9366/Blue_Version_Beanie_Orange_H25289_01_standard.jpg`,
		title: `BLUE VERSION BEANIE`,
		h2: 28, //$
		a: `https://www.adidas.com/us/blue-version-beanie/H25289.html?pr=product_rr&slot=8&rec=mt`,
		type: "hats"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/52c3c3548ac94c3482d9ad10011577af_9366/Adicolor_Cuff_Knit_Glitter_Beanie_Black_H35541_01_standard.jpg`,
		title: `ADICOLOR CUFF KNIT GLITTER BEANIE`,
		h2: 26, //$
		a: `https://www.adidas.com/us/adicolor-cuff-knit-glitter-beanie/H35541.html?pr=product_rr&slot=7&rec=mt`,
		type: "hats"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/24fb18ff5d764e02b2ebad430122fa9d_9366/Trefoil_Beanie_Grey_EY0781_01_standard.jpg`,
		title: `TREFOIL BEANIE`,
		h2: 22, //$
		a: `https://www.adidas.com/us/trefoil-beanie/EY0781.html?pr=product_rr&slot=14&rec=mt`,
		type: "hats"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/055bdd2099e6414cb28faca1002df395_9366/Macro_Backpack_Black_EX6723_01_standard.jpg`,
		title: `MACRO BACKPACK`,
		h2: 55, //$
		a: `https://www.adidas.com/us/macro-backpack/EX6723.html`,
		type: "bags"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ec7502b4562c4d6c9dbcac9f006c790b_9366/Macro_Backpack_Yellow_EX6724_01_standard.jpg`,
		title: `MACRO BACKPACK`,
		h2: 55, //$
		a: `https://www.adidas.com/us/macro-backpack/EX6724.html`,
		type: "bags"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/18a780742f0a45f1b043ad4200224bbb_9366/Squad_Backpack_Yellow_EX6964_01_standard.jpg`,
		title: `SQUAD BACKPACK`,
		h2: 55, //$
		a: `https://www.adidas.com/us/squad-backpack/EX6964.html?pr=product_rr&slot=4&rec=mt`,
		type: "bags"
	},
	{
		img: `https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/94dd5eef93b6443d8b7cad2801311442_9366/Adicolor_Classic_Festival_Bag_Red_H35580_01_standard.jpg`,
		title: `ADICOLOR CLASSIC FESTIVAL BAG`,
		h2: 22, //$
		a: `https://www.adidas.com/us/adicolor-classic-festival-bag/H35580.html?pr=product_rr&slot=11&rec=mt`,
		type: "bags"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f894945-9e34-4219-a16a-8e0e533cbb34/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-FTJRZ9.png`,
		title: `Nike Air Force 1`,
		h2: `9799₽`, 
		a: `https://www.nike.com/ru/t/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-FTJRZ9/DM9096-100`,
		type: "shoes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ea88a00-0694-4c72-a052-33f5aa2a90b9/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-premium-HzscVW.png`,
		title: `Nike Air Max 90 Premium`,
		h2: `13499₽`, //$
		a: `https://www.nike.com/ru/t/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-premium-HzscVW/DA1641-201`,
		type: "shoes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c1b6c32-3c94-452e-a9d9-112b1b37adfb/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-glide-flyease-premium-TkWMz9.png`,
		title: `Nike Glide FlyEase Premium`,
		h2: `10799₽`,
		a: `https://www.nike.com/ru/t/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-glide-flyease-premium-TkWMz9/DJ9816-400`,
		type: "shoes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/156ac02d-2dbc-4b56-94e3-1c79dbb65f0b/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D1%82%D1%81%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%B3%D1%80%D1%8B-%D0%BD%D0%B0-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%BE%D0%BC-%D0%B3%D1%80%D1%83%D0%BD%D1%82%D0%B5-tiempo-legend-9-elite-fg-td9BLW.png`,
		title: `Nike Tiempo Legend 9 Elite FG`,
		h2: `19999₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D1%82%D1%81%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%B3%D1%80%D1%8B-%D0%BD%D0%B0-%D1%82%D0%B2%D0%B5%D1%80%D0%B4%D0%BE%D0%BC-%D0%B3%D1%80%D1%83%D0%BD%D1%82%D0%B5-tiempo-legend-9-elite-fg-td9BLW/CZ8482-176`,
		type: "shoes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c4f37b6b-b6a5-43f9-8d01-ee7ed99685ca/%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D0%B0%D1%8F-%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D1%81-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%BC-%D1%80%D1%83%D0%BA%D0%B0%D0%B2%D0%BE%D0%BC-dri-fit-chelsea-fc-strike-wS9Mg2.png`,
		title: `Chelsea FC Strike`,
		h2: `3799₽`,
		a: `https://www.nike.com/ru/t/%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D0%B0%D1%8F-%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D1%81-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%BC-%D1%80%D1%83%D0%BA%D0%B0%D0%B2%D0%BE%D0%BC-dri-fit-chelsea-fc-strike-wS9Mg2/CW1840-015`,
		type: "clothes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d639e5c0-c34e-48e5-bd3c-a8bdd84d7047/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-sportswear-pL0cQd.png`,
		title: `Nike Sportswear`,
		h2: `1699₽`,
		a: `ttps://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-sportswear-pL0cQd/DJ6691-010ttps://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-sportswear-pL0cQd/DJ6691-010`,
		type: "clothes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4311de59-df9f-4a53-9433-c9567310cf17/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-jordan-%D0%BD%D0%B1%D0%B0-dri-fit-boston-celtics-fZN0dN.png`,
		title: `Boston Celtics`,
		h2: `2699₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-jordan-%D0%BD%D0%B1%D0%B0-dri-fit-boston-celtics-fZN0dN/DA6606-100`,
		type: "clothes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6eb742b4-1db4-42f0-bb15-b92e807238ea/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D1%81-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%BC-%D1%80%D1%83%D0%BA%D0%B0%D0%B2%D0%BE%D0%BC-%D0%BD%D0%B1%D0%B0-team-31-courtside-rFs0JH.png`,
		title: `Team 31 Courtside`,
		h2: `2999₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D1%81-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%BC-%D1%80%D1%83%D0%BA%D0%B0%D0%B2%D0%BE%D0%BC-%D0%BD%D0%B1%D0%B0-team-31-courtside-rFs0JH/DA6810-051`,
		type: "clothes"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b41b9590-7ea9-4c43-8fce-6602324653d5/%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-dri-fit-pro-q08jLg.png`,
		title: `Nike Dri-FIT Pro`,
		h2: `2299₽`,
		a: `https://www.nike.com/ru/t/%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D1%80%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D0%B3%D0%B0-dri-fit-pro-q08jLg/DC3625-461`,
		type: "hats"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/afac402c-8e57-4d8e-a6d3-faea47fd2455/%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA-acg-karst-k8dkzz.png`,
		title: `Nike ACG Karst`,
		h2: `10499₽`,
		a: `https://www.nike.com/ru/t/%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA-acg-karst-k8dkzz/CK7510-013`,
		type: "bags"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4ad9779d-8364-45f6-88d9-ab80deadd65c/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D1%83%D0%BC%D0%BA%D0%B0-%D0%B4%D0%B0%D1%84%D0%BB-academy-team-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80-W8LrSp.png`,
		title: `Nike Academy Team`,
		h2: `2899₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D1%83%D0%BC%D0%BA%D0%B0-%D0%B4%D0%B0%D1%84%D0%BB-academy-team-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80-W8LrSp/CU8089-657`,
		type: "bags"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4061604e-02d7-4243-a330-5455ad6fabac/%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BA%D0%B5%D0%B9%D1%82%D0%B1%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B3%D0%B0-sb-heritage86-CsZ2Gz.png`,
		title: `Nike SB Heritage86`,
		h2: `2599₽`,
		a: `https://www.nike.com/ru/t/%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BA%D0%B5%D0%B9%D1%82%D0%B1%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B3%D0%B0-sb-heritage86-CsZ2Gz/DJ6035-341`,
		type: "hats"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5cee9cd8-e93a-40ab-9ae3-d1392cadd823/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-serie-a-flight-npTZ4W.png`,
		title: `Serie A Flight`,
		h2: `12499₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-serie-a-flight-npTZ4W/DC2374-100`,
		type: "balls"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8289176b-dba8-4ee9-bf52-f59a509e8f18/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-russian-premier-league-flight-mB088x.png`,
		title: `Russian Premier League Flight`,
		h2: `12499₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-russian-premier-league-flight-mB088x/DC2362-100`,
		type: "balls"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21634306-245f-4089-ba4f-0eba46a8770c/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-premier-league-club-XjMZhk.png`,
		title: `Premier League Club`,
		h2: `3299₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-premier-league-club-XjMZhk/DC2400-100`,
		type: "balls"
	},
	{
		img: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1414860d-9f87-43fb-ae94-dc8cb6fe08b7/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-chelsea-fc-pitch-Cdg0Ld.png`,
		title: `Chelsea FC Pitch`,
		h2: `2299₽`,
		a: `https://www.nike.com/ru/t/%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%BC%D1%8F%D1%87-chelsea-fc-pitch-Cdg0Ld/DD1504-731`,
		type: "balls"
	}
]


function home(){
	$("#body").html("")
	for (var i = 0; arr.length > i; i++) {
		$("#body").append(`
		<div>
			<img src="${arr[i].img}" alt="">
			<h3>${(arr[i].title).length > char ? `<p title="${(arr[i].title)}">${(arr[i].title).substring(0, char)}...</p>` : (arr[i].title)}</h3>
			<h2>${arr[i].h2}</h2>
			<button><a href="${arr[i].a}" target="blank">Buy Now</a></button>
		</div>
	`)	
	}
}
home()


function filter(type2){
	position = type2
	$("#body").html("")
	for (var i = 0; arr.length > i; i++) {
		if (arr[i].type.trim() == type2.toLowerCase().trim() && lang != "RU") {
			$("#body").append(`
				<div>
				<img src="${arr[i].img}" alt="">
				<h3>${(arr[i].title).length > 19 ? `<p title="${(arr[i].title)}">${(arr[i].title).substring(0, 19)}...</p>` : (arr[i].title)}</h3>
				<h2>${arr[i].h2}</h2>
				<button><a href="${arr[i].a}" target="blank">Buy Now</a></button>
			</div>
			`)
		}
		else if(arr[i].type.trim() == type2.toLowerCase().trim()){
			$("#body").append(`
				<div>
					<img src="${arr[i].img}" alt="">
					<h3>${(ru_version[i]).length > 19 ? `<p title="${(ru_version[i])}">${(ru_version[i]).substring(0, 19)}...</p>` : (ru_version[i])}</h3>
					<h2>${arr[i].h2}</h2>
					<button><a href="${arr[i].a}" target="blank">${ru_version[ru_version.length - 1]}</a></button>
				</div>
			`)	
			}
	}
}


var lang = "EN"
var position = "home"

let het = document.getElementById("het")

var x = 1
function toggle(){
	x *= -1
	$("#lang").css(`display`, `${x == -1 ? "inline" : "none"}`)
	$("#arandzinimg").css(`transform`,`rotate(${x == -1 ? 0 : 180}deg)`)
	$("#lang").html(lang == "EN" ?"RU":"EN")
	$("#lang2").html(lang != "EN" ?"RU":"EN")
}
function ru(){
	$("#body").html("")
		$("#sunka").html("Сумки")
		$("#Koshik").html("Обувь")
		$("#shor").html("Одежда")
		$("#glxark").html("Головные уборы")
		$("#gndak").html("Мячи")
		$("#tabat1").html("Штаны")
		for (var i = 0; arr.length > i; i++) {
		$("#body").append(`
			<div>
				<img src="${arr[i].img}" alt="">
				<h3>${(ru_version[i]).length > char ? `<p title="${(ru_version[i])}">${(ru_version[i]).substring(0, char)}...</p>` : (ru_version[i])}</h3>
				<h2>${arr[i].h2}</h2>
				<button><a href="${arr[i].a}" target="blank">${ru_version[ru_version.length - 1]}</a></button>
			</div>
		`)	
		}
}
function lezunpoxel() {
	lang = lang == "EN" ?"RU":"EN"
	toggle()
	if (lang == "RU") {
		ru()
	}
	else{
		$("#Koshik").html("Shoes")
		$("#shor").html("Clothes")
		$("#glxark").html("Hats")
		$("#sunka").html('Bags')
		$("#gndak").html("Balls")
		$("#tabat1").html("Trousers")
		$("#body button").html("Buy Now")
		home()
	}
	if (position != "home") {
		filter(position)
	}
}
function bacelmenu(x) {
	$(".arandzin_h2").css({"display" : "block", "right": "50%"})
	x == 1 ? $(".arandzin_h2").css({"transition" : "2s"}):""
	$("#bacel-menu").css({"display" : "block", "width" : "100%"})
	
	$("#Koshik").css({"top": "15%"})
	$("#shor").css({"top": "30%"})
	$("#glxark").css({"top": "45%"})
	$("#sunka").css({"top": "60%"})
	$("#gndak").css({"top": "75%"})
	$("#tabat1").css({"top": "90%"})
	$("#het").css({"display": "block"})
}
bacelmenu(2)
het2()
function het2() {
	$("#bacel-menu").css({"width" : "0%"})
	$(".arandzin_h2").css({"right" : "-15%"})
	setTimeout(1000, () =>{$("#bacel-menu").css({"display" : "none"}); $(".arandzin_h2").css({"display" : "none"})})
	$("#het").css({"display": "none"})
}

window.addEventListener("resize", (event) => {
	if (window.innerWidth <= "1233" && window.innerWidth > "1083"){
		char = 16
		position == "home"? home() :filter(eval(position))
	}
	else if(window.innerWidth <= "1083" && window.innerWidth > "934"){
		char = 13
		position == "home"? home() :filter(eval(position))
	}
	else if(window.innerWidth <= "934" && window.innerWidth > "724"){
		char = 10
		position == "home"? home() :filter(eval(position))
	}
	else if(window.innerWidth <= "724" && window.innerWidth > "0"){
		char = 9
		position == "home"? home() :filter(eval(position))
	} 
});