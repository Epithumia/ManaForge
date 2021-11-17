import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {Witch_Of_Moon} from "@/forge/cards/evil_gods";

class Vampire_Fang extends Item {
    constructor() {
        super();
    }

    value = 77

    text(language) {
        switch(language) {
            case 'classic':
                return "Vampire Fang"
            case 'jp':
                return "吸血牙"
            default:
                return "Vampire Fang"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.explain_item_code += "This item changes the limits of the Charm and Spirit stats to be between -3 and 5, and increases them by one step.<br>"
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_limits(-3, 5, STAT.SPR);
        f.increase_stat(STAT.CHM);
        f.increase_stat(STAT.SPR);
        f.explain_item_code += "This item can add the Witch of Moon card if the Undine essence level is at least 5 and the Jinn essence level is at 0. "
        let card_check = "The condition is not verified (Undine = " + f.getUn() + " and Jinn = " + f.getJi() + ")<br>"
        if (0 === f.getJi() && f.getUn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Witch_Of_Moon();
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Vampire_Fang};
