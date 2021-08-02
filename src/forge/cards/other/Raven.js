import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";

class Raven extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Raven"
            case 'jp':
                return "カラス"
            default:
                return "Raven"
        }
    }

    price(price) {
        price += 300;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.MAG);
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_min(3, STAT.MAG);
        f.stat_min(3, STAT.CHM);
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

export {Raven};
