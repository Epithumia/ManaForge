import {Card} from "@/forge/cards/Card";
import {Metropolis} from "@/forge/cards/stage";
import {PLUNGE2, STAT} from "@/forge/enums";

class Clown extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Clown"
            case 'jp':
                return "道化師"
            default:
                return "Clown"
        }
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 250;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);

    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-5, 12, STAT.ALL);
        } else {
            f.stat_limits(-3, 9, STAT.ALL);
        }
        if (f.KNIFE()) {
            f.setPlunge2(PLUNGE2.Quick_Blade);
        }
        f.setSharp(f.perc150(f.getSharp()));
        f.setHeavy(f.perc50(f.getHeavy()));
        f.setThrust(f.perc150(f.getThrust()));
        f.setStrike(f.perc50(f.getStrike()));
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

export {Clown};
