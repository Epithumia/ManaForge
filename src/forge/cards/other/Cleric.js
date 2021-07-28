import {Card} from "@/forge/cards/Card";
import {Metropolis} from "@/forge/cards/stage";
import {STAT} from "@/forge/enums";
import {PLUNGE3} from "@/forge/plunges/enums";

class Cleric extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Cleric"
            case 'jp':
                return "僧侶"
            default:
                return "Cleric"
        }
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 500;
        return price;
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);

    }

    /**
     *
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
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.SPR);
        }
        if (f.STAFF()) {
            f.setPlunge3(PLUNGE3.Demonicide);
        }
        f.setSharp(f.perc50(f.getSharp()));
        f.setHeavy(f.perc150(f.getHeavy()));
        f.setSlash(f.perc50(f.getSlash()));
        f.setStrike(f.perc150(f.getStrike()));
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

export {Cleric};
