import {Leviathan} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Giants_Horn extends Item {
    constructor() {
        super();
    }

    value = 73

    text(language) {
        switch(language) {
            case 'classic':
                return "Giant's Horn"
            case 'jp':
                return "巨獣の角"
            default:
                return "Giant's Horn"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.explain_item_code += "This item increases the Heavy stat by 50% and decreases the Sharp stat by 50%. "
        f.setSharp(f.perc50(f.getSharp()));
        f.setHeavy(f.perc150(f.getHeavy()));
        f.explain_item_code += "This item can add the Leviathan card if the Gnome essence level is at least 5 and the Salamander essence level is at 0. "
        let card_check = "The condition is not verified (Gnome = " + f.getGn() + " and Sala = " + f.getSa() + ")<br>"
        if (0 === f.getSa() && f.getGn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Leviathan();
            card_check = "The condition is verified, the card is pushed into the pre-hidden slot."
        }
        f.explain_item_code += card_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Giants_Horn};
