import {Card} from "@/forge/cards/Card";
import {IMMUNITY} from "@/forge/enums";

class Sacrificed_Nymph extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Sacrificed Nymph"
            case 'jp':
                return "ささげられし娘"
            default:
                return "Sacrificed Nymph"
        }
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 1000;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Petrify.value);
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

export {Sacrificed_Nymph};
