import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {Sacrificed_Nymph} from "@/forge/cards/maidens";
import {PLUNGE2} from "@/forge/plunges/enums";

class Beast_Headed_God extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Beast-headed God"
            case 'jp':
                return "獣頭神"
            default:
                return "Beast-Headed God"
        }
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 6660;
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
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        f.stat_limits(-10, 20, STAT.ALL);
        f.stat_min(15, STAT.HP);
        f.decrease_stat(STAT.ALL);
        if (f.KNIFE()) {
            f.setPlunge2(PLUNGE2.Poison_Blade);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
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

export {Beast_Headed_God};
