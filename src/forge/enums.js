const ESSENCE = Object.freeze(
    {
        WISP: 1,
        SHADE: 2,
        DRYAD: 3,
        AURA: 4,
        SALA: 5,
        GNOME: 6,
        JINN: 7,
        UNDINE: 8
    }
)

const STAT = Object.freeze(
    {
        ALL: 1,
        PWR: 2,
        SKL: 3,
        DEF: 4,
        MAG: 5,
        HP: 6,
        SPR: 7,
        CHM: 8,
        LCK: 9
    }
)

const WORLD_CARD = Object.freeze(
    {
        NONE: 0,
        YGGDRASIL: 1,
        HEAVENS_SCALE: 2,
        DYING_EARTH: 3,
        RAGNAROK: 4,
        ANCIENT_MOON: 5,
        MIRRORED_WORLD: 6,
        BED_OF_THORN: 7
    }
)

const PLUNGE1 = Object.freeze(
    {
        Thrust: {text: 'Thrust', value: 1},
        Shot: {text: 'Shot', value: 2},
        Caduceus: {text: 'Caduceus', value: 3},
        Chaotic_Avenger: {text: 'Chaotic Avenger', value: 4},
        Green_Princess: {text: 'Green Princess', value: 5},
        Gungnir: {text: 'Gungnir', value: 6},
        Magical_Shot: {text: 'Magical Shot', value: 7},
        Phoenix_Falling: {text: 'Phoenix Falling', value: 8},
        Solar_Flare: {text: 'Solar Flare', value: 9},
        Spear_of_Light: {text: 'Spear Of Light', value: 10},
        Trident: {text: 'Trident', value: 11}
    }
)

const PLUNGE2 = Object.freeze(
    {
        Uppercut: {text: 'Uppercut', value: 1},
        Double_Shot: {text: 'Double Shot', value: 2},
        Dragonslayer: {text: 'Dragonslayer', value: 3},
        Elven_Archer: {text: 'Elven Archer', value: 4},
        Flame_Tongue: {text: 'Flame Tongue', value: 5},
        Game_of_Death: {text: 'Game of Death', value: 6},
        Hand_of_Midas: {text: 'Hand of Midas', value: 7},
        Lunar_Shot: {text: 'Lunar Shot', value: 8},
        Poison_Blade: {text: 'Poison Blade', value: 9},
        Quick_Blade: {text: 'Quick Blade', value: 10},
        Sunlight: {text: 'Sunlight', value: 11},
        Vampsword: {text: 'Vampsword', value: 12}
    }
)

const PLUNGE3 = Object.freeze(
    {
        Jump: {text: 'Jump', value: 1},
        Demonicide: {text: 'Demonicide', value: 2},
        Electrosceptre: {text: 'Electrosceptre', value: 3},
        Golden_Touch: {text: 'Golden Touch', value: 4},
        Magma_Hammer: {text: 'Magma Hammer', value: 5},
        Mjolnir: {text: 'Mjolnir', value: 6},
        Moonlight: {text: 'Moonlight', value: 7},
        Quake_Hammer: {text: 'Quake Hammer', value: 8},
        Ragnarok: {text: 'Ragnarok', value: 9},
        Red_Dream: {text: 'Red Dream', value: 10},
        Sinister_Blade: {text: 'Sinister Blade', value: 11},
        Sledge_Hammer: {text: 'Sledge Hammer', value: 12},
        Treefeller: {text: 'Treefeller', value: 13},
        Woodchopper: {text: 'Woodchopper', value: 14}
    }
)

const IMMUNITY = Object.freeze(
    {
        value: {text: 'None', code: '-', value: 0},
        Sleep: {text: 'Sleep', code: 'Sl', value: 1},
        Poison: {text: 'Poison', code: 'Po', value: 2},
        Paralysis: {text: 'Paralysis', code: 'Pa', value: 4},
        Confusion: {text: 'Confusion', code: 'Co', value: 8},
        Darkness: {text: 'Darkness', code: 'Da', value: 16},
        Petrify: {text: 'Petrify', code: 'Pe', value: 32},
        Flameburst: {text: 'Flameburst', code: 'Fl', value: 64},
        Freeze: {text: 'Freeze', code: 'Fr', value: 128}
    }
)

