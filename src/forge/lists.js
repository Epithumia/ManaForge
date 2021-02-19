import {
    Wisp_Silver,
    Sweet_Moai,
    Zombie_Claw,
    Wisp_Gold,
    Wind_Stone,
    Wicked_Eye,
    White_Feather,
    Whalamato,
    Water_Stone,
    Wad_Of_Wool,
    Virgins_Sigh,
    Vampire_Fang,
    Undine_Silver,
    Undine_Gold,
    Toadstoolshed,
    Tako_Bug,
    Sun_Crystal,
    Sulpher,
    Stinky_Breath,
    Squalphin,
    Springanana,
    Spiny_Seed,
    Spiny_Carrot,
    Spade_Basil,
    Small_Seed,
    Sleepy_Powder,
    Sleepy_Eye,
    Sharp_Claw,
    Silly_Eye,
    Shade_Silver,
    Shade_Gold,
    Scissors,
    Sala_Silver,
    Sala_Gold,
    Rust,
    Round_Seed,
    Rocket_Papaya,
    Rhinoloupe,
    Raven_Feather,
    Poison_Powder,
    Poison_Fang,
    Pine_Oclock,
    Pear_Oheels,
    Peach_Puppy,
    Orcaplant,
    Orangeopus,
    Oblong_Seed,
    Needlettuce,
    Needle,
    Mush_In_A_Box,
    Moth_Wing,
    Moss,
    Moon_Crystal,
    Mirror_Piece,
    Messy_Scroll,
    Mercury,
    Masked_Potato,
    Mangoelephant,
    Loquat_Shoes,
    Long_Seed,
    Little_Eye,
    Lilipods,
    Knockout_Dust,
    Jinn_Silver,
    Jinn_Gold,
    Honey_Onion,
    Holy_Water,
    Heart_Mint,
    Healing_Claw,
    Hairball,
    Greenball_Bun,
    Grave_Dirt,
    Gold_Clover,
    Gnome_Silver,
    Gnome_Gold,
    Glow_Crystal,
    Giants_Horn,
    Ghosts_Howl,
    Garlicrown,
    Flat_Seed,
    Flaming_Quill,
    Fishy_Fruit,
    Fire_Stone,
    Ether,
    Electricity,
    Earth_Stone,
    Ear_Of_Wheat,
    Dryad_Silver,
    Dryad_Gold, Dragons_Breath, Dragon_Blood, Diceberry, Dialaurel, Dangerous_Eye, Crooked_Seed, Creepy_Eye, Cornflower,
    Conchurnip, Clear_Feather, Citrisquid, Cherry_Bombs, Chaos_Crystal, Cabadillo, Bumpkin, Boarmelon, Blank_Eye,
    Blackened_Bat, Big_Seed, Bellgrapes, Baked_Roach, Aura_Silver, Aura_Gold, Ash, Aroma_Oil, Apricat, Applesocks,
    Angry_Eye, Angel_Feather, All_Meat, No_Item, Acid
} from "@/forge/items";

