import {IMMUNITY} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Zombie_Claw extends Item {
    constructor() {
        super();
    }

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
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis.value);
        }
    }

    source() {
        return [];
    }

}

export {Zombie_Claw};
