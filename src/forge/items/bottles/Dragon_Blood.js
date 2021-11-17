import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";
import {God_Of_War} from "@/forge/cards/heaven_gods";

class Dragon_Blood extends Item {
    constructor() {
        super();
    }

    value = 93

    text(language) {
        switch(language) {
            case 'classic':
                return "Dragon Blood"
            case 'jp':
                return "竜の血"
            default:
                return "Dragon Blood"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.explain_item_code += "This item increases all the stats."
        f.increase_stat(STAT.ALL);
        f.explain_item_code += "This item can add the God of War card if there are at least 5 essence points combined and Sala is at 3 or more. "
        let card_check = "The condition is not verified (Total = " + f.ESSTOTAL() + " and Sala = " + f.getSa() + ")<br>"
        if (f.getSa() >= 3 && f.ESSTOTAL() >= 5 && f.getEnergy() >= 8) {
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
            f.prehidden = new God_Of_War();
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Dragon_Blood};
