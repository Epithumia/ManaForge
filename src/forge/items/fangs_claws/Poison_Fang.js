import {Beast_Headed_God} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Poison_Fang extends Item {
    constructor() {
        super();
    }

    value = 72

    text(language) {
        switch(language) {
            case 'classic':
                return "Poison Fang"
            case 'jp':
                return "毒の牙"
            default:
                return "Poison Fang"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.explain_item_code += "This item increases the Tech stat by 50% and decreases the Force stat by 50%. "
        f.setForce(f.perc50(f.getForce()));
        f.setTech(f.perc150(f.getTech()));
        f.explain_item_code += "This item can add the Beast Headed God card if the Dryad essence level is at least 5 and the Aura essence level is at 0. "
        let card_check = "The condition is not verified (Dryad = " + f.getDr() + " and Aura = " + f.getAu() + ")<br>"
        if (0 === f.getAu() && f.getDr() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Beast_Headed_God();
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return []
    }

}

export {Poison_Fang};
