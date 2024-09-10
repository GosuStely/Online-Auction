const mysteryBoxes = [
    {
        productName: "Tech Gadget Box",
        items: ["Smartphone", "Wireless Earbuds", "Smartwatch", "VR Headset"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-10"),
        category: "Tech Products"
    },
    {
        productName: "Gaming Gear Box",
        items: ["Gaming Mouse", "Mechanical Keyboard", "Headset", "Gaming Controller"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-11"),
        category: "Gaming Products"
    },
    {
        productName: "Fitness Fanatic Box",
        items: ["Fitness Tracker", "Yoga Mat", "Resistance Bands", "Smart Water Bottle"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-12"),
        category: "Fitness Products"
    },
    {
        productName: "Home Essentials Box",
        items: ["Vacuum Cleaner", "Air Purifier", "LED Lamp", "Kitchen Tools"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-13"),
        category: "Home Comfort"
    },
    {
        productName: "Luxury Skincare Box",
        items: ["Moisturizer", "Serum", "Facial Mask", "Sunscreen"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-14"),
        category: "Skincare Products"
    },
    {
        productName: "Outdoor Adventure Box",
        items: ["Camping Tent", "Portable Grill", "Hiking Backpack", "Sleeping Bag"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-15"),
        category: "Outdoor/Adventure Gear"
    },
    {
        productName: "Gourmet Foodie Box",
        items: ["Artisan Chocolates", "Gourmet Cheese", "Exotic Spices", "Premium Coffee"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-16"),
        category: "Food & Gourmet"
    },
    {
        productName: "Fashion Accessories Box",
        items: ["Sunglasses", "Designer Watch", "Leather Wallet", "Silk Scarf"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-17"),
        category: "Fashion Accessories"
    },
    {
        productName: "Music Lovers Box",
        items: ["Bluetooth Speaker", "Vinyl Record", "Noise-Canceling Headphones", "Guitar Picks"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-18"),
        category: "Music Products"
    },
    {
        productName: "Art Supplies Box",
        items: ["Sketchbook", "Acrylic Paint Set", "Brushes", "Canvas"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-19"),
        category: "Art Supplies & Crafting"
    },
    {
        productName: "Pet Lovers Box",
        items: ["Pet Bed", "Chew Toys", "Collar", "Automatic Feeder"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-20"),
        category: "Pet Products"
    },
    {
        productName: "Travel Essentials Box",
        items: ["Travel Pillow", "Luggage Set", "Portable Charger", "Travel Guide"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-21"),
        category: "Travel Essentials"
    },
    {
        productName: "Eco-Friendly Box",
        items: ["Reusable Water Bottle", "Bamboo Utensils", "Eco Tote Bag", "Biodegradable Phone Case"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-22"),
        category: "Eco-Friendly Products"
    },
    {
        productName: "Collector's Box",
        items: ["Limited Edition Action Figure", "Comic Book", "Rare Coins", "Autographed Memorabilia"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-23"),
        category: "Collectibles"
    },
    {
        productName: "DIY Craft Box",
        items: ["Knitting Kit", "Woodworking Tools", "Paint-by-Numbers", "Candle-Making Supplies"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-24"),
        category: "Art Supplies & Crafting"
    },
    {
        productName: "Luxury Fashion Box",
        items: ["Designer Handbag", "Luxury Sunglasses", "Silk Tie", "Cashmere Sweater"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-25"),
        category: "Fashion Accessories"
    },

    // New items
    {
        productName: "Tech Gear Box",
        items: ["Smart Speaker", "Wireless Charger", "Smart Light Bulb", "Bluetooth Earbuds"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-26"),
        category: "Tech Products"
    },
    {
        productName: "Gaming Essentials Box",
        items: ["Gaming Headset", "Gaming Chair", "Mouse Pad", "Game Console Stand"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-27"),
        category: "Gaming Products"
    },
    {
        productName: "Fitness Gear Box",
        items: ["Exercise Bands", "Foam Roller", "Dumbbells", "Workout Apparel"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-28"),
        category: "Fitness Products"
    },
    {
        productName: "Home Comfort Box",
        items: ["Electric Blanket", "Essential Oil Diffuser", "Smart Thermostat", "Cozy Throw Blanket"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-29"),
        category: "Home Comfort"
    },
    {
        productName: "Skincare Luxury Box",
        items: ["Anti-Aging Cream", "Eye Serum", "Lip Balm", "Hydrating Mist"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-30"),
        category: "Skincare Products"
    },
    {
        productName: "Adventure Gear Box",
        items: ["Camping Lantern", "Multi-Tool", "Hiking Poles", "Waterproof Bag"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-01"),
        category: "Outdoor/Adventure Gear"
    },
    {
        productName: "Gourmet Delights Box",
        items: ["Artisan Olive Oil", "Handcrafted Pasta", "Gourmet Sea Salt", "Exotic Teas"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-02"),
        category: "Food & Gourmet"
    },
    {
        productName: "Fashion Trend Box",
        items: ["Stylish Belt", "Trendy Sunglasses", "Chic Hat", "Elegant Bracelet"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-03"),
        category: "Fashion Accessories"
    },
    {
        productName: "Music Collection Box",
        items: ["Bluetooth Earphones", "Music Box", "Guitar Strap", "Music Sheet Holder"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-04"),
        category: "Music Products"
    },
    {
        productName: "Creative Art Box",
        items: ["Watercolor Paint Set", "Sketching Pencils", "Drawing Pad", "Art Easel"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-05"),
        category: "Art Supplies & Crafting"
    },
    {
        productName: "Pet Comfort Box",
        items: ["Pet Blanket", "Interactive Toy", "Pet Grooming Kit", "Comfortable Bed"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-06"),
        category: "Pet Products"
    },
    {
        productName: "Travel Comfort Box",
        items: ["Travel Organizer", "Portable Water Bottle", "Travel Size Toiletries", "Luggage Tags"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-07"),
        category: "Travel Essentials"
    },
    {
        productName: "Eco-Conscious Box",
        items: ["Sustainable Straw Set", "Eco-Friendly Notebook", "Reusable Produce Bags", "Solar Charger"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-08"),
        category: "Eco-Friendly Products"
    },
    {
        productName: "Collectible Treasures Box",
        items: ["Vintage Stamps", "Rare Vinyl Records", "Collectible Figurines", "Historic Memorabilia"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-09"),
        category: "Collectibles"
    },
    {
        productName: "Crafting Supplies Box",
        items: ["Embroidery Kit", "Scrapbooking Materials", "Crafting Tools", "Bead Kit"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-10"),
        category: "Art Supplies & Crafting"
    },
    {
        productName: "High-End Fashion Box",
        items: ["Designer Sunglasses", "Luxury Belt", "Elegant Necklace", "Fashionable Clutch"],
        bids: [],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-11"),
        category: "Fashion Accessories"
    }
];
export default mysteryBoxes