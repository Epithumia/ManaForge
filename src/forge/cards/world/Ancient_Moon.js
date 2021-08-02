import {WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
import {No_Card} from "@/forge/cards/No_Card";

class Ancient_Moon extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Ancient Moon"
            case 'jp':
                return "太古の月"
            default:
                return "Ancient Moon"
        }
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    price(price) {
        price += 2200;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
    }

    /**
     *
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
     *
     * @param f : ForgedItem
     * @constructor
     */
    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.ANCIENT_MOON;
        }
    }

}

export {Ancient_Moon};
