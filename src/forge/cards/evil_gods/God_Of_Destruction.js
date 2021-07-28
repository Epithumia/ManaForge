import {Card} from "@/forge/cards/Card";
import {IMMUNITY, PLUNGE2, STAT} from "@/forge/enums";
import {Sacrificed_Nymph} from "@/forge/card";

class God_Of_Destruction extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "God of Destruction"
            case 'jp':
                return "破壊神"
            default:
                return "God of Destruction"
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
        f.stat_min(15, STAT.PWR);
        f.decrease_stat(STAT.ALL);
        if (f.SWORD()) {
            f.setPlunge2(PLUNGE2.Flame_Tongue);
        }
        f.setImmunity(f.getImmunity() | IMMUNITY.Freeze.value);
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

export {God_Of_Destruction};
