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
        Thrust: {text: 'Thrust', value: 1, psxtext: 'Thrust'},
        Double_Shot: {text: 'Double Shot', value: 2, psxtext: 'Double Shot'},
        Caduceus: {text: 'Caduceus', value: 3, psxtext: 'Caduceus'},
        Chaotic_Avenger: {text: 'Chaotic Avenger', value: 4, psxtext: 'Chaotic Avenger'},
        Green_Princess: {text: 'Green Princess', value: 5, psxtext: 'Green Princess'},
        Gungnir: {text: 'Gungnir', value: 6, psxtext: 'Gungnir'},
        Magical_Shot: {text: 'Magical Shot', value: 7, psxtext: 'Magical Shot'},
        Phoenix_Falling: {text: 'Phoenix Falling', value: 8, psxtext: 'Phoenix Falling'},
        Solar_Flare: {text: 'Solar Flare', value: 9, pstext: 'Solar Flare'},
        Spear_of_Light: {text: 'Spear Of Light', value: 10, psxtext: 'Spear Of Light'},
        Trident: {text: 'Trident', value: 11, psxtext: 'Trident'},
        Flaming_Arrow: {text: 'Flaming Arrow', value: 101, psxtext: 'Flaming Arrow'},    // Premade bow only
        Medusas_Arrow: {text: 'Medusa’s Arrow', value: 102, psxtext: 'Medusa’s Arrow'},  // Premade bow only
        Icicle: {text: 'Icicle', value: 103, psxtext: 'Icicle'}                          // Premade bow only
    }
)

const PLUNGE2 = Object.freeze(
    {
        Uppercut: {text: 'Uppercut', value: 1, psxtext: 'Uppercut'},
        Shot: {text: 'Shot', value: 2, psxtext: 'Shot'},
        Dragonslayer: {text: 'Dragonslayer', value: 3, psxtext: 'Dragonslayer'},
        Elven_Archer: {text: 'Elven Archer', value: 4, psxtext: 'Elven Archer'},
        Flame_Tongue: {text: 'Flame Tongue', value: 5, psxtext: 'Flame Tongue'},
        Game_of_Death: {text: 'Game of Death', value: 6, psxtext: 'Game of Death'},
        Hand_of_Midas: {text: 'Hand of Midas', value: 7, psxtext: 'Hand of Midas'},
        Lunar_Shot: {text: 'Lunar Shot', value: 8, psxtext: 'Lunar Shot'},
        Poison_Blade: {text: 'Poison Blade', value: 9, psxtext: 'Poison Blade'},
        Quick_Blade: {text: 'Quick Blade', value: 10, psxtext: 'Quick Blade'},
        Sunlight: {text: 'Sunlight', value: 11, psxtext: 'Sunlight'},
        Vampsword: {text: 'Vampsword', value: 12, psxtext: 'Vampsword'}
    }
)

const PLUNGE3 = Object.freeze(
    {
        Jump: {text: 'Jump', value: 1, psxtext: 'Jump'},
        Demonicide: {text: 'Demonicide', value: 2, psxtext: 'Demonicide'},
        Electrosceptre: {text: 'Electrosceptre', value: 3, psxtext: 'Electrosceptre'},
        Golden_Touch: {text: 'Golden Touch', value: 4, psxtext: 'Golden Touch'},
        Magma_Hammer: {text: 'Magma Hammer', value: 5, psxtext: 'Magma Hammer'},
        Mjolnir: {text: 'Mjolnir', value: 6, psxtext: 'Mjolnir'},
        Moonlight: {text: 'Moonlight', value: 7, psxtext: 'Moonlight'},
        Quake_Hammer: {text: 'Quake Hammer', value: 8, psxtext: 'Quake Hammer'},
        Ragnarok: {text: 'Ragnarok', value: 9, psxtext: 'Ragnarok'},
        Red_Dream: {text: 'Red Dream', value: 10, psxtext: 'Red Dream'},
        Sinister_Blade: {text: 'Sinister Blade', value: 11, psxtext: 'Sinister Blade'},
        Sledge_Hammer: {text: 'Sledge Hammer', value: 12, psxtext: 'Sledge Hammer'},
        Treefeller: {text: 'Treefeller', value: 13, psxtext: 'Treefeller'},
        Woodchopper: {text: 'Woodchopper', value: 14, psxtext: 'Woodchopper'},
        //Hand_Of_Midas: {text: 'Hand of Midas', value: 101} // Premade glove only ?
    }
)

