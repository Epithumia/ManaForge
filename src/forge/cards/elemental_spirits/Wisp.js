import {ESSENCE, STAT} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";

class Wisp extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Wisp"
            case 'jp':
                return "ウィスプ"
            default:
                return "Wisp"
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
        f.increase_stat(STAT.CHM);
        f.taint(ESSENCE.WISP);
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

export {Wisp};
