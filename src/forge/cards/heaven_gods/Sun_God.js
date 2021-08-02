import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE1, PLUNGE2} from "@/forge/plunges/enums";

class Sun_God extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Sun God"
            case 'jp':
                return "太陽神"
            default:
                return "Sun God"
        }
    }

    price(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-5, 10, STAT.CHM);
        f.stat_min(10, STAT.CHM);
        if (f.SWORD()) {
            f.setPlunge2(PLUNGE2.Sunlight);
        } else if (f.BOW()) {
            f.setPlunge1(PLUNGE1.Solar_Flare);
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

export {Sun_God};
