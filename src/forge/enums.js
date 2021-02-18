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
        Thrust: 1,
        Shot: 2,
        Caduceus: 3,
        Chaotic_Avenger: 4,
        Green_Princess: 5,
        Gungnir: 6,
        Magical_Shot: 7,
        Phoenix_Falling: 8,
        Solar_Flare: 9,
        Spear_of_Light: 10,
        Trident: 11
    }
)

const PLUNGE2 = Object.freeze(
    {
        Uppercut: 1,
        Double_Shot: 2,
        Dragonslayer: 3,
        Elven_Archer: 4,
        Flame_Tongue: 5,
        Game_of_Death: 6,
        Hand_of_Midas: 7,
        Lunar_Shot: 8,
        Poison_Blade: 9,
        Quick_Blade: 10,
        Sunlight: 11,
        Vampsword: 12
    }
)

const PLUNGE3 = Object.freeze(
    {
        Jump: 1,
        Demonicide: 2,
        Electrosceptre: 3,
        Golden_Touch: 4,
        Magma_Hammer: 5,
        Mjolnir: 6,
        Moonlight: 7,
        Quake_Hammer: 8,
        Ragnarok: 9,
        Red_Dream: 10,
        Sinister_Blade: 11,
        Sledge_Hammer: 12,
        Treefeller: 13,
        Woodchopper: 14
    }
)

const IMMUNITY = Object.freeze(
    {
        value: 0,
        Sleep: 1,
        Poison: 2,
        Paralysis: 4,
        Confusion: 8,
        Darkness: 16,
        Petrify: 32,
        Flameburst: 64,
        Freeze: 128
    }
)

const SPECIAL = Object.freeze(
    {
        No_Effect: 1,
        No_Regen: 2,
        No_Revive: 3,
        Auto_Revive: 4,
        Fast_Revive: 5,
        Extra_Exp: 6,
        Extra_Lucre: 7,
        Stare_Immunity: 8,
        Share_Exp: 9,
        Move_Regen: 10
    }
)

const STICKY_F = Object.freeze(
    {
        STICKY: 1,
        UNSTICKY: 0
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
    WORLD_CARD
}
