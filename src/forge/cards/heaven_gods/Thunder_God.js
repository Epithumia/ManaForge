import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE3} from "@/forge/plunges/enums";

class Thunder_God extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Thunder God"
            case 'jp':
                return "雷神"
            default:
                return "Thunder God"
        }
    }

    PRICE(price) {
        price += 4000;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.PWR);
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_limits(-3, 5, STAT.DEF);
        f.stat_min(5, STAT.PWR);
        f.stat_min(5, STAT.SKL);
        f.stat_min(5, STAT.DEF);
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Mjolnir);
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

export {Thunder_God};
