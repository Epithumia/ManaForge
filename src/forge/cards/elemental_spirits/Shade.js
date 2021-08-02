import {Card} from "@/forge/cards/Card";
import {ESSENCE, STAT} from "@/forge/enums";

class Shade extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Shade"
            case 'jp':
                return "シェイド"
            default:
                return "Shade"
        }
    }

    price(price) {
        price += 250;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.increase_stat(STAT.SPR);
        f.taint(ESSENCE.SHADE);
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

export {Shade};