const item_list = ["Wisp Gold", "Shade Gold", "Dryad Gold",
    "Aura Gold", "Sala Gold", "Gnome Gold", "Jinn Gold", "Undine Gold",
    "Wisp Silver", "Shade Silver", "Dryad Silver", "Aura Silver",
    "Sala Silver", "Gnome Silver", "Jinn Silver", "Undine Silver",
    "Fire Stone", "Earth Stone", "Wind Stone", "Water Stone",
    "Sun Crystal", "Moon Crystal", "Glow Crystal", "Chaos Crystal",
    "Round Seed", "Oblong Seed", "Crooked Seed", "Big Seed",
    "Small Seed", "Long Seed", "Flat Seed", "Spiny Seed", "Bellgrapes",
    "Diceberry", "Mangoelephant", "Loquat Shoes", "Pear Oheels",
    "Squalphin", "Citrisquid", "Springanana", "Peach Puppy", "Apricat",
    "Applesocks", "Whalamato", "Pine Oclock", "Fishy Fruit",
    "Boarmelon", "Rhinoloupe", "Orcaplant", "Garlicrown",
    "Honey Onion", "Sweet Moai", "Spiny Carrot", "Conchurnip",
    "Cornflower", "Cabadillo", "Needlettuce", "Cherry Bombs",
    "Masked Potato", "Lilipods", "Rocket Papaya", "Orangeopus",
    "Bumpkin", "Heart Mint", "Spade Basil", "Dialaurel", "Gold Clover",
    "Mush In A Box", "Toadstoolshed", "All Meat", "Sharp Claw",
    "Poison Fang", "Giants Horn", "Scissors", "Healing Claw",
    "Zombie Claw", "Vampire Fang", "Little Eye", "Sleepy Eye",
    "Silly Eye", "Dangerous Eye", "Angry Eye", "Blank Eye",
    "Wicked Eye", "Creepy Eye", "Angel Feather", "Raven Feather",
    "Clear Feather", "Moth Wing", "Flaming Quill", "White Feather",
    "Aroma Oil", "Dragon Blood", "Acid", "Holy Water", "Ether",
    "Mercury", "Stinky Breath", "Ghosts Howl", "Dragons Breath",
    "Virgins Sigh", "Electricity", "Moss", "Ear Of Wheat",
    "Baked Roach", "Blackened Bat", "Sulpher", "Poison Powder",
    "Sleepy Powder", "Knockout Dust", "Rust", "Grave Dirt", "Ash",
    "Hairball", "Needle", "Mirror Piece", "Wad Of Wool",
    "Messy Scroll", "Greenball Bun", "Tako Bug"]

const weapon_list = ["No Wep", "Knife", "Sword", "Axe", "2H Sword",
    "2H Axe", "Hammer", "Spear", "Staff", "Glove", "Flail", "Bow",
    "Shield", "Helm", "Hat", "Hauberk", "Robe", "Gauntlet", "Ring",
    "Boots", "Shoes", "Armor", "Mantle", "Pendant"]

const mat_word = ["No Material", "MenosBronze", "ForsenaIron",
    "GranzSteel", "LorantSilver", "WendelSilver", "VizelGold",
    "IshePlatinum", "LorimarIron", "AltenaAlloy", "MaiaLead",
    "Orihalcon", "OakWood", "HollyWood", "BaobabWood", "EbonyWood",
    "MapleWood", "DiorWood", "AshWood", "FossilWood", "Marble",
    "Obsidian", "PedanStone", "Gaeus'sTears", "AnimalHide",
    "GatorSkin", "CentaurHide", "DragonSkin", "FishScales",
    "LizardScales", "SnakeScales", "DragonScales", "AnimalBone",
    "Ivory", "CursedBone", "Fossil", "ToppleCotton",
    "Sultan'sSilk", "JuddHemp", "AltenaFelt", "JacobiniRock",
    "HalleyRock", "AnkhRock", "VinekRock", "TuttleRock",
    "NemesisRock", "BiellaRock", "SwifteRock", "Adamantite",
    "Fullmetal", "Coral", "TortoiseShell", "Shell", "Emerald",
    "Pearl", "LapisLazuli"]

