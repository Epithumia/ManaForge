import {Card} from "@/forge/cards/Card";
import {ESSENCE, STAT} from "@/forge/enums";

class Jinn extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Jinn"
            case 'jp':
                return "ジン"
            default:
                return "Jinn"
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
        f.increase_stat(STAT.SKL);
        f.taint(ESSENCE.JINN);
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

export {Jinn};
