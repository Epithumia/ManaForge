import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE3} from "@/forge/plunges/enums";

class Blacksmith_God extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Blacksmith God"
            case 'jp':
                return "鍛冶の神"
            default:
                return "Blacksmith God"
        }
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    price(price) {
        price += 2800;
        return price;
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-5, 10, STAT.DEF);
        f.stat_min(10, STAT.DEF);
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Sledge_Hammer);
        }
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

export {Blacksmith_God};
