import {Poison_Blade, Quick_Blade, Sinister_Blade} from "@/forge/plunges/knife";
import {Double_Shot, Jump, Shot, Thrust, Uppercut} from "@/forge/plunges/index";

const PLUNGE1 = Object.freeze(
    {
        Thrust: Thrust,
        Double_Shot: Double_Shot,
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
        Uppercut: Uppercut,
        Shot: Shot,
        Dragonslayer: {text: 'Dragonslayer', value: 3, psxtext: 'Dragonslayer'},
        Elven_Archer: {text: 'Elven Archer', value: 4, psxtext: 'Elven Archer'},
        Flame_Tongue: {text: 'Flame Tongue', value: 5, psxtext: 'Flame Tongue'},
        Game_of_Death: {text: 'Game of Death', value: 6, psxtext: 'Game of Death'},
        Hand_of_Midas: {text: 'Hand of Midas', value: 7, psxtext: 'Hand of Midas'},
        Lunar_Shot: {text: 'Lunar Shot', value: 8, psxtext: 'Lunar Shot'},
        Poison_Blade: Poison_Blade,
        Quick_Blade: Quick_Blade,
        Sunlight: {text: 'Sunlight', value: 11, psxtext: 'Sunlight'},
        Vampsword: {text: 'Vampsword', value: 12, psxtext: 'Vampsword'}
    }
)
const PLUNGE3 = Object.freeze(
    {
        Jump: Jump,
        Demonicide: {text: 'Demonicide', value: 2, psxtext: 'Demonicide'},
        Electrosceptre: {text: 'Electrosceptre', value: 3, psxtext: 'Electrosceptre'},
        Golden_Touch: {text: 'Golden Touch', value: 4, psxtext: 'Golden Touch'},
        Magma_Hammer: {text: 'Magma Hammer', value: 5, psxtext: 'Magma Hammer'},
        Mjolnir: {text: 'Mjolnir', value: 6, psxtext: 'Mjolnir'},
        Moonlight: {text: 'Moonlight', value: 7, psxtext: 'Moonlight'},
        Quake_Hammer: {text: 'Quake Hammer', value: 8, psxtext: 'Quake Hammer'},
        Ragnarok: {text: 'Ragnarok', value: 9, psxtext: 'Ragnarok'},
        Red_Dream: {text: 'Red Dream', value: 10, psxtext: 'Red Dream'},
        Sinister_Blade: Sinister_Blade,
        Sledge_Hammer: {text: 'Sledge Hammer', value: 12, psxtext: 'Sledge Hammer'},
        Treefeller: {text: 'Treefeller', value: 13, psxtext: 'Treefeller'},
        Woodchopper: {text: 'Woodchopper', value: 14, psxtext: 'Woodchopper'},
        //Hand_Of_Midas: {text: 'Hand of Midas', value: 101} // Premade glove only ?
    }
)
export {PLUNGE3};
export {PLUNGE2};
export {PLUNGE1};
