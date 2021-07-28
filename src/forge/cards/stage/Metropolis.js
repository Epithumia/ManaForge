import {Card} from "@/forge/cards/Card";
import {IMMUNITY} from "@/forge/enums";

class Metropolis extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Metropolis"
            case 'jp':
                return "都市"
            default:
                return "Metropolis"
        }
    }

    /**
     * @param price : int
     * @returns int
     * @constructor
     */
    PRICE(price) {
        price += 1500;
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
        if (f.ROBE()) {
            f.setMagic(f.perc150(f.getMagic()));
            f.setImmunity(f.getImmunity() | IMMUNITY.Confusion.value);
        } else {
            f.setMagic(f.perc125(f.getMagic()));
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

export {Metropolis};
