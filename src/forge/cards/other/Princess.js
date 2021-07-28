import {Card} from "@/forge/cards/Card";
import {Metropolis} from "@/forge/cards/stage";
import {STAT} from "@/forge/enums";

class Princess extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Princess"
            case 'jp':
                return "王女様"
            default:
                return "Princess"
        }
    }

    PRICE(price) {
        price += 1500;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);

    }

    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.DEF);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.DEF);
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

export {Princess};
