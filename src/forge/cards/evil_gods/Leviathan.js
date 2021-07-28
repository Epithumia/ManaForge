import {Card} from "@/forge/cards/Card";
import {PLUNGE3, STAT} from "@/forge/enums";
import {Sacrificed_Nymph} from "@/forge/cards/maidens";

class Leviathan extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Leviathan"
            case 'jp':
                return "巨獣"
            default:
                return "Leviathan"
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
        f.stat_min(15, STAT.DEF);
        f.decrease_stat(STAT.ALL);
        if (f.THAXE()) {
            f.setPlunge3(PLUNGE3.Treefeller);
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

export {Leviathan};