const SPECIAL = Object.freeze(
    {
        No_Effect: {text: 'No Effect', value: 1},
        No_Regen: {text: 'No Regen', value: 2},
        No_Revive: {text: 'No Revive', value: 3},
        Auto_Revive: {text: 'Auto Revive', value: 4},
        Fast_Revive: {text: 'Fast Revive', value: 5},
        Extra_Exp: {text: 'Extra Exp', value: 6},
        Extra_Lucre: {text: 'Extra Lucre', value: 7},
        Stare_Immunity: {text: 'Stare Immunity', value: 8},
        Share_Exp: {text: 'Share Exp', value: 9},
        Move_Regen: {text: 'Move Regen', value: 10}
    }
)

const STICKY_F = Object.freeze(
    {
        STICKY: 1,
        UNSTICKY: 0
    }
)

const MATERIAL = Object.freeze(
    {
        MenosBronze: {text: 'Menos Bronze', value: 1},
        ForsenaIron: {text: 'Forsena Iron', value: 2},
        GranzSteel: {text: 'Granz Steel', value: 3},
        LorantSilver: {text: 'Lorant Silver', value: 4},
        WendelSilver: {text: 'Wendel Silver', value: 5},
        VizelGold: {text: 'Vizel Gold', value: 6},
        IshePlatinum: {text: 'Ishe Platinum', value: 7},
        LorimarIron: {text: 'Lorimar Iron', value: 8},
        AltenaAlloy: {text: 'Altena Alloy', value: 9},
        MaiaLead: {text: 'Maia Lead', value: 10},
        Orihalcon: {text: 'Orihalcon', value: 11},
        OakWood: {text: 'Oak Wood', value: 12},
        HollyWood: {text: 'Holly Wood', value: 13},
        BaobabWood: {text: 'Baobab Wood', value: 14},
        EbonyWood: {text: 'Ebony Wood', value: 15},
        MapleWood: {text: 'Maple Wood', value: 16},
        DiorWood: {text: 'Dior Wood', value: 17},
        AshWood18: {text: 'Ash Wood', value: 18},
        FossilWood: {text: 'Fossil Wood', value: 19},
        Marble: {text: 'Marble', value: 20},
        Obsidian: {text: 'Obsidian', value: 21},
        PedanStone: {text: 'Pedan Stone', value: 22},
        GaeussTears: {text: 'Gaeus\'s Tears', value: 23},
        AnimalHide: {text: 'Animal Hide', value: 24},
        GatorSkin: {text: 'Gator Skin', value: 25},
        CentaurHide: {text: 'Centaur Hide', value: 26},
        DragonSkin: {text: 'Dragon Skin', value: 27},
        FishScales: {text: 'Fish Scales', value: 28},
        LizardScales: {text: 'Lizard Scales', value: 29},
        SnakeScales: {text: 'Snake Scales', value: 30},
        DragonScales: {text: 'Dragon Scales', value: 31},
        AnimalBone: {text: 'Animal Bone', value: 32},
        Ivory: {text: 'Ivory', value: 33},
        CursedBone: {text: 'Cursed Bone', value: 34},
        Fossil: {text: 'Fossil', value: 35},
        ToppleCotton: {text: 'Topple Cotton', value: 36},
        SultansSilk: {text: 'Sultan\'s Silk', value: 37},
        JuddHemp: {text: 'Judd Hemp', value: 38},
        AltenaFelt: {text: 'Altena Felt', value: 39},
        JacobiniRock: {text: 'Jacobini Rock', value: 40},
        HalleyRock: {text: 'Halley Rock', value: 41},
        AnkhRock: {text: 'Ankh Rock', value: 42},
        VinekRock: {text: 'Vinek Rock', value: 43},
        TuttleRock: {text: 'Tuttle Rock', value: 44},
        NemesisRock: {text: 'Nemesis Rock', value: 45},
        BiellaRock: {text: 'Biella Rock', value: 46},
        SwifteRock: {text: 'Swifte Rock', value: 47},
        Adamantite: {text: 'Adamantite', value: 48},
        Fullmetal: {text: 'Fullmetal', value: 49},
        Coral: {text: 'Coral', value: 50},
        TortoiseShell: {text: 'TortoiseShell', value: 51},
        Shell: {text: 'Shell', value: 52},
        Emerald: {text: 'Emerald', value: 53},
        Pearl: {text: 'Pearl', value: 54},
        LapisLazuli: {text: 'Lapis Lazuli', value: 55}
    }
)

