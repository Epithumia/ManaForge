import {Card} from "@/forge/cards/Card";
import {STAT, WORLD_CARD} from "@/forge/enums";
import {Wings_Of_Darkness} from "@/forge/cards/evil_gods";

class Pixie_Of_Lust extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Pixie (Lust)"
            case 'jp':
                return "小悪魔(好色)"
            default:
                return "Pixie (Black Hat)"
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
                if (f.third instanceof Pixie_Of_Lust) {
                    f.setThird(new Wings_Of_Darkness());
                } else if (f.second instanceof Pixie_Of_Lust) {
                    f.setSecond(new Wings_Of_Darkness());
                } else if (f.first instanceof Pixie_Of_Lust) {
                    f.setFirst(new Wings_Of_Darkness());
                }
            }
            f.find_and_run_s13(Wings_Of_Darkness);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.SPR);
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

export {Pixie_Of_Lust};
