import {IMMUNITY} from "@/forge/enums";
import {Tower} from "@/forge/cards/stage";
import {Item} from "@/forge/items/Item";

class Healing_Claw extends Item {
    constructor() {
        super();
    }

    value = 75

    text(language) {
        switch(language) {
            case 'classic':
                return "Healing Claw"
            case 'jp':
                return "いやしの爪"
            default:
                return "Healing Claw"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.explain_item_code += "On a Shield, this will add immunity to the poison status effect. "
        let type_check = "Since we are not tempering a Shield, this does not happen."
        if (f.SHIELD()) {
            type_check = "Since we are tempering a Shield, this adds the poison immunity to it."
            f.setImmunity(f.getImmunity() | IMMUNITY.Poison.value);
        }
        f.explain_item_code += type_check + "<br>"
        f.explain_item_code += "This item can add the Tower card if the Gnome essence level is at least 5 and the Salamander essence level is at 0. "
        let card_check = "The condition is not verified (Wisp = " + f.getWi() + " and Sala = " + f.getSa() + ")<br>"
        if (0 === f.getSa() && f.getWi() > 0 && f.getEnergy() >= 8) {
            f.prehidden = new Tower();
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Healing_Claw};
