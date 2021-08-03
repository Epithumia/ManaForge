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

const DEBUG_STEPS = Object.freeze(
    {
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
            CALCULATESTATS: {text: 'Calculate stats', value: 12},
            NODEBUG: {text: '--', value: 0},
    }
)

export {
    ESSENCE,
    IMMUNITY,
    SPECIAL,
    STAT,
    STICKY_F,
    WORLD_CARD,
    MATERIAL,
    EQUIP,
    DEBUG_STEPS
}
