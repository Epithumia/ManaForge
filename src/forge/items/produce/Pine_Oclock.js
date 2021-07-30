import {IMMUNITY} from "@/forge/enums";
import {Ragnarok} from "@/forge/cards/world";
import {Item} from "@/forge/items/Item";

class Pine_Oclock extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Pine o’Clock"
            case 'jp':
                return "時計パイン"
            default:
                return "Pine o’Clock"
        }
    }

    energy() {
        return 24;
    }

    code(f) {
        // this is known to be likely incomplete
        f.setImmunity(IMMUNITY.Sleep.value);
        if (f.getSa() * f.getGn() * f.getJi() * f.getUn() > 0
            && f.getEnergy() >= 8) {
            f.prehidden = new Ragnarok();
        }
    }

    source() {
        return ["Orchard"];
    }

}

export {Pine_Oclock};
