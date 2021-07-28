import {PLUNGE1, STAT} from "@/forge/enums";
import {Card} from "@/forge/card";

class Sage extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Sage"
            case 'jp':
                return "智者"
            default:
                return "Sage"
        }
    }

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

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.ALL);
        f.increase_stat(STAT.MAG);
        f.increase_stat(STAT.DEF);
        if (f.BOW()) {
            f.setPlunge1(PLUNGE1.Phoenix_Falling);
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

export {Sage};