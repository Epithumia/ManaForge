import {Poison_Blade, Quick_Blade, Sinister_Blade} from "@/forge/plunges/knife";
import {Double_Shot, Jump, Shot, Thrust, Uppercut} from "@/forge/plunges/index";
import {Flame_Tongue, Moonlight, Sunlight, Vampsword} from "@/forge/plunges/sword";
import {Dragonslayer, Woodchopper} from "@/forge/plunges/axe";
import {Treefeller} from "@/forge/plunges/2h_axe";
import {Chaotic_Avenger, Ragnarok} from "@/forge/plunges/2h_sword";
import {Magma_Hammer, Mjolnir, Quake_Hammer, Sledgehammer} from "@/forge/plunges/hammer";
import {Gungnir, Spear_Of_Light, Trident} from "@/forge/plunges/spear";
import {Caduceus, Demonicide, Electrosceptre, Golden_Touch} from "@/forge/plunges/staff";
import {Hand_Of_Midas} from "@/forge/plunges/glove";
import {Game_Of_Death, Green_Princess, Red_Dream} from "@/forge/plunges/flail";
import {
        Elven_Archer,
        Flaming_Arrow,
        Icicle, Lunar_Shot,
        Magical_Shot,
        Medusas_Arrow,
        Phoenix_Falling,
        Solar_Flare
} from "@/forge/plunges/bow";

const PLUNGE1 = Object.freeze(
    {
        Thrust: new Thrust(),
        Double_Shot: new Double_Shot(),
        Caduceus: new Caduceus(),
        Chaotic_Avenger: new Chaotic_Avenger(),
        Green_Princess: new Green_Princess(),
        Gungnir: new Gungnir(),
        Magical_Shot: new Magical_Shot(),
        Phoenix_Falling: new Phoenix_Falling(),
        Solar_Flare: new Solar_Flare(),
        Spear_of_Light: new Spear_Of_Light(),
        Trident: new Trident(),
        Flaming_Arrow: new Flaming_Arrow(),  // Premade bow only
        Medusas_Arrow: new Medusas_Arrow(),  // Premade bow only
        Icicle: new Icicle()                 // Premade bow only
    }
)
const PLUNGE2 = Object.freeze(
    {
        Uppercut: new Uppercut(),
        Shot: new Shot(),
        Dragonslayer: new Dragonslayer(),
        Elven_Archer: new Elven_Archer(),
        Flame_Tongue: new Flame_Tongue(),
        Game_of_Death: new Game_Of_Death(),
        Hand_of_Midas: new Hand_Of_Midas(),
        Lunar_Shot: new Lunar_Shot(),
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
        Red_Dream: new Red_Dream(),
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
