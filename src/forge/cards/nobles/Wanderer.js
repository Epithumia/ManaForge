import {PLUNGE3, STAT} from "@/forge/enums";
import {Card} from "@/forge/card";

class Wanderer extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Wanderer"
            case 'jp':
                return "探索者"
            default:
                return "Wanderer"
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
        f.increase_stat(STAT.SKL);
        f.increase_stat(STAT.SPR);
        if (f.AXE()) {
            f.setPlunge3(PLUNGE3.Woodchopper);
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

export {Wanderer};