const IMMUNITY = Object.freeze(
    {
        value: {text: 'None', code: '-', value: 0, psxtext: 'None'},
        Sleep: {text: 'Sleep', code: 'Sl', value: 1, psxtext: 'Sleep'},
        Poison: {text: 'Poison', code: 'Po', value: 2, psxtext: 'Poison'},
        Paralysis: {text: 'Paralysis', code: 'Pa', value: 4, psxtext: 'Paralysis'},
        Confusion: {text: 'Confusion', code: 'Co', value: 8, psxtext: 'Confusion'},
        Darkness: {text: 'Darkness', code: 'Da', value: 16, psxtext: 'Darkness'},
        Petrify: {text: 'Petrify', code: 'Pe', value: 32, psxtext: 'Petrify'},
        Flameburst: {text: 'Flameburst', code: 'Fl', value: 64, psxtext: 'Flameburst'},
        Freeze: {text: 'Freeze', code: 'Fr', value: 128, psxtext: 'Freeze'}
    }
)

const SPECIAL = Object.freeze(
    {
        No_Effect: {text: 'No Effect', value: 1, psxtext: 'No Effect'},
        No_Regen: {text: 'No Regen', value: 2, psxtext: 'No Regen'},
        No_Revive: {text: 'Move Regen (No Revive)', value: 3, psxtext: 'Move Regen (No Revive)'},
        Auto_Revive: {text: 'Auto Revive', value: 4, psxtext: 'Auto Revive'},
        Fast_Revive: {text: 'Fast Revive', value: 5, psxtext: 'Fast Revive'},
        Extra_Exp: {text: 'Extra Exp', value: 6, psxtext: 'Extra Exp'},
        Extra_Lucre: {text: 'Extra Lucre', value: 7, psxtext: 'Extra Lucre'},
        Stare_Immunity: {text: 'Stare Immunity', value: 8, psxtext: 'Stare Immunity'},
        Share_Exp: {text: 'Share Exp', value: 9, psxtext: 'Share Exp'},
        Move_Regen: {text: 'Move Regen', value: 10, psxtext: 'Move Regen'}
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
        MenosBronze: {text: 'Menos Bronze', value: 1, psxtext: 'MenosBronze'},
        ForsenaIron: {text: 'Valsena Iron', value: 2, psxtext: 'ForsenaIron'},
        GranzSteel: {text: 'Granz Steel', value: 3, psxtext: 'GranzSteel'},
        LorantSilver: {text: 'Laurent Silver', value: 4, psxtext: 'LorantSilver'},
        WendelSilver: {text: 'Wendel Silver', value: 5, psxtext: 'WendelSilver'},
        VizelGold: {text: 'Beiser Gold', value: 6, psxtext: 'VizelGold'},
        IshePlatinum: {text: 'Ishe Platinum', value: 7, psxtext: 'IshePlatinum'},
        LorimarIron: {text: 'Lorimar Iron', value: 8, psxtext: 'LorimarIron'},
        AltenaAlloy: {text: 'Altena Alloy', value: 9, psxtext: 'AltenaAlloy'},
        MaiaLead: {text: 'Maia Lead', value: 10, psxtext: 'MaiaLead'},
        Orihalcon: {text: 'Orichalcum', value: 11, psxtext: 'Orihalcon'},
        OakWood: {text: 'Oak Wood', value: 12, psxtext: 'OakWood'},
        HollyWood: {text: 'Holly Wood', value: 13, psxtext: 'HollyWood'},
        BaobabWood: {text: 'Baobab Wood', value: 14, psxtext: 'BaobabWood'},
        EbonyWood: {text: 'Ebony Wood', value: 15, psxtext: 'EbonyWood'},
        MapleWood: {text: 'Maple Wood', value: 16, psxtext: 'MapleWood'},
        DiorWood: {text: 'Dior Wood', value: 17, psxtext: 'DiorWood'},
        AshWood18: {text: 'Ash Wood', value: 18, psxtext: 'AshWood'},
        FossilWood: {text: 'Fossil Wood', value: 19, psxtext: 'FossilWood'},
        Marble: {text: 'Marble', value: 20, psxtext: 'Marble'},
        Obsidian: {text: 'Obsidian', value: 21, psxtext: 'Obsidian'},
        PedanStone: {text: 'Pedan Stone', value: 22, psxtext: 'PedanStone'},
        GaeussTears: {text: 'Gaia\'s Tears', value: 23, psxtext: '\'Gaeus\'s Tears'},
        AnimalHide: {text: 'Animal Hide', value: 24, psxtext: 'AnimalHide'},
        GatorSkin: {text: 'Gator Skin', value: 25, psxtext: 'GatorSkin'},
        CentaurHide: {text: 'Centaur Hide', value: 26, psxtext: 'CentaurHide'},
        DragonSkin: {text: 'Dragon Skin', value: 27, psxtext: 'DragonSkin'},
        FishScales: {text: 'Fish Scales', value: 28, psxtext: 'FishScales'},
        LizardScales: {text: 'Lizard Scales', value: 29, psxtext: 'LizardScales'},
        SnakeScales: {text: 'Snake Scales', value: 30, psxtext: 'SnakeScales'},
        DragonScales: {text: 'Dragon Scales', value: 31, psxtext: 'DragonScales'},
        AnimalBone: {text: 'Animal Bone', value: 32, psxtext: 'Animal Bone'},
        Ivory: {text: 'Ivory', value: 33, psxtext: 'Ivory'},
        CursedBone: {text: 'Cursed Bone', value: 34, psxtext: 'Cursed Bone'},
        Fossil: {text: 'Fossil', value: 35, psxtext: 'Fossil'},
        ToppleCotton: {text: 'Topple Cotton', value: 36, psxtext: 'ToppleCotton'},
        SultansSilk: {text: 'Sultan\'s Silk', value: 37, psxtext: 'Sultan\'sSilk'},
        JuddHemp: {text: 'Judd Hemp', value: 38, psxtext: 'JuddHemp'},
        AltenaFelt: {text: 'Altena Felt', value: 39, psxtext: 'AltenaFelt'},
        JacobiniRock: {text: 'Jacobini Rock', value: 40, psxtext: 'JacobiniRock'},
        HalleyRock: {text: 'Halley Rock', value: 41, psxtext: 'HalleyRock'},
        AnkhRock: {text: 'Ankh Rock', value: 42, psxtext: 'AnkhRock'},
        VinekRock: {text: 'Vinek Rock', value: 43, psxtext: 'VinekRock'},
        TuttleRock: {text: 'Tuttle Rock', value: 44, psxtext: 'TuttleRock'},
        NemesisRock: {text: 'Nemesis Rock', value: 45, psxtext: 'NemesisRock'},
        BiellaRock: {text: 'Biella Rock', value: 46, psxtext: 'BiellaRock'},
        SwifteRock: {text: 'Swifte Rock', value: 47, psxtext: 'Swifte Rock'},
        Adamantite: {text: 'Adamantite', value: 48, psxtext: 'Adamantite'},
        Fullmetal: {text: 'Fullmetal', value: 49, psxtext: 'Fullmetal'},
        Coral: {text: 'Coral', value: 50, psxtext: 'Coral'},
        TortoiseShell: {text: 'TortoiseShell', value: 51, psxtext: 'Tortoiseshell'},
        Shell: {text: 'Seashell', value: 52, psxtext: 'Shell'},
        Emerald: {text: 'Emerald', value: 53, psxtext: 'Emerald'},
        Pearl: {text: 'Pearl', value: 54, psxtext: 'Pearl'},
        LapisLazuli: {text: 'Lapis Lazuli', value: 55, psxtext: 'LapisLazuli'}
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
        NoItem: {text: 'No Item', value: 0, source: null, psxtext: 'No Item'},
        WispGold: {text: 'Wisp Gold', value: 1, source: ['Collected'], psxtext: 'Wisp Gold'},
        ShadeGold: {text: 'Shade Gold', value: 2, source: ['Collected'], psxtext: 'Shade Gold'},
        DryadGold: {text: 'Dryad Gold', value: 3, source: ['Collected'], psxtext: 'Dryad Gold'},
        AuraGold: {text: 'Aura Gold', value: 4, source: ['Collected'], psxtext: 'Aura Gold'},
        SalaGold: {text: 'Salamander Gold', value: 5, source: ['Collected'], psxtext: 'Sala Gold'},
        GnomeGold: {text: 'Gnome Gold', value: 6, source: ['Collected'], psxtext: 'Gnome Gold'},
        JinnGold: {text: 'Jinn Gold', value: 7, source: ['Collected'], psxtext: 'Jinn Gold'},
        UndineGold: {text: 'Undine Gold', value: 8, source: ['Collected'], psxtext: 'Undine Gold'},
        WispSilver: {text: 'Wisp Silver', value: 9, source: ['Collected'], psxtext: 'Wisp Silver'},
        ShadeSilver: {text: 'Shade Silver', value: 10, source: ['Collected'], psxtext: 'Shade Silver'},
        DryadSilver: {text: 'Dryad Silver', value: 11, source: ['Collected'], psxtext: 'Dryad Silver'},
        AuraSilver: {text: 'Aura Silver', value: 12, source: ['Collected'], psxtext: 'Aura Silver'},
        SalaSilver: {text: 'Salamander Silver', value: 13, source: ['Collected'], psxtext: 'Sala Silver'},
        GnomeSilver: {text: 'Gnome Silver', value: 14, source: ['Collected'], psxtext: 'Gnome Silver'},
        JinnSilver: {text: 'Jinn Silver', value: 15, source: ['Collected'], psxtext: 'Jinn Silver'},
        UndineSilver: {text: 'Undine Silver', value: 16, source: ['Collected'], psxtext: 'Undine Silver'},
        FireStone: {text: 'Firestone', value: 17, source: ['Store'], psxtext: 'Firestone'},
        EarthStone: {text: 'Earthstone', value: 18, source: ['Store'], psxtext: 'Earthstone'},
        WindStone: {text: 'Windstone', value: 19, source: ['Store'], psxtext: 'Windstone'},
        WaterStone: {text: 'Waterstone', value: 20, source: ['Store'], psxtext: 'Waterstone'},
        SunCrystal: {text: 'Sun Crystal', value: 21, source: ['Store'], psxtext: 'Sun Crystal'},
        MoonCrystal: {text: 'Moon Crystal', value: 22, source: ['Store'], psxtext: 'Moon Crystal'},
        GlowCrystal: {text: 'Glow Crystal', value: 23, source: ['Store'], psxtext: 'Glow Crystal'},
        ChaosCrystal: {text: 'Chaos Crystal', value: 24, source: ['Store'], psxtext: 'Chaos Crystal'},
        RoundSeed: {text: 'Round Seed', value: 25, psxtext: 'Round Seed'},
        OblongSeed: {text: 'Oblong Seed', value: 26, psxtext: 'Oblong Seed'},
        CrookedSeed: {text: 'Crooked Seed', value: 27, psxtext: 'Crooked Seed'},
        BigSeed: {text: 'Big Seed', value: 28, psxtext: 'Big Seed'},
        SmallSeed: {text: 'Small Seed', value: 29, psxtext: 'Small Seed'},
        LongSeed: {text: 'Long Seed', value: 30, psxtext: 'Long Seed'},
        FlatSeed: {text: 'Flat Seed', value: 31, psxtext: 'Flat Seed'},
        SpinySeed: {text: 'Spiny Seed', value: 32, psxtext: 'Spiny Seed'},
        Bellgrapes: {text: 'Bellgrapes', value: 33, source: ['Orchard'], psxtext: 'Bellgrapes'},
        Diceberry: {text: 'Diceberry', value: 34, source: ['Orchard'], psxtext: 'Diceberry'},
        Mangoelephant: {text: 'Mangolephant', value: 35, source: ['Orchard'], psxtext: 'Mangolephant'},
        LoquatShoes: {text: 'Loquat-Shoe', value: 36, source: ['Orchard'], psxtext: 'Loquat-Shoes'},
        PearOheels: {text: 'Pear o\'Heels', value: 37, source: ['Orchard'], psxtext: 'Pear o\'Heels'},
        Squalphin: {text: 'Squalphin', value: 38, source: ['Orchard'], psxtext: 'Squalphin'},
        Citrisquid: {text: 'Citrisquid', value: 39, source: ['Orchard'], psxtext: 'Citrisquid'},
        Springanana: {text: 'Springanana', value: 40, source: ['Orchard'], psxtext: 'Springanana'},
        PeachPuppy: {text: 'Peach Puppy', value: 41, source: ['Orchard'], psxtext: 'Peach Puppy'},
        Apricat: {text: 'Apricat', value: 42, source: ['Orchard'], psxtext: 'Apricat'},
        Applesocks: {text: 'Applesock', value: 43, source: ['Orchard'], psxtext: 'Applesocks'},
        Whalamato: {text: 'Whalamato', value: 44, source: ['Orchard'], psxtext: 'Whalamato'},
        PineOclock: {text: 'Pine o\'Clock', value: 45, source: ['Orchard'], psxtext: 'Pine o\'Clock'},
        FishyFruit: {text: 'Fishy Fruit', value: 46, source: ['Orchard'], psxtext: 'Fishy Fruit'},
        Boarmelon: {text: 'Boarmelon', value: 47, source: ['Orchard'], psxtext: 'Boarmelon'},
        Rhinoloupe: {text: 'Rhinoloupe', value: 48, source: ['Orchard'], psxtext: 'Rhinoloupe'},
        Orcaplant: {text: 'Orcaplant', value: 49, source: ['Orchard'], psxtext: 'Orcaplant'},
        Garlicrown: {text: 'Garlicrown', value: 50, source: ['Orchard'], psxtext: 'Garlicrown'},
        HoneyOnion: {text: 'Honey Onion', value: 51, source: ['Orchard'], psxtext: 'Honey Onion'},
        SweetMoai: {text: 'Sweet Moai', value: 52, source: ['Orchard'], psxtext: 'Sweet Moai'},
        SpinyCarrot: {text: 'Spiny Carrot', value: 53, source: ['Orchard'], psxtext: 'Spiny Carrot'},
        Conchurnip: {text: 'Conchurnip', value: 54, source: ['Orchard'], psxtext: 'Conchurnip'},
        Cornflower: {text: 'Cornflower', value: 55, source: ['Orchard'], psxtext: 'Cornflower'},
        Cabadillo: {text: 'Cabadillo', value: 56, source: ['Orchard'], psxtext: 'Cabadillo'},
        Needlettuce: {text: 'Needlettuce', value: 57, source: ['Orchard'], psxtext: 'Needlettuce'},
        CherryBombs: {text: 'Cherry Bombs', value: 58, source: ['Orchard'], psxtext: 'Cherry Bombs'},
        MaskedPotato: {text: 'Masked Potato', value: 59, source: ['Orchard'], psxtext: 'Masked Potato'},
        Lilipods: {text: 'Lilipods', value: 60, source: ['Orchard'], psxtext: 'Lilipods'},
        RocketPapaya: {text: 'Rocket Papaya', value: 61, source: ['Orchard'], psxtext: 'Rocket Papaya'},
        Orangeopus: {text: 'Orange\'opus', value: 62, source: ['Orchard'], psxtext: 'Orange\'opus'},
        Bumpkin: {text: 'Bumpkin', value: 63, source: ['Orchard'], psxtext: 'Bumpkin'},
        HeartMint: {text: 'Heart Mint', value: 64, source: ['Store', 'Orchard'], psxtext: 'Heart Mint'},
        SpadeBasil: {text: 'Spade Basil', value: 65, source: ['Store', 'Orchard'], psxtext: 'Spade Basil'},
        Dialaurel: {text: 'Dialaurel', value: 66, source: ['Store', 'Orchard'], psxtext: 'Dialaurel'},
        GoldClover: {text: 'Gold Clover', value: 67, source: ['Store', 'Orchard'], psxtext: 'Gold Clover'},
        MushInABox: {text: 'Mush-in-a-Box', value: 68, source: ['Orchard'], psxtext: 'Mush-in-a-Box'},
        Toadstoolshed: {text: 'Toadstoolshed', value: 69, source: ['Orchard'], psxtext: 'Toadstoolshed'},
        AllMeat: {text: 'All Meat', value: 70, psxtext: 'All Meat'},
        SharpClaw: {text: 'Sharp Claw', value: 71, psxtext: 'Sharp Claw'},
        PoisonFang: {text: 'Poison Fang', value: 72, psxtext: 'Poison Fang'},
        GiantsHorn: {text: 'Giant\'s Horn', value: 73, psxtext: 'Giant\'s Horn'},
        Scissors: {text: 'Pincer', value: 74, psxtext: 'Scissors'},
        HealingClaw: {text: 'Healing Claw', value: 75, psxtext: '\'Healing Claw'},
        ZombieClaw: {text: 'Zombie Claw', value: 76, psxtext: 'Zombie Claw'},
        VampireFang: {text: 'Vampire Fang', value: 77, psxtext: 'Vampire Fang'},
        LittleEye: {text: 'Little Eye', value: 78, psxtext: 'Little Eye'},
        SleepyEye: {text: 'Sleepy Eye', value: 79, psxtext: 'Sleepy Eye'},
        SillyEye: {text: 'Silly Eye', value: 80, psxtext: 'Silly Eye'},
        DangerousEye: {text: 'Dangerous Eye', value: 81, psxtext: 'Dangerous Eye'},
        AngryEye: {text: 'Angry Eye', value: 82, psxtext: 'Angry Eye'},
        BlankEye: {text: 'Blank Eye', value: 83, psxtext: 'Blank Eye'},
        WickedEye: {text: 'Wicked Eye', value: 84, psxtext: 'Wicked Eye'},
        CreepyEye: {text: 'Creepy Eye', value: 85, psxtext: 'Creepy Eye'},
        AngelFeather: {text: 'Angel Feather', value: 86, psxtext: 'Angel Feather'},
        RavenFeather: {text: 'Raven Feather', value: 87, psxtext: 'Raven Feather'},
        ClearFeather: {text: 'Clear Feather', value: 88, psxtext: 'Clear Feather'},
        MothWing: {text: 'Moth Wing', value: 89, psxtext: 'Moth Wing'},
        FlamingQuill: {text: 'Flaming Quill', value: 90, psxtext: 'Flaming Quill'},
        WhiteFeather: {text: 'White Feather', value: 91, psxtext: 'White Feather'},
        AromaOil: {text: 'Aroma Oil', value: 92, psxtext: 'Aroma Oil'},
        DragonBlood: {text: 'Dragon Blood', value: 93, psxtext: 'Dragon Blood'},
        Acid: {text: 'Acid', value: 94, psxtext: 'Acid'},
        HolyWater: {text: 'Holy Water', value: 95, psxtext: 'Holy Water'},
        Ether: {text: 'Ether', value: 96, psxtext: 'Ether'},
        Mercury: {text: 'Mercury', value: 97, psxtext: 'Mercury'},
        StinkyBreath: {text: 'Stinky Breath', value: 98, psxtext: 'Stinky Breath'},
        GhostsHowl: {text: 'Ghosts Howl', value: 99, psxtext: 'Ghosts Howl'},
        DragonsBreath: {text: 'Dragon Breath', value: 100, psxtext: 'Dragon Breath'},
        VirginsSigh: {text: 'Damsel\'s Sigh', value: 101, psxtext: 'Virgin\'s Sigh'},
        Electricity: {text: 'Electricity', value: 102, psxtext: 'Electricity'},
        Moss: {text: 'Moss', value: 103, psxtext: 'Moss'},
        EarOfWheat: {text: 'Ear Of Wheat', value: 104, psxtext: 'Ear Of Wheat'},
        BakedRoach: {text: 'Baked Roach', value: 105, psxtext: 'Baked Roach'},
        BlackenedBat: {text: 'Blackened Bat', value: 106, psxtext: 'Blackened Bat'},
        Sulpher: {text: 'Sulphur', value: 107, psxtext: 'Sulpher'},
        PoisonPowder: {text: 'Poison Powder', value: 108, psxtext: 'Poison Powder'},
        SleepyPowder: {text: 'Sleepy Powder', value: 109, psxtext: 'Sleepy Powder'},
        KnockoutDust: {text: 'Knockout Dust', value: 110, psxtext: 'Knockout Dust'},
        Rust: {text: 'Rust', value: 111, psxtext: 'Rust'},
        GraveDirt: {text: 'Grave Dirt', value: 112, psxtext: 'Grave Dirt'},
        Ash: {text: 'Ash', value: 113, psxtext: 'Ash'},
        Hairball: {text: 'Hairball', value: 114, psxtext: 'Hairball'},
        Needle: {text: 'Needle', value: 115, psxtext: 'Needle'},
        MirrorPiece: {text: 'Mirror Piece', value: 116, psxtext: 'Mirror Piece'},
        WadOfWool: {text: 'Wad Of Wool', value: 117, psxtext: 'Wad Of Wool'},
        MessyScroll: {text: 'Messy Scroll', value: 118, psxtext: 'Messy Scroll'},
        GreenballBun: {text: 'Greenball Bun', value: 119, psxtext: 'Greenball Bun'},
        TakoBug: {text: 'Tako Bug', value: 120, psxtext: 'Tako Bug'}
    }
)

const DEBUG_STEPS = Object.freeze(
    {
            NODEBUG: {text: '--', value: 0},
            INITSTATITEM: {text: 'Initialize item stats', value: 1},
            INITCARDS: {text: 'Initialize cards', value: 2},
            MATERIALINIT: {text: 'Initialize material', value: 3},
            SETACTIVEWORLDCARD: {text: 'Set active World Card', value: 4},
            ITEMENERGY: {text: 'Calculate item energy', value: 5},
            MATERIALCODE: {text: 'Apply material code', value: 6},
            ITEMCODE: {text: 'Apply item code', value: 7},
            PUSHCARDS: {text: 'Push cards', value: 8},
            ACTIVATECARDS: {text: 'Activate cards', value: 9},
            CHECKTYPEEFFECTS: {text: 'Check type effects', value: 10},
            INCREASEESSENCES: {text: 'Increase essences', value: 11},
            CALCULATESTATS: {text: 'Calculate stats', value: 12}
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
    ITEM,
    DEBUG_STEPS
}
