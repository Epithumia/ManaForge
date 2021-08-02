import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {Sacrificed_Nymph} from "@/forge/cards/maidens";
import {PLUNGE3} from "@/forge/plunges/enums";

class Wings_Of_Darkness extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Wings of Darkness"
            case 'jp':
                return "闇の翼"
            default:
                return "Wings of Darkness"
        }
    }

    price(price) {
        price += 6660;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.SPR);
        f.decrease_stat(STAT.ALL);
        if (f.STAFF()) {
            f.setPlunge3(PLUNGE3.Golden_Touch);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    LEAVING(f) {
        if (f.third instanceof Sacrificed_Nymph) {
            f.setThird(this);
        } else if (f.second instanceof Sacrificed_Nymph) {
            f.setSecond(this);
        } else if (f.first instanceof Sacrificed_Nymph) {
            f.setFirst(this);
        }
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }
}

export {Wings_Of_Darkness};
