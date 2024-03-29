import {STAT, WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
import {No_Card} from "@/forge/cards/No_Card";
import {Enticed_Nymph} from "@/forge/cards/maidens";

class Dying_Earth extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Dying Earth"
            case 'jp':
                return "死せる大地"
            default:
                return "Dying Earth"
        }
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    price(price) {
        price += 2600;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-5, 12, STAT.ALL);
        if ((f.hidden instanceof Enticed_Nymph)
            || (!(f.first instanceof Enticed_Nymph)
                && !(f.second instanceof Enticed_Nymph)
                && !(f.third instanceof Enticed_Nymph))) {
            f.decrease_stat(STAT.ALL);
        }
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.setHidden(new No_Card());
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.DYING_EARTH;
        }
    }
}

export {Dying_Earth};
