import {Card} from "@/forge/cards/Card";
import {STAT, WORLD_CARD} from "@/forge/enums";
import {God_Of_Destruction} from "@/forge/cards/evil_gods";

class Pixie_Of_Rage extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Pixie (Wrath)"
            case 'jp':
                return "小悪魔(憤怒)"
            default:
                return "Pixie (Light Blue Hat)"
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
                if (f.third instanceof Pixie_Of_Rage) {
                    f.setThird(new God_Of_Destruction());
                } else if (f.second instanceof Pixie_Of_Rage) {
                    f.setSecond(new God_Of_Destruction());
                } else if (f.first instanceof Pixie_Of_Rage) {
                    f.setFirst(new God_Of_Destruction());
                }
            }
            f.find_and_run_s13(God_Of_Destruction);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.PWR);
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

export {Pixie_Of_Rage};
