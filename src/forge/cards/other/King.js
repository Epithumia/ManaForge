import {Card} from "@/forge/cards/Card";
import {Metropolis} from "@/forge/cards/stage";
import {STAT} from "@/forge/enums";
import {PLUNGE2} from "@/forge/plunges/enums";

class King extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "King"
            case 'jp':
                return "王様"
            default:
                return "King"
        }
    }

    price(price) {
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
            f.increase_stat(STAT.PWR);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.PWR);
        }

        if (f.GLOVE() && f.getAu() > 0) {
            f.setPlunge2(PLUNGE2.Hand_of_Midas);
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

export {King};
