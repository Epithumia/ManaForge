import {Item} from "@/forge/items/Item";
import {Thunder_God} from "@/forge/cards/heaven_gods";

class Electricity extends Item {
    constructor() {
        super();
    }

    value = 102

    text(language) {
        switch(language) {
            case 'classic':
                return "Electricity"
            case 'jp':
                return "電気の素"
            default:
                return "Electricity"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.explain_item_code += "This item can add the Fertility Goddess card if there are at least " +
            "3 Wisp essence points and at least 3 Salamander essence points and at least 3 Jinn essence points."
        let card_check = "The condition is not verified (Wisp = " + f.ESSTOTAL() + " and Sala = " + f.getSa() + " and Jinn = " + f.getJi() + ")<br>"
        if (f.getWi() >= 3 && f.getSa() >= 3 && f.getJi() >= 3 && f.getEnergy() >= 8) {
            f.prehidden = new Thunder_God();
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Electricity};
