const mysteryBoxes = [
    {
        productName: "Tech Gadget Box",
        items: ["Smartphone", "Wireless Earbuds", "Smartwatch", "VR Headset"],
        bids: [
            { amount: 50, name: "JohnD" },
            { amount: 75, name: "TechLover99" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-10"),
        category: "Tech Products",
        description: "A collection of sleek devices that keep you connected and enhance your digital lifestyle, perfect for tech enthusiasts."
    },
    {
        productName: "Gaming Gear Box",
        items: ["Gaming Mouse", "Mechanical Keyboard", "Headset", "Gaming Controller"],
        bids: [
            { amount: 45, name: "GamerGal" },
            { amount: 70, name: "ProPlayer23" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-11"),
        category: "Gaming Products",
        description: "A set of precision tools for the ultimate gaming experience, designed to give you a competitive edge in every match."
    },
    {
        productName: "Fitness Fanatic Box",
        items: ["Fitness Tracker", "Yoga Mat", "Resistance Bands", "Smart Water Bottle"],
        bids: [
            { amount: 35, name: "FitGuru" },
            { amount: 60, name: "YogaMaster88" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-12"),
        category: "Fitness Products",
        description: "Whether you’re a yoga lover or a fitness enthusiast, this box contains everything you need to stay active and hydrated."
    },
    {
        productName: "Home Essentials Box",
        items: ["Vacuum Cleaner", "Air Purifier", "LED Lamp", "Kitchen Tools"],
        bids: [
            { amount: 55, name: "HomeLover" },
            { amount: 80, name: "CleanFreak42" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-13"),
        category: "Home Comfort",
        description: "Create a clean and comfortable living space with these must-have tools for every modern home."
    },
    {
        productName: "Luxury Skincare Box",
        items: ["Moisturizer", "Serum", "Facial Mask", "Sunscreen"],
        bids: [
            { amount: 65, name: "GlowUp" },
            { amount: 90, name: "SkinQueen" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-14"),
        category: "Skincare Products",
        description: "Pamper yourself with high-end skincare products designed to keep your skin radiant and protected."
    },
    {
        productName: "Outdoor Adventure Box",
        items: ["Camping Tent", "Portable Grill", "Hiking Backpack", "Sleeping Bag"],
        bids: [
            { amount: 50, name: "TrailBlazer" },
            { amount: 85, name: "OutdoorGeek" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-15"),
        category: "Outdoor / Adventure Gear",
        description: "Gear up for your next adventure with essential tools for outdoor exploration, perfect for camping and hiking."
    },
    {
        productName: "Gourmet Foodie Box",
        items: ["Artisan Chocolates", "Gourmet Cheese", "Exotic Spices", "Premium Coffee"],
        bids: [
            { amount: 40, name: "FoodieFan" },
            { amount: 70, name: "ChefMike" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-16"),
        category: "Food & Gourmet",
        description: "Indulge in an array of gourmet treats that bring rich flavors and luxurious tastes from around the world."
    },
    {
        productName: "Fashion Accessories Box",
        items: ["Sunglasses", "Designer Watch", "Leather Wallet", "Silk Scarf"],
        bids: [
            { amount: 60, name: "StyleIcon" },
            { amount: 95, name: "ChicDiva" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-17"),
        category: "Fashion Accessories",
        description: "A chic assortment of accessories that elevate your wardrobe with timeless elegance and modern flair."
    },
    {
        productName: "Music Lovers Box",
        items: ["Bluetooth Speaker", "Vinyl Record", "Noise-Canceling Headphones", "Guitar Picks"],
        bids: [
            { amount: 35, name: "MelodyMaker" },
            { amount: 65, name: "SoundWave" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-18"),
        category: "Music Products",
        description: "A perfect set for the music enthusiast, whether you’re a fan of vinyl or a lover of crisp, immersive sound."
    },
    {
        productName: "Art Supplies Box",
        items: ["Sketchbook", "Acrylic Paint Set", "Brushes", "Canvas"],
        bids: [
            { amount: 30, name: "CreativeSoul" },
            { amount: 55, name: "PainterExtraordinaire" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-19"),
        category: "Art Supplies & Crafting",
        description: "Unleash your inner artist with this comprehensive set of supplies that will help bring your creative visions to life."
    },
    {
        productName: "Pet Lovers Box",
        items: ["Pet Bed", "Chew Toys", "Collar", "Automatic Feeder"],
        bids: [
            { amount: 40, name: "FurryFriend" },
            { amount: 65, name: "PetParent123" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-20"),
        category: "Pet Products",
        description: "Give your furry friend the comfort, fun, and care they deserve with these carefully selected pet essentials."
    },
    {
        productName: "Travel Essentials Box",
        items: ["Travel Pillow", "Luggage Set", "Portable Charger", "Travel Guide"],
        bids: [
            { amount: 45, name: "GlobeTrotter" },
            { amount: 75, name: "Nomad101" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-21"),
        category: "Travel Essentials",
        description: "Make your journeys more comfortable and organized with these travel necessities, designed for the frequent traveler."
    },
    {
        productName: "Eco-Friendly Box",
        items: ["Reusable Water Bottle", "Bamboo Utensils", "Eco Tote Bag", "Biodegradable Phone Case"],
        bids: [
            { amount: 35, name: "EcoWarrior" },
            { amount: 55, name: "GreenLiving" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-22"),
        category: "Eco-Friendly Products",
        description: "Live sustainably with these eco-conscious products designed to reduce your environmental footprint."
    },
    {
        productName: "Collector's Box",
        items: ["Limited Edition Action Figure", "Comic Book", "Rare Coins", "Autographed Memorabilia"],
        bids: [
            { amount: 70, name: "RareFinds" },
            { amount: 100, name: "CollectorKing" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-23"),
        category: "Collectibles",
        description: "A treasure trove of rare and valuable items that any serious collector would be thrilled to add to their collection."
    },
    {
        productName: "DIY Craft Box",
        items: ["Knitting Kit", "Woodworking Tools", "Paint-by-Numbers", "Candle-Making Supplies"],
        bids: [
            { amount: 30, name: "CraftMaster" },
            { amount: 55, name: "HandmadeJoy" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-24"),
        category: "Art Supplies & Crafting",
        description: "Discover your creative side with a variety of DIY projects that are perfect for hands-on crafting enthusiasts."
    },
    {
        productName: "Luxury Fashion Box",
        items: ["Designer Handbag", "Luxury Sunglasses", "Silk Tie", "Cashmere Sweater"],
        bids: [
            { amount: 80, name: "StyleGuru" },
            { amount: 110, name: "LuxuryDiva" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-25"),
        category: "Fashion Accessories",
        description: "Elevate your style with these luxurious fashion pieces that combine sophistication and timeless elegance."
    },
    {
        productName: "Tech Gear Box",
        items: ["Smart Speaker", "Wireless Charger", "Smart Light Bulb", "Bluetooth Earbuds"],
        bids: [
            { amount: 50, name: "TechSavvy" },
            { amount: 75, name: "GadgetGuru" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-26"),
        category: "Tech Products",
        description: "Stay connected and automate your space with this selection of cutting-edge tech gadgets."
    },
    {
        productName: "Gaming Essentials Box",
        items: ["Gaming Headset", "Gaming Chair", "Mouse Pad", "Game Console Stand"],
        bids: [
            { amount: 40, name: "ProGamer" },
            { amount: 65, name: "GameNerd" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-27"),
        category: "Gaming Products",
        description: "Upgrade your gaming setup with this collection of essentials that ensure comfort and enhanced gameplay."
    },
    {
        productName: "Fitness Gear Box",
        items: ["Exercise Bands", "Foam Roller", "Dumbbells", "Workout Apparel"],
        bids: [
            { amount: 35, name: "FitLife" },
            { amount: 60, name: "GymRat" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-28"),
        category: "Fitness Products",
        description: "Build strength, flexibility, and endurance with these fitness tools that help you stay in peak condition."
    },
    {
        productName: "Home Comfort Box",
        items: ["Electric Blanket", "Essential Oil Diffuser", "Smart Thermostat", "Cozy Throw Blanket"],
        bids: [
            { amount: 50, name: "SnuggleMaster" },
            { amount: 75, name: "HomeSweetHome" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-29"),
        category: "Home Comfort",
        description: "Enhance the coziness of your living space with these items designed for maximum comfort and relaxation."
    },
    {
        productName: "Skincare Luxury Box",
        items: ["Anti-Aging Cream", "Eye Serum", "Lip Balm", "Hydrating Mist"],
        bids: [
            { amount: 60, name: "BeautyGuru" },
            { amount: 90, name: "SkinCareQueen" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-11-30"),
        category: "Skincare Products",
        description: "Achieve glowing skin with these luxury skincare products that cater to all your hydration and anti-aging needs."
    },
    {
        productName: "Adventure Gear Box",
        items: ["Camping Lantern", "Multi-Tool", "Hiking Poles", "Waterproof Bag"],
        bids: [
            { amount: 45, name: "Wanderlust" },
            { amount: 70, name: "TrailBlazer" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-01"),
        category: "Outdoor / Adventure Gear",
        description: "Be prepared for any outdoor adventure with these durable and versatile tools, perfect for exploring the wild."
    },
    {
        productName: "Gourmet Delights Box",
        items: ["Artisan Olive Oil", "Handcrafted Pasta", "Gourmet Sea Salt", "Exotic Teas"],
        bids: [
            { amount: 40, name: "FoodieGal" },
            { amount: 65, name: "ChefExtraordinaire" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-02"),
        category: "Food & Gourmet",
        description: "Elevate your culinary experience with these gourmet ingredients that bring the flavors of the world to your kitchen."
    },
    {
        productName: "Fashion Trend Box",
        items: ["Stylish Belt", "Trendy Sunglasses", "Chic Hat", "Elegant Bracelet"],
        bids: [
            { amount: 55, name: "Trendsetter" },
            { amount: 80, name: "Fashionista" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-03"),
        category: "Fashion Accessories",
        description: "Keep up with the latest fashion trends with these stylish accessories that add a touch of elegance to any outfit."
    },
    {
        productName: "Music Collection Box",
        items: ["Bluetooth Earphones", "Music Box", "Guitar Strap", "Music Sheet Holder"],
        bids: [
            { amount: 35, name: "MusicLover" },
            { amount: 55, name: "TuneMaster" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-04"),
        category: "Music Products",
        description: "A variety of music-related items perfect for collectors and those who enjoy their music on-the-go or at home."
    },
    {
        productName: "Creative Art Box",
        items: ["Watercolor Paint Set", "Sketching Pencils", "Drawing Pad", "Art Easel"],
        bids: [
            { amount: 30, name: "ArtisticMind" },
            { amount: 50, name: "Painter101" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-05"),
        category: "Art Supplies & Crafting",
        description: "Ideal for artists of all levels, this set is filled with creative tools that bring your imagination to life."
    },
    {
        productName: "Pet Comfort Box",
        items: ["Pet Blanket", "Interactive Toy", "Pet Grooming Kit", "Comfortable Bed"],
        bids: [
            { amount: 40, name: "PetLover" },
            { amount: 65, name: "FurryFriendFan" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-06"),
        category: "Pet Products",
        description: "Pamper your pets with this selection of comfort and entertainment products that keep them happy and well-groomed."
    },
    {
        productName: "Travel Comfort Box",
        items: ["Travel Organizer", "Portable Water Bottle", "Travel Size Toiletries", "Luggage Tags"],
        bids: [
            { amount: 45, name: "JetSetter" },
            { amount: 70, name: "Traveler101" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-07"),
        category: "Travel Essentials",
        description: "A handy set of essentials to make traveling more convenient and organized for frequent fliers and weekend travelers alike."
    },
    {
        productName: "Eco-Conscious Box",
        items: ["Sustainable Straw Set", "Eco-Friendly Notebook", "Reusable Produce Bags", "Solar Charger"],
        bids: [
            { amount: 35, name: "EcoFriendlyFan" },
            { amount: 55, name: "SustainabilityGuru" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-08"),
        category: "Eco-Friendly Products",
        description: "Reduce your carbon footprint with these eco-friendly products that promote sustainability and conscious living."
    },
    {
        productName: "Collectible Treasures Box",
        items: ["Vintage Stamps", "Rare Vinyl Records", "Collectible Figurines", "Historic Memorabilia"],
        bids: [
            { amount: 70, name: "RareCollector" },
            { amount: 100, name: "CollectorPro" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-09"),
        category: "Collectibles",
        description: "Explore rare and nostalgic items that any collector would cherish, with a mix of timeless treasures."
    },
    {
        productName: "Crafting Supplies Box",
        items: ["Embroidery Kit", "Scrapbooking Materials", "Crafting Tools", "Bead Kit"],
        bids: [
            { amount: 30, name: "CraftFanatic" },
            { amount: 50, name: "DIYCrafter" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-10"),
        category: "Art Supplies & Crafting",
        description: "An assortment of supplies for crafters of all kinds, perfect for creating personalized, handmade projects."
    },
    {
        productName: "High-End Fashion Box",
        items: ["Designer Sunglasses", "Luxury Belt", "Elegant Necklace", "Fashionable Clutch"],
        bids: [
            { amount: 80, name: "FashionIcon" },
            { amount: 120, name: "LuxuryLife" }
        ],
        startingPrice: 10,
        auctionEndDate: new Date("2024-12-11"),
        category: "Fashion Accessories",
        description: "Step up your style game with these high-end fashion accessories, carefully curated for the luxury aficionado."
    }
];
export default mysteryBoxes;
