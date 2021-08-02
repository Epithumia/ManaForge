import {
    Aura_Gold,
    Aura_Silver,
    Dryad_Gold,
    Dryad_Silver,
    Gnome_Gold,
    Gnome_Silver,
    Jinn_Gold,
    Jinn_Silver,
    Sala_Gold,
    Sala_Silver,
    Shade_Gold,
    Shade_Silver,
    Undine_Gold,
    Undine_Silver,
    Wisp_Gold,
    Wisp_Silver
} from "@/forge/items/coins"
import {
    All_Meat,
    Applesocks,
    Apricat,
    Bellgrapes,
    Boarmelon,
    Bumpkin,
    Cabadillo,
    Cherry_Bombs,
    Citrisquid,
    Conchurnip,
    Cornflower,
    Dialaurel,
    Diceberry,
    Fishy_Fruit,
    Garlicrown,
    Gold_Clover,
    Heart_Mint,
    Honey_Onion,
    Lilipods,
    Loquat_Shoes,
    Mangoelephant,
    Masked_Potato,
    Mush_In_A_Box,
    Needlettuce,
    Orangeopus,
    Orcaplant,
    Peach_Puppy,
    Pear_Oheels,
    Pine_Oclock,
    Rhinoloupe,
    Rocket_Papaya,
    Spade_Basil,
    Spiny_Carrot,
    Springanana, Squalphin, Sweet_Moai, Toadstoolshed, Whalamato
} from "@/forge/items/produce";
import {Angel_Feather, Clear_Feather, Flaming_Quill, Moth_Wing, Raven_Feather} from "@/forge/items/wings_feathers";
import {
    Angry_Eye,
    Blank_Eye,
    Creepy_Eye,
    Dangerous_Eye,
    Little_Eye,
    Silly_Eye,
    Sleepy_Eye,
    Wicked_Eye
} from "@/forge/items/eyes";
import {
    Big_Seed,
    Crooked_Seed,
    Flat_Seed,
    Long_Seed,
    Oblong_Seed,
    Round_Seed,
    Small_Seed,
    Spiny_Seed
} from "@/forge/items/seeds";
import {
    Chaos_Crystal,
    Earth_Stone,
    Fire_Stone,
    Glow_Crystal,
    Moon_Crystal,
    Sun_Crystal, Water_Stone, Wind_Stone
} from "@/forge/items/stones_crystals";
import {
    Giants_Horn,
    Healing_Claw,
    Poison_Fang,
    Scissors,
    Sharp_Claw,
    Vampire_Fang,
    Zombie_Claw
} from "@/forge/items/fangs_claws";
import {No_Item} from "@/forge/items/No_Item";
import {White_Feather} from "@/forge/items/wings_feathers/White_Feather";
import {Acid, Aroma_Oil, Ether, Holy_Water} from "@/forge/items/bottles";
import {Dragon_Blood} from "@/forge/items/bottles/Dragon_Blood";
import {Dragon_Breath, Ghosts_Howl, Mercury, Stinky_Breath, Virgins_Sigh} from "@/forge/items/vials";
import {Electricity} from "@/forge/items/urns/Electricity";
import {Ear_Of_Wheat, Moss} from "@/forge/items/urns";
import {Baked_Roach, Blackened_Bat} from "@/forge/items/pellets";
import {Greenball_Bun, Tako_Bug} from "@/forge/items/other";
import {Ash, Grave_Dirt, Knockout_Dust, Poison_Powder, Rust, Sleepy_Powder, Sulpher} from "@/forge/items/powders";
import {Hairball, Messy_Scroll, Mirror_Piece, Needle, Wad_Of_Wool} from "@/forge/items/pouches";

const item_list = [new No_Item(), new Wisp_Gold(),
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
    new Dragon_Breath(), new Virgins_Sigh(), new Electricity(),
    new Moss(), new Ear_Of_Wheat(), new Baked_Roach(),
    new Blackened_Bat(), new Sulpher(), new Poison_Powder(),
    new Sleepy_Powder(), new Knockout_Dust(), new Rust(),
    new Grave_Dirt(), new Ash(), new Hairball(), new Needle(),
    new Mirror_Piece(), new Wad_Of_Wool(), new Messy_Scroll(),
    new Greenball_Bun(), new Tako_Bug()];
export {item_list};
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
export {ITEM};
