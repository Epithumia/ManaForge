import {Item} from "@/forge/items/Item";
import {God_Of_Destruction} from "@/forge/cards/evil_gods";

class Sharp_Claw extends Item {
    constructor() {
        super();
    }

    value = 71

    text(language) {
        switch(language) {
            case 'classic':
                return "Sharp Claw"
            case 'jp':
                return "鋭い爪"
            default:
                return "Sharp Claw"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.explain_item_code += "This item increases the Sharp stat by 50% and decreases the Heavy stat by 50%. "
        f.setSharp(f.perc150(f.getSharp()));
        f.setHeavy(f.perc50(f.getHeavy()));
        f.explain_item_code += "This item can add the God of Destruction card if the Salamander essence level is at least 5 and the Undine essence level is at 0. "
        let card_check = "The condition is not verified (Sala = " + f.getSa() + " and Undine = " + f.getUn() + ")<br>"
        if (0 === f.getUn() && f.getSa() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new God_Of_Destruction();
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return ["Drop"];
    }

}

export {Sharp_Claw};
