import {Item} from "@/forge/items/Item";
import {Wisdom_Goddess} from "@/forge/cards/heaven_gods";

class Aroma_Oil extends Item {
    constructor() {
        super();
    }

    value = 92

    text(language) {
        switch(language) {
            case 'classic':
                return "Aroma Oil"
            case 'jp':
                return "香油"
            default:
                return "Aroma Oil"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        f.explain_item_code += "This item can add a card and also affect armors made of hide or skin.<br>"
        if (f.HIDE()) {
            f.explain_item_code += "Since this is the case here, it increases its Strike, Slash and thrust values by 50%.<br>"
            f.setStrike(f.perc150(f.getStrike()));
            f.setSlash(f.perc150(f.getSlash()));
            f.setThrust(f.perc150(f.getThrust()));
        }
        f.explain_item_code += "This item can add the Wisdom Goddess card if there are at least 6 essence points combined. "
        let card_check = "The condition is not verified (Total = " + f.ESSTOTAL() + ")<br>"
        if (f.ESSTOTAL() >= 6 && f.getEnergy() >= 8) {
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
            f.prehidden = new Wisdom_Goddess();
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Aroma_Oil};
