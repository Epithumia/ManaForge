import {Card} from "@/forge/cards/Card";
import {STAT, WORLD_CARD} from "@/forge/enums";
import {Fallen_Angel} from "@/forge/cards/evil_gods";

class Pixie_Of_Pride extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Pixie (Pride)"
            case 'jp':
                return "小悪魔(傲慢)"
            default:
                return "Pixie (Red Hat)"
        }
    }

    price(price) {
        price += 150;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if (WORLD_CARD.RAGNAROK === f.awc) {
            if (f.getEnergy() >= 8) {
                if (f.third instanceof Pixie_Of_Pride) {
                    f.setThird(new Fallen_Angel());
                } else if (f.second instanceof Pixie_Of_Pride) {
                    f.setSecond(new Fallen_Angel());
                } else if (f.first instanceof Pixie_Of_Pride) {
                    f.setFirst(new Fallen_Angel());
                }
            }
            f.find_and_run_s13(Fallen_Angel);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.CHM);
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

export {Pixie_Of_Pride};