const EQUIP = Object.freeze(
    {
        Knife: {text: 'Knife', value: 1},
        Sword: {text: 'Sword', value: 2},
        Axe: {text: 'Axe', value: 3},
        THSword: {text: '2H Sword', value: 4},
        THAxe: {text: '2H Axe', value: 5},
        Hammer: {text: 'Hammer', value: 6},
        Spear: {text: 'Spear', value: 7},
        Staff: {text: 'Staff', value: 8},
        Glove: {text: 'Glove', value: 9},
        Flail: {text: 'Flail', value: 10},
        Bow: {text: 'Bow', value: 11},
        Shield: {text: 'Shield', value: 12},
        Helm: {text: 'Helm', value: 13},
        Hat: {text: 'Hat', value: 14},
        Hauberk: {text: 'Hauberk', value: 15},
        Robe: {text: 'Robe', value: 16},
        Gauntlet: {text: 'Gauntlet', value: 17},
        Ring: {text: 'Ring', value: 18},
        Boots: {text: 'Boots', value: 19},
        Shoes: {text: 'Shoes', value: 20},
        Armor: {text: 'Armor', value: 21},
        Mantle: {text: 'Mantle', value: 22},
        Pendant: {text: 'Pendant', value: 23}
    }
)

const ITEM = Object.freeze(
    {
        NoItem: {text: 'No Item', value: 0},
        WispGold: {text: 'Wisp Gold', value: 1},
        ShadeGold: {text: 'Shade Gold', value: 2},
        DryadGold: {text: 'Dryad Gold', value: 3},
        AuraGold: {text: 'Aura Gold', value: 4},
        SalaGold: {text: 'Sala Gold', value: 5},
        GnomeGold: {text: 'Gnome Gold', value: 6},
        JinnGold: {text: 'Jinn Gold', value: 7},
        UndineGold: {text: 'Undine Gold', value: 8},
        WispSilver: {text: 'Wisp Silver', value: 9},
        ShadeSilver: {text: 'Shade Silver', value: 10},
        DryadSilver: {text: 'Dryad Silver', value: 11},
        AuraSilver: {text: 'Aura Silver', value: 12},
        SalaSilver: {text: 'Sala Silver', value: 13},
        GnomeSilver: {text: 'Gnome Silver', value: 14},
        JinnSilver: {text: 'Jinn Silver', value: 15},
        UndineSilver: {text: 'Undine Silver', value: 16},
        FireStone: {text: 'Fire Stone', value: 17},
        EarthStone: {text: 'Earth Stone', value: 18},
        WindStone: {text: 'Wind Stone', value: 19},
        WaterStone: {text: 'Water Stone', value: 20},
        SunCrystal: {text: 'Sun Crystal', value: 21},
        MoonCrystal: {text: 'Moon Crystal', value: 22},
        GlowCrystal: {text: 'Glow Crystal', value: 23},
        ChaosCrystal: {text: 'Chaos Crystal', value: 24},
        RoundSeed: {text: 'Round Seed', value: 25},
        OblongSeed: {text: 'Oblong Seed', value: 26},
        CrookedSeed: {text: 'Crooked Seed', value: 27},
        BigSeed: {text: 'Big Seed', value: 28},
        SmallSeed: {text: 'Small Seed', value: 29},
        LongSeed: {text: 'Long Seed', value: 30},
        FlatSeed: {text: 'Flat Seed', value: 31},
        SpinySeed: {text: 'Spiny Seed', value: 32},
        Bellgrapes: {text: 'Bellgrapes', value: 33},
        Diceberry: {text: 'Diceberry', value: 34},
        Mangoelephant: {text: 'Mangoelephant', value: 35},
        LoquatShoes: {text: 'Loquat Shoes', value: 36},
        PearOheels: {text: 'Pear Oheels', value: 37},
        Squalphin: {text: 'Squalphin', value: 38},
        Citrisquid: {text: 'Citrisquid', value: 39},
        Springanana: {text: 'Springanana', value: 40},
        PeachPuppy: {text: 'Peach Puppy', value: 41},
        Apricat: {text: 'Apricat', value: 42},
        Applesocks: {text: 'Applesocks', value: 43},
        Whalamato: {text: 'Whalamato', value: 44},
        PineOclock: {text: 'Pine Oclock', value: 45},
        FishyFruit: {text: 'Fishy Fruit', value: 46},
        Boarmelon: {text: 'Boarmelon', value: 47},
        Rhinoloupe: {text: 'Rhinoloupe', value: 48},
        Orcaplant: {text: 'Orcaplant', value: 49},
        Garlicrown: {text: 'Garlicrown', value: 50},
        HoneyOnion: {text: 'Honey Onion', value: 51},
        SweetMoai: {text: 'Sweet Moai', value: 52},
        SpinyCarrot: {text: 'Spiny Carrot', value: 53},
        Conchurnip: {text: 'Conchurnip', value: 54},
        Cornflower: {text: 'Cornflower', value: 55},
        Cabadillo: {text: 'Cabadillo', value: 56},
        Needlettuce: {text: 'Needlettuce', value: 57},
        CherryBombs: {text: 'Cherry Bombs', value: 58},
        MaskedPotato: {text: 'Masked Potato', value: 59},
        Lilipods: {text: 'Lilipods', value: 60},
        RocketPapaya: {text: 'Rocket Papaya', value: 61},
        Orangeopus: {text: 'Orangeopus', value: 62},
        Bumpkin: {text: 'Bumpkin', value: 63},
        HeartMint: {text: 'Heart Mint', value: 64},
        SpadeBasil: {text: 'Spade Basil', value: 65},
        Dialaurel: {text: 'Dialaurel', value: 66},
        GoldClover: {text: 'Gold Clover', value: 67},
        MushInABox: {text: 'Mush In A Box', value: 68},
        Toadstoolshed: {text: 'Toadstoolshed', value: 69},
        AllMeat: {text: 'All Meat', value: 70},
        SharpClaw: {text: 'Sharp Claw', value: 71},
        PoisonFang: {text: 'Poison Fang', value: 72},
        GiantsHorn: {text: 'Giant\'s Horn', value: 73},
        Scissors: {text: 'Scissors', value: 74},
        HealingClaw: {text: 'Healing Claw', value: 75},
        ZombieClaw: {text: 'Zombie Claw', value: 76},
        VampireFang: {text: 'Vampire Fang', value: 77},
        LittleEye: {text: 'Little Eye', value: 78},
        SleepyEye: {text: 'Sleepy Eye', value: 79},
        SillyEye: {text: 'Silly Eye', value: 80},
        DangerousEye: {text: 'Dangerous Eye', value: 81},
        AngryEye: {text: 'Angry Eye', value: 82},
        BlankEye: {text: 'Blank Eye', value: 83},
        WickedEye: {text: 'Wicked Eye', value: 84},
        CreepyEye: {text: 'Creepy Eye', value: 85},
        AngelFeather: {text: 'Angel Feather', value: 86},
        RavenFeather: {text: 'Raven Feather', value: 87},
        ClearFeather: {text: 'Clear Feather', value: 88},
        MothWing: {text: 'Moth Wing', value: 89},
        FlamingQuill: {text: 'Flaming Quill', value: 90},
        WhiteFeather: {text: 'White Feather', value: 91},
        AromaOil: {text: 'Aroma Oil', value: 92},
        DragonBlood: {text: 'Dragon Blood', value: 93},
        Acid: {text: 'Acid', value: 94},
        HolyWater: {text: 'Holy Water', value: 95},
        Ether: {text: 'Ether', value: 96},
        Mercury: {text: 'Mercury', value: 97},
        StinkyBreath: {text: 'Stinky Breath', value: 98},
        GhostsHowl: {text: 'Ghosts Howl', value: 99},
        DragonsBreath: {text: 'Dragons Breath', value: 100},
        VirginsSigh: {text: 'Virgins Sigh', value: 101},
        Electricity: {text: 'Electricity', value: 102},
        Moss: {text: 'Moss', value: 103},
        EarOfWheat: {text: 'Ear Of Wheat', value: 104},
        BakedRoach: {text: 'Baked Roach', value: 105},
        BlackenedBat: {text: 'Blackened Bat', value: 106},
        Sulpher: {text: 'Sulpher', value: 107},
        PoisonPowder: {text: 'Poison Powder', value: 108},
        SleepyPowder: {text: 'Sleepy Powder', value: 109},
        KnockoutDust: {text: 'Knockout Dust', value: 110},
        Rust: {text: 'Rust', value: 111},
        GraveDirt: {text: 'Grave Dirt', value: 112},
        Ash: {text: 'Ash', value: 113},
        Hairball: {text: 'Hairball', value: 114},
        Needle: {text: 'Needle', value: 115},
        MirrorPiece: {text: 'Mirror Piece', value: 116},
        WadOfWool: {text: 'Wad Of Wool', value: 117},
        MessyScroll: {text: 'Messy Scroll', value: 118},
        GreenballBun: {text: 'Greenball Bun', value: 119},
        TakoBug: {text: 'Tako Bug', value: 120}
    }
)

export {
    ESSENCE,
    IMMUNITY,
    PLUNGE1,
    PLUNGE2,
    PLUNGE3,
    SPECIAL,
    STAT,
    STICKY_F,
    WORLD_CARD,
    MATERIAL,
    EQUIP,
    ITEM
}
