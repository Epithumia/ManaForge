import {Item} from "@/forge/items/Item";
import {Fertility_Goddess} from "@/forge/cards/heaven_gods";

class Ear_Of_Wheat extends Item {
    constructor() {
        super();
    }

    value = 104

    text(language) {
        switch(language) {
            case 'classic':
                return "Ear Of Wheat"
            case 'jp':
                return "ムギの穂"
            default:
                return "Ear Of Wheat"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.explain_item_code += "This item can add the Fertility Goddess card if there are at least 5 essence points combined and Dryad is at 3 or more. "
        let card_check = "The condition is not verified (Total = " + f.ESSTOTAL() + " and Dryad = " + f.getDr() + ")<br>"
        if (f.getDr() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Fertility_Goddess();
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Ear_Of_Wheat};
