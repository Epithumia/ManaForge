import {IMMUNITY} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Zombie_Claw extends Item {
    constructor() {
        super();
    }

    value = 76

    text(language) {
        switch(language) {
            case 'classic':
                return "Zombie Claw"
            case 'jp':
                return "死者の爪"
            default:
                return "Zombie Claw"
        }
    }

    energy() {
        return 32
    }

    code(f) {
        f.explain_item_code += "On a Pendant, this will add immunity to the paralysis status effect. "
        let type_check = "Since we are not tempering a Pendant, this item has no effect."
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis.value);
            type_check = "Since we are tempering a Shield, this adds the paralysis immunity to it."
        }
        f.explain_item_code += type_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Zombie_Claw};