const mat_props = [
    /* weapon/armor stats[4], marker level[1], menos sell price[1] */
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0], /* No Material */
    [18, 10, 10, 10, 10, 10, 10, 10, 10, 8, 8, 8, 8, 8, 8, 8, 8, 150], /* MenosBronze */
    [20, 15, 15, 15, 15, 15, 15, 15, 15, 9, 9, 9, 9, 9, 9, 9, 9, 300], /* ForsenaIron */
    [24, 20, 20, 20, 20, 20, 20, 20, 20, 9, 9, 9, 9, 9, 9, 9, 9, 600], /* GranzSteel */
    [12, 25, 25, 25, 25, 25, 25, 25, 25, 8, 6, 7, 7, 7, 7, 7, 7, 750], /* LorantSilver */
    [16, 30, 30, 30, 30, 30, 30, 30, 30, 9, 7, 8, 8, 8, 8, 8, 8, 900], /* WendelSilver */
    [16, 35, 35, 35, 35, 35, 35, 35, 35, 7, 9, 9, 9, 9, 9, 9, 9, 1200], /* VizelGold */
    [16, 40, 40, 40, 40, 40, 40, 40, 40, 7, 7, 8, 8, 8, 8, 8, 8, 1500], /* IshePlatinum */
    [16, 45, 45, 45, 45, 45, 45, 45, 45, 7, 9, 9, 9, 9, 9, 9, 9, 1800], /* LorimarIron */
    [18, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 10, 10, 10, 10, 10, 10, 2250], /* AltenaAlloy */
    [48, 36, 3, 68, 18, 3, 18, 36, 36, 32, 32, 32, 32, 32, 32, 32, 32, 1350], /* MaiaLead */
    [12, 28, 28, 28, 28, 28, 28, 28, 28, 8, 8, 7, 10, 7, 9, 6, 8, 1050], /* Orihalcon */
    [16, 10, 6, 14, 4, 16, 5, 7, 9, 7, 8, 6, 9, 10, 7, 7, 7, 150], /* OakWood */
    [14, 15, 9, 21, 6, 24, 7, 10, 13, 7, 8, 6, 9, 10, 7, 7, 7, 360], /* HollyWood */
    [24, 20, 12, 28, 8, 32, 10, 14, 18, 7, 8, 6, 9, 10, 7, 7, 7, 660], /* BaobabWood */
    [24, 25, 15, 35, 10, 40, 12, 17, 22, 7, 8, 6, 9, 10, 7, 7, 7, 900], /* EbonyWood */
    [12, 35, 21, 49, 14, 56, 17, 24, 31, 7, 8, 6, 9, 10, 7, 7, 7, 1200], /* MapleWood */
    [10, 50, 30, 70, 20, 80, 25, 35, 45, 7, 8, 5, 9, 10, 7, 7, 7, 1560], /* DiorWood */
    [11, 30, 18, 42, 12, 48, 15, 21, 27, 7, 8, 6, 9, 10, 7, 7, 7, 1050], /* AshWood */
    [22, 40, 24, 56, 16, 64, 20, 28, 36, 7, 6, 6, 9, 10, 6, 7, 7, 1500], /* FossilWood */
    [28, 12, 2, 21, 16, 7, 9, 12, 15, 7, 8, 9, 7, 7, 6, 10, 7, 300], /* Marble */
    [32, 24, 4, 43, 33, 14, 18, 24, 30, 8, 6, 9, 7, 7, 6, 10, 8, 660], /* Obsidian */
    [24, 36, 7, 64, 50, 21, 27, 36, 45, 7, 8, 9, 7, 7, 7, 11, 7, 1350], /* PedanStone */
    [20, 48, 9, 86, 67, 28, 36, 48, 60, 8, 8, 9, 7, 10, 6, 10, 6, 1950], /* Gaeus'sTears */
    [8, 10, 1, 1, 1, 20, 8, 12, 10, 8, 8, 7, 9, 9, 7, 7, 7, 90], /* AnimalHide */
    [12, 18, 1, 1, 1, 36, 14, 21, 18, 8, 8, 7, 9, 9, 8, 8, 6, 180], /* GatorSkin */
    [20, 26, 1, 1, 1, 52, 20, 31, 26, 8, 8, 9, 7, 8, 7, 8, 8, 360], /* CentaurHide */
    [20, 35, 1, 1, 1, 70, 28, 42, 35, 8, 8, 7, 9, 5, 10, 5, 10, 540], /* DragonSkin */
    [20, 8, 8, 7, 7, 9, 9, 8, 4, 8, 8, 8, 8, 8, 8, 8, 6, 120], /* FishScales */
    [20, 16, 17, 14, 14, 19, 19, 16, 8, 7, 9, 8, 8, 7, 8, 8, 9, 240], /* LizardScales */
    [20, 24, 26, 21, 21, 28, 28, 24, 12, 9, 7, 8, 8, 8, 7, 8, 7, 360], /* SnakeScales */
    [14, 60, 66, 54, 54, 72, 72, 60, 30, 7, 7, 7, 7, 6, 7, 7, 7, 3000], /* DragonScales */
    [20, 14, 10, 12, 12, 9, 15, 6, 9, 9, 6, 8, 8, 8, 8, 8, 8, 60], /* AnimalBone */
    [20, 28, 21, 24, 24, 18, 30, 12, 18, 7, 6, 7, 7, 8, 6, 7, 7, 240], /* Ivory */
    [20, 43, 32, 36, 36, 27, 45, 18, 27, 9, 5, 9, 7, 9, 7, 9, 7, 270], /* CursedBone */
    [20, 57, 43, 48, 48, 36, 60, 24, 36, 9, 6, 8, 8, 10, 6, 10, 6, 540], /* Fossil */
    [10, 18, 1, 1, 1, 9, 9, 9, 9, 6, 8, 6, 10, 10, 7, 7, 6, 30], /* ToppleCotton */
    [10, 28, 1, 1, 1, 14, 14, 14, 14, 6, 8, 6, 10, 10, 7, 7, 6, 90], /* Sultan'sSilk */
    [10, 38, 1, 1, 1, 19, 19, 19, 19, 10, 6, 6, 10, 10, 7, 7, 6, 150], /* JuddHemp */
    [10, 48, 1, 1, 1, 24, 24, 24, 24, 7, 7, 7, 9, 10, 7, 7, 6, 300], /* AltenaFelt */
    [16, 15, 11, 22, 24, 15, 13, 18, 24, 7, 8, 10, 7, 7, 8, 9, 8, 360], /* JacobiniRock */
    [16, 20, 15, 30, 32, 20, 18, 24, 32, 7, 8, 10, 7, 7, 8, 9, 8, 600], /* HalleyRock */
    [16, 25, 18, 37, 40, 25, 22, 30, 40, 7, 8, 10, 7, 7, 8, 9, 8, 660], /* AnkhRock */
    [16, 30, 22, 45, 48, 30, 27, 36, 48, 7, 8, 10, 7, 7, 8, 9, 8, 1050], /* VinekRock */
    [16, 35, 26, 52, 56, 35, 31, 42, 56, 7, 8, 10, 7, 7, 8, 9, 8, 1260], /* TuttleRock */
    [16, 40, 30, 60, 64, 40, 36, 48, 64, 7, 8, 10, 7, 7, 8, 9, 8, 1500], /* NemesisRock */
    [16, 45, 33, 67, 72, 45, 40, 54, 72, 7, 8, 10, 7, 7, 8, 9, 8, 1650], /* BiellaRock */
    [16, 50, 37, 75, 80, 50, 45, 60, 80, 7, 8, 10, 7, 7, 8, 9, 8, 1800], /* SwifteRock */
    [20, 62, 46, 93, 99, 62, 31, 93, 62, 8, 8, 8, 8, 8, 8, 8, 8, 3600], /* Adamantite */
    [20, 55, 41, 68, 66, 44, 27, 99, 27, 8, 8, 8, 8, 8, 8, 8, 8, 3300], /* Fullmetal */
    [12, 18, 21, 14, 12, 23, 9, 32, 9, 9, 6, 7, 7, 9, 7, 9, 5, 240], /* Coral */
    [20, 26, 31, 20, 18, 33, 13, 46, 13, 8, 8, 9, 7, 9, 8, 9, 7, 150], /* TortoiseShell */
    [14, 20, 24, 16, 14, 26, 10, 36, 10, 8, 7, 9, 8, 9, 7, 9, 6, 90], /* Shell */
    [8, 2, 2, 2, 2, 1, 1, 1, 50, 8, 8, 8, 8, 8, 8, 8, 8, 4500], /* Emerald */
    [8, 2, 2, 2, 2, 1, 1, 1, 50, 8, 8, 8, 8, 8, 8, 8, 8, 4500], /* Pearl */
    [8, 2, 2, 2, 2, 1, 1, 1, 50, 8, 8, 8, 8, 8, 8, 8, 8, 4500] /* LapisLazuli */
];

