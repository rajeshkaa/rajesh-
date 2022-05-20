const products = [
    {
        productId : 4,
        productName : "Nike ",
        productPrice : 622.00,
        oldPrice : 700.00,
        productInfo : "This is very big product",
        productCategory : "Running shoe",
        productRating : 4,
        productImage : "https://images-na.ssl-images-amazon.com/images/I/81ntddef-%2BL._AC_UY395_.jpg"
    },
    {
        productId : 1,
        productName : "Puma  ",
        productPrice : 499.00,
        oldPrice : 699.00,
        productInfo : "Best product to ude ",
        productCategory : "Running shoe",
        productRating : 5,
        productImage : "https://i.ebayimg.com/images/g/MqgAAOSwnQFbU94G/s-l300.jpg"
    },
    {
        productId : 10,
        productName : "Crocks ",
        productPrice : 999.00,
        oldPrice : 799.00,
        productInfo : "Now way days every one using  ",
        productCategory : "Style to ware",
        productRating : 5,
        productImage : "https://media.gq.com/photos/5bdc761e6494723a32a2089d/master/w_2000,h_1333,c_limit/Post-Malone-Sold-Out-Crocs-GQ02-11022018_3x2.jpg"
    },
    {
        productId : "#12hgxhabk",
        productName : "BAIDLY ",
        productPrice : 799.00,
        oldPrice : 599.00,
        productInfo : "Now way days every one using  ",
        productCategory : "Style to ware",
        productRating : 4,
        productImage : "data:image/jpeg;base64,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" 
       },
       {
        productId : "#123A",
        productName : "Hida Traders ",
        productPrice : 699.00,
        oldPrice : 1499.00,
        productInfo : "Offering Brown Formal Mens Shoes ",
        productCategory : "Formal show",
        productRating : 4,
        productImage : "https://5.imimg.com/data5/HN/AG/MY-61720592/mens-formal-shoes-500x500.jpg" 
       },

       {
        productId : "#123asddfgk",
        productName : "Ample Wings Overseas",
        productPrice : 799.00,
        oldPrice : 999.00,
        
        productCategory : "Pure Leather",
        productRating : 2,
        productImage : "https://5.imimg.com/data5/BE/JT/MY-25691461/hush-berry-designer-mens-shoes-pure-leather-500x500.jpg" 
       },

       {
        productId : "#123acshjg",
        productName : "Clarks wallabee ",
        productPrice : 1499.00,
        oldPrice : 999.00,
        
        productCategory : "Leather lace shoe",
        productRating : 4,
        productImage : "https://www.clarks.in/media/product/79/68/1.jpg" 
       },

       {
        productId : "#123nbabnvux",
        productName : "Skechers",
        productPrice : 799.00,
        oldPrice : 999.00,

        productCategory : "stylish flip crocks",
        productRating : 5,
        productImage : "https://assets.ajio.com/medias/sys_master/root/hb7/h1e/13060785569822/-1117Wx1400H-460322253-blackwhite-MODEL.jpg" 
       },

       {
        productId : "#123abcacshgd",
        productName : "Samule windsore US",
        productPrice : 499.00,
        oldPrice : 999.00,
        
        productCategory : "Formal shoe ",
        productRating : 3,
        productImage : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-shoes-1610418585.jpg?crop=0.502xw:1.00xh;0.282xw,0&resize=640:*" 
       },

       {
        productId : "#12hgxhabk",
        productName : "Samule windsore US",
        productPrice : 999.00,
        oldPrice : 1599.00,
        productInfo : "Formal stylish shoe  ",
        productCategory : "Style to ware",
        productRating : 5,
        productImage : "https://www.samuel-windsor.com/images/99/BV1BV3.jpg" 
       },

       {
        productId : "#123nbuy42va",
        productName : "Amawei ",
        productPrice : 499.00,
        oldPrice : 999.00,

        productCategory : "Woolen Fabric  Anti-Slip",
        productRating : 4,
        productImage : "https://images-na.ssl-images-amazon.com/images/I/71GxMP7Y4nL._AC_UY500_.jpg" 
       },

       {
        productId : "#12jbsl5qt",
        productName : "Istock ",
        productPrice : 999.00,
        oldPrice : 1599.00,
        productCategory : "Party Ware Loffers",
        productRating : 4,
        productImage : "https://media.istockphoto.com/photos/mens-slippers-picture-id172385152" 
       },

       {
        productId : "#12ghacx51q",
        productName : "Relexo ",
        productPrice : 399.00,
        oldPrice : 799.00,

        productCategory : "Slippers",
       productRating : 2,
        productImage : "https://static2.e-baqala.com/18801-large_default/relaxo-sparx-mens-slippers-sfg204-1pair.jpg" 
       },

       {
        productId : "#12142e5drycx",
        productName : "Adidas",
        productPrice : 999.00,
        oldPrice : 1999.00,

        productCategory : "Adidas Original",
        productRating : 5,
        productImage : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13442194/2021/3/31/5f3ff7f8-48c9-48f4-a551-96f4246664821617174538885-ADIDAS-Originals-Men-Flip-Flops-5911617174538434-1.jpg" 
       },





];

export default products;