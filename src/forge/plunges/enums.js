import {Poison_Blade, Quick_Blade, Sinister_Blade} from "@/forge/plunges/knife";
import {Double_Shot, Jump, Shot, Thrust, Uppercut} from "@/forge/plunges/index";
import {Flame_Tongue, Moonlight, Sunlight, Vampsword} from "@/forge/plunges/sword";
import {Dragonslayer, Woodchopper} from "@/forge/plunges/axe";
import {Treefeller} from "@/forge/plunges/2h_axe";
import {Chaotic_Avenger, Ragnarok} from "@/forge/plunges/2h_sword";
import {Magma_Hammer, Mjolnir, Quake_Hammer, Sledgehammer} from "@/forge/plunges/hammer";
import {Gungnir, Spear_Of_Light, Trident} from "@/forge/plunges/spear";
import {Caduceus, Demonicide, Electrosceptre, Golden_Touch} from "@/forge/plunges/staff";

const PLUNGE1 = Object.freeze(
    {
        Thrust: new Thrust(),
        Double_Shot: new Double_Shot(),
        Caduceus: new Caduceus(),
        Chaotic_Avenger: new Chaotic_Avenger(),
        Green_Princess: {text: 'Green Princess', value: 5, psxtext: 'Green Princess'},
        Gungnir: new Gungnir(),
        Magical_Shot: {text: 'Magical Shot', value: 7, psxtext: 'Magical Shot'},
        Phoenix_Falling: {text: 'Phoenix Falling', value: 8, psxtext: 'Phoenix Falling'},
        Solar_Flare: {text: 'Solar Flare', value: 9, pstext: 'Solar Flare'},
        Spear_of_Light: new Spear_Of_Light(),
        Trident: new Trident(),
        Flaming_Arrow: {text: 'Flaming Arrow', value: 101, psxtext: 'Flaming Arrow'},    // Premade bow only
        Medusas_Arrow: {text: 'Medusa’s Arrow', value: 102, psxtext: 'Medusa’s Arrow'},  // Premade bow only
        Icicle: {text: 'Icicle', value: 103, psxtext: 'Icicle'}                          // Premade bow only
    }
)
const PLUNGE2 = Object.freeze(
    {
        Uppercut: new Uppercut(),
        Shot: new Shot(),
        Dragonslayer: new Dragonslayer(),
        Elven_Archer: {text: 'Elven Archer', value: 4, psxtext: 'Elven Archer'},
        Flame_Tongue: new Flame_Tongue(),
        Game_of_Death: {text: 'Game of Death', value: 6, psxtext: 'Game of Death'},
        Hand_of_Midas: {text: 'Hand of Midas', value: 7, psxtext: 'Hand of Midas'},
        Lunar_Shot: {text: 'Lunar Shot', value: 8, psxtext: 'Lunar Shot'},
        Poison_Blade: new Poison_Blade(),
        Quick_Blade: new Quick_Blade(),
        Sunlight: new Sunlight(),
        Vampsword: new Vampsword()
    }
)
const PLUNGE3 = Object.freeze(
    {
        Jump: new Jump(),
        Demonicide: new Demonicide(),
        Electrosceptre: new Electrosceptre(),
        Golden_Touch: new Golden_Touch(),
        Magma_Hammer: new Magma_Hammer(),
        Mjolnir: new Mjolnir(),
        Moonlight: new Moonlight(),
        Quake_Hammer: new Quake_Hammer(),
        Ragnarok: new Ragnarok(),
        Red_Dream: {text: 'Red Dream', value: 10, psxtext: 'Red Dream'},
        Sinister_Blade: new Sinister_Blade(),
        Sledge_Hammer: new Sledgehammer(),
        Treefeller: new Treefeller(),
        Woodchopper: new Woodchopper(),
        //Hand_Of_Midas: {text: 'Hand of Midas', value: 101} // Premade glove only ?
    }
)
export {PLUNGE3};
export {PLUNGE2};
export {PLUNGE1};
