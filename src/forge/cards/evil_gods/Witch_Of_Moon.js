import {Card} from "@/forge/cards/Card";
import {PLUNGE2, STAT} from "@/forge/enums";
import {Sacrificed_Nymph} from "@/forge/card";

class Witch_Of_Moon extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Witch of Moon"
            case 'jp':
                return "月の魔女"
            default:
                return "Lunar Witch"
        }
    }

    PRICE(price) {
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
        f.stat_min(15, STAT.MAG);
        f.decrease_stat(STAT.ALL);
        if (f.SWORD()) {
            f.setPlunge2(PLUNGE2.Vampsword);
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

export {Witch_Of_Moon};
