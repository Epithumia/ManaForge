import {SPECIAL, STAT} from "@/forge/enums";
import {Card} from "@/forge/card";
import {Spring} from "@/forge/cards/stage/Spring";

class Unicorn extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Unicorn"
            case 'jp':
                return "一角"
            default:
                return "Narwhal"
        }
    }

    PRICE(price) {
        price += 2500;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.DEF);
        f.stat_limits(-3, 5, STAT.MAG);
        f.stat_min(3, STAT.DEF);
        f.stat_min(3, STAT.MAG);
        if (f.RING() || f.PENDANT()) {
            if ((f.first instanceof Spring || f.second instanceof Spring
                || f.third instanceof Spring) && !(f.hidden instanceof Spring)) {
                f.setSpecial(SPECIAL.Fast_Revive);
            }
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

export {Unicorn};
