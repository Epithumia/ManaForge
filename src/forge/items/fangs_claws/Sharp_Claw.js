import {Item} from "@/forge/items/Item";
import {God_Of_Destruction} from "@/forge/cards/evil_gods";

class Sharp_Claw extends Item {
    constructor() {
        super();
    }

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
        f.setSharp(f.perc150(f.getSharp()));
        f.setHeavy(f.perc50(f.getHeavy()));
        if (0 === f.getUn() && f.getSa() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new God_Of_Destruction();
        }
    }

    source() {
        return ["Drop"];
    }

}

export {Sharp_Claw};
