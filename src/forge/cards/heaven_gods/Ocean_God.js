import {Card} from "@/forge/cards/Card";
import {IMMUNITY, STAT} from "@/forge/enums";
import {PLUNGE1} from "@/forge/plunges/enums";

class Ocean_God extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Ocean God"
            case 'jp':
                return "海神"
            default:
                return "Ocean God"
        }
    }

    PRICE(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 9, STAT.PWR);
        f.stat_limits(-3, 9, STAT.SKL);
        f.stat_min(7, STAT.PWR);
        f.stat_min(7, STAT.SKL);
        if (f.SPEAR()) {
            f.setPlunge1(PLUNGE1.Trident);
        }
        f.setImmunity(f.getImmunity() | IMMUNITY.Flameburst.value);
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}

export {Ocean_God};
