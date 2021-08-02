import {ESSENCE, STAT} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";

class Aura extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Aura"
            case 'jp':
                return "アウラ"
            default:
                return "Aura"
        }
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    price(price) {
        price += 250;
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
        f.increase_stat(STAT.LCK);
        f.taint(ESSENCE.AURA);
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

export {Aura};
