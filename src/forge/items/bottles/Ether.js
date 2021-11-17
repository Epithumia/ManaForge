import {Item} from "@/forge/items/Item";
import {Blacksmith_God} from "@/forge/cards/heaven_gods";
import {Spirit_Of_Mountain} from "@/forge/cards/spirits";

class Ether extends Item {
    constructor() {
        super();
    }

    value = 96

    text(language) {
        switch(language) {
            case 'classic':
                return "Ether"
            case 'jp':
                return "エール"
            default:
                return "Ether"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.explain_item_code += "This item will add the Blacksmith God if there are at least 3 Aura essence levels and at least 3 Gnome essence levels. " +
            "Otherwise it will add the Spirit of Mountain card. "
        let card_check = "The condition is not verified (Aura = " + f.getAu() + " and Gnome = " + f.getGn() + "), the Spirit of Mountain" +
            "card is pushed into the pre-hidden slot.<br>"
        if (f.getAu() >= 3 && f.getGn() >= 3 && f.getEnergy() >= 8) {
            card_check = "The condition is verified, the Blacksmith God card is pushed into the pre-hidden slot."
            f.prehidden = new Blacksmith_God();
        }
        if (f.getAu() < 3 || f.getGn() < 3) {
            f.prehidden = new Spirit_Of_Mountain();
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Ether};