const if_array = [new No_Item(), new Wisp_Gold(),
    new Shade_Gold(), new Dryad_Gold(), new Aura_Gold(),
    new Sala_Gold(), new Gnome_Gold(), new Jinn_Gold(),
    new Undine_Gold(), new Wisp_Silver(), new Shade_Silver(),
    new Dryad_Silver(), new Aura_Silver(), new Sala_Silver(),
    new Gnome_Silver(), new Jinn_Silver(), new Undine_Silver(),
    new Fire_Stone(), new Earth_Stone(), new Wind_Stone(),
    new Water_Stone(), new Sun_Crystal(), new Moon_Crystal(),
    new Glow_Crystal(), new Chaos_Crystal(), new Round_Seed(),
    new Oblong_Seed(), new Crooked_Seed(), new Big_Seed(),
    new Small_Seed(), new Long_Seed(), new Flat_Seed(),
    new Spiny_Seed(), new Bellgrapes(), new Diceberry(),
    new Mangoelephant(), new Loquat_Shoes(), new Pear_Oheels(),
    new Squalphin(), new Citrisquid(), new Springanana(),
    new Peach_Puppy(), new Apricat(), new Applesocks(),
    new Whalamato(), new Pine_Oclock(), new Fishy_Fruit(),
    new Boarmelon(), new Rhinoloupe(), new Orcaplant(),
    new Garlicrown(), new Honey_Onion(), new Sweet_Moai(),
    new Spiny_Carrot(), new Conchurnip(), new Cornflower(),
    new Cabadillo(), new Needlettuce(), new Cherry_Bombs(),
    new Masked_Potato(), new Lilipods(), new Rocket_Papaya(),
    new Orangeopus(), new Bumpkin(), new Heart_Mint(),
    new Spade_Basil(), new Dialaurel(), new Gold_Clover(),
    new Mush_In_A_Box(), new Toadstoolshed(), new All_Meat(),
    new Sharp_Claw(), new Poison_Fang(), new Giants_Horn(),
    new Scissors(), new Healing_Claw(), new Zombie_Claw(),
    new Vampire_Fang(), new Little_Eye(), new Sleepy_Eye(),
    new Silly_Eye(), new Dangerous_Eye(), new Angry_Eye(),
    new Blank_Eye(), new Wicked_Eye(), new Creepy_Eye(),
    new Angel_Feather(), new Raven_Feather(), new Clear_Feather(),
    new Moth_Wing(), new Flaming_Quill(), new White_Feather(),
    new Aroma_Oil(), new Dragon_Blood(), new Acid(), new Holy_Water(),
    new Ether(), new Mercury(), new Stinky_Breath(), new Ghosts_Howl(),
    new Dragons_Breath(), new Virgins_Sigh(), new Electricity(),
    new Moss(), new Ear_Of_Wheat(), new Baked_Roach(),
    new Blackened_Bat(), new Sulpher(), new Poison_Powder(),
    new Sleepy_Powder(), new Knockout_Dust(), new Rust(),
    new Grave_Dirt(), new Ash(), new Hairball(), new Needle(),
    new Mirror_Piece(), new Wad_Of_Wool(), new Messy_Scroll(),
    new Greenball_Bun(), new Tako_Bug()];

// Energy required for each level without resists
const power2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768];

export {
    item_list,
    if_array,
    weapon_list,
    mat_word,
    mat_props,
    power2
}
