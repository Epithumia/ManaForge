import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";

class Wolf extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Wolf"
            case 'jp':
                return "狼"
            default:
                return "Wolf"
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
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_limits(-3, 5, STAT.HP);
        f.stat_min(3, STAT.SKL);
        f.stat_min(3, STAT.HP);
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

export {Wolf};
