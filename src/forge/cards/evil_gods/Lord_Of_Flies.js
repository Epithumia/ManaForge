import {Card} from "@/forge/cards/Card";
import {PLUNGE3, STAT} from "@/forge/enums";
import {Sacrificed_Nymph} from "@/forge/cards/maidens";

class Lord_Of_Flies extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Lord of Flies"
            case 'jp':
                return "蠅の王"
            default:
                return "Lord of Flies"
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
        f.stat_min(15, STAT.SKL);
        f.decrease_stat(STAT.ALL);
        if (f.KNIFE()) {
            f.setPlunge3(PLUNGE3.Sinister_Blade);
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

export {Lord_Of_Flies};
