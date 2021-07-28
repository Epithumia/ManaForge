import {IMMUNITY, PLUNGE2, PLUNGE3, SPECIAL, STAT, WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
import {Metropolis, Tower} from "@/forge/cards/stage";
import {
    Beast_Headed_God,
    Fallen_Angel,
    God_Of_Destruction,
    Leviathan,
    Lord_Of_Flies,
    Wings_Of_Darkness,
    Witch_Of_Moon
} from "@/forge/cards/evil_gods";
import {No_Card} from "@/forge/cards/No_Card";


class Cleric extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Cleric";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 500;
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
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.SPR);
        }
        if (f.STAFF()) {
            f.setPlunge3(PLUNGE3.Demonicide);
        }
        f.setSharp(f.perc50(f.getSharp()));
        f.setHeavy(f.perc150(f.getHeavy()));
        f.setSlash(f.perc50(f.getSlash()));
        f.setStrike(f.perc150(f.getStrike()));
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

class Clown extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Clown";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 250;
        return price;
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    FIRST(f) {
        this.SECOND(f);

    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    SECOND(f) {
        this.THIRD(f);
    }

    /**
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if ((f.first instanceof Metropolis || f.second instanceof Metropolis
            || f.third instanceof Metropolis) && !(f.hidden instanceof Metropolis)) {
            f.stat_limits(-5, 12, STAT.ALL);
        } else {
            f.stat_limits(-3, 9, STAT.ALL);
        }
        if (f.KNIFE()) {
            f.setPlunge2(PLUNGE2.Quick_Blade);
        }
        f.setSharp(f.perc150(f.getSharp()));
        f.setHeavy(f.perc50(f.getHeavy()));
        f.setThrust(f.perc150(f.getThrust()));
        f.setStrike(f.perc50(f.getStrike()));
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

class Enticed_Nymph extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Enticed Nymph";
    }

    /**
     * @param price : int
     * @return int
     * @constructor
     */
    PRICE(price) {
        price += 1000;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
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


class King extends Card {

    CPRINT() {
        return "King";
    }

    PRICE(price) {
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

        if (f.GLOVE()) {
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


class Nymph_Of_Dawn extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Nymph of Dawn";
    }


    PRICE(price) {
        price += 1000;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.getEnergy() <= 24) {
            if (f.third instanceof Nymph_Of_Dawn) {
                f.setThird(new No_Card());
            } else if (f.second instanceof Nymph_Of_Dawn) {
                f.setSecond(new No_Card());
            }
            f.setEnergy(f.getEnergy() + 192);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        f.setEnergy(f.getEnergy() + 192);
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}


class Nymph_Of_Orchards extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Nymph of Orchards";
    }


    PRICE(price) {
        price += 1000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.RING()) {
            f.setSpecial(SPECIAL.Fast_Revive);
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


class Nymph_Of_The_Sky extends Card {
    constructor() {
        super();
    }

    CPRINT() {
        return "Nymph of the Sky";
    }


    PRICE(price) {
        price += 1000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.MANTLE()) {
            f.setSpecial(SPECIAL.Move_Regen);
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


class Pixie_Of_Gluttony extends Card {

    CPRINT() {
        return "Pixie of Gluttony";
    }

    PRICE(price) {
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
                if (f.third instanceof Pixie_Of_Gluttony) {
                    f.setThird(new Leviathan());
                } else if (f.second instanceof Pixie_Of_Gluttony) {
                    f.setSecond(new Leviathan());
                } else if (f.first instanceof Pixie_Of_Gluttony) {
                    f.setFirst(new Leviathan());
                }
            }
            f.find_and_run_s13(Leviathan);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.HP);
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


class Pixie_Of_Greed extends Card {

    CPRINT() {
        return "Pixie of Greed";
    }

    PRICE(price) {
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
                if (f.third instanceof Pixie_Of_Greed) {
                    f.setThird(new Beast_Headed_God());
                } else if (f.second instanceof Pixie_Of_Greed) {
                    f.setSecond(new Beast_Headed_God());
                } else if (f.first instanceof Pixie_Of_Greed) {
                    f.setFirst(new Beast_Headed_God());
                }
            }
            f.find_and_run_s13(Beast_Headed_God);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.DEF);
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


class Pixie_Of_Jealousy extends Card {

    CPRINT() {
        return "Pixie of Jealousy";
    }

    PRICE(price) {
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
                if (f.third instanceof Pixie_Of_Jealousy) {
                    f.setThird(new Lord_Of_Flies());
                } else if (f.second instanceof Pixie_Of_Jealousy) {
                    f.setSecond(new Lord_Of_Flies());
                } else if (f.first instanceof Pixie_Of_Jealousy) {
                    f.setFirst(new Lord_Of_Flies());
                }
            }
            f.find_and_run_s13(Lord_Of_Flies);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.SKL);
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


class Pixie_Of_Laziness extends Card {

    CPRINT() {
        return "Pixie of Laziness";
    }

    PRICE(price) {
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
                if (f.third instanceof Pixie_Of_Laziness) {
                    f.setThird(new Witch_Of_Moon());
                } else if (f.second instanceof Pixie_Of_Laziness) {
                    f.setSecond(new Witch_Of_Moon());
                } else if (f.first instanceof Pixie_Of_Laziness) {
                    f.setFirst(new Witch_Of_Moon());
                }
            }
            f.find_and_run_s13(Witch_Of_Moon);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.MAG);
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


class Pixie_Of_Lust extends Card {

    CPRINT() {
        return "Pixie of Lust";
    }

    PRICE(price) {
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


class Pixie_Of_Pride extends Card {

    CPRINT() {
        return "Pixie of Pride";
    }

    PRICE(price) {
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


class Pixie_Of_Rage extends Card {

    CPRINT() {
        return "Pixie of Rage";
    }

    PRICE(price) {
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


class Princess extends Card {

    CPRINT() {
        return "Princess";
    }

    PRICE(price) {
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
            f.increase_stat(STAT.DEF);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.DEF);
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


class Raven extends Card {

    CPRINT() {
        return "Raven";
    }

    PRICE(price) {
        price += 300;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.MAG);
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_min(3, STAT.MAG);
        f.stat_min(3, STAT.CHM);
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


class Sacrificed_Nymph extends Card {
    constructor() {
        super();
    }


    CPRINT() {
        return "Sacrificed Nymph";
    }

    /**
     *
     * @param price : int
     * @constructor
     */
    PRICE(price) {
        price += 1000;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    /**
     *
     * @param f : ForgedItem
     * @constructor
     */
    THIRD(f) {
        if (f.PENDANT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Petrify.value);
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


class Sorcerer extends Card {

    CPRINT() {
        return "Sorcerer";
    }

    PRICE(price) {
        price += 300;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if ((f.first instanceof Tower || f.second instanceof Tower
            || f.third instanceof Tower) && !(f.hidden instanceof Tower)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
            f.setWiR(Math.trunc(f.getWiR() / 2));
            if (f.getWiR() < 1)
                f.setWiR(1);
            f.setDrR(Math.trunc(f.getDrR() / 2));
            if (f.getDrR() < 1)
                f.setDrR(1);
            f.setSaR(Math.trunc(f.getSaR() / 2));
            if (f.getSaR() < 1)
                f.setSaR(1);
            f.setGnR(Math.trunc(f.getGnR() / 2));
            if (f.getGnR() < 1)
                f.setGnR(1);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.setWiR(Math.trunc(f.getWiR() / 4) * 3);
            if (f.getWiR() < 1)
                f.setWiR(1);
            f.setDrR(Math.trunc(f.getDrR() / 4) * 3);
            if (f.getDrR() < 1)
                f.setDrR(1);
            f.setSaR(Math.trunc(f.getSaR() / 4) * 3);
            if (f.getSaR() < 1)
                f.setSaR(1);
            f.setGnR(Math.trunc(f.getGnR() / 4) * 3);
            if (f.getGnR() < 1)
                f.setGnR(1);
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


class Spirit_Of_Forest extends Card {


    CPRINT() {
        return "Spirit of Forest";
    }


    PRICE(price) {
        price += 800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.SPR);
        f.increase_stat(STAT.CHM);
        if (f.BOW()) {
            f.setPlunge2(PLUNGE2.Elven_Archer);
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


class Spirit_Of_Housework extends Card {


    CPRINT() {
        return "Spirit of Housework";
    }


    PRICE(price) {
        price += 800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.LCK);
        if (f.MANTLE()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Sleep.value);
        }
        if (f.RING()) {
            f.setSpecial(SPECIAL.Extra_Lucre);
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


class Spirit_Of_Mountain extends Card {


    CPRINT() {
        return "Spirit of Mountain";
    }


    PRICE(price) {
        price += 800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.DEF);
        f.increase_stat(STAT.HP);
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Quake_Hammer);
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


class Spirit_Of_Ocean extends Card {


    CPRINT() {
        return "Spirit of Ocean";
    }


    PRICE(price) {
        price += 800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.CHM);
        if (f.HAT()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Confusion.value);
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


class Spirit_Of_Shoes extends Card {


    CPRINT() {
        return "Spirit of Shoes";
    }


    PRICE(price) {
        price += 800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.SKL);
        if (f.BOOTS()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis.value);
        }
        if (f.SHOES()) {
            f.setSpecial(SPECIAL.Extra_Exp);
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


class Witch extends Card {

    CPRINT() {
        return ("Witch");
    }

    PRICE(price) {
        price += 300;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if ((f.first instanceof Tower || f.second instanceof Tower
            || f.third instanceof Tower) && !(f.hidden instanceof Tower)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
            f.setShR(Math.trunc(f.getShR() / 2));
            if (f.getShR() < 1)
                f.setShR(1);
            f.setAuR(f.getAuR() / 2);
            if (f.getAuR() < 1)
                f.setAuR(1);
            f.setJiR(f.getJiR() / 2);
            if (f.getJiR() < 1)
                f.setJiR(1);
            f.setUnR(f.getUnR() / 2);
            if (f.getUnR() < 1)
                f.setUnR(1);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.setShR(Math.trunc(f.getShR() / 4) * 3);
            if (f.getShR() < 1)
                f.setShR(1);
            f.setAuR(Math.trunc(f.getAuR() / 4) * 3);
            if (f.getAuR() < 1)
                f.setAuR(1);
            f.setJiR(Math.trunc(f.getJiR() / 4) * 3);
            if (f.getJiR() < 1)
                f.setJiR(1);
            f.setUnR(Math.trunc(f.getUnR() / 4) * 3);
            if (f.getUnR() < 1)
                f.setUnR(1);
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


class Wolf extends Card {

    CPRINT() {
        return "Wolf";
    }

    PRICE(price) {
        price += 300;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_limits(-3, 5, STAT.HP);
        f.stat_min(3, STAT.SKL);
        f.stat_min(3, STAT.HP);
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

export {
    Cleric,
    Clown,
    Enticed_Nymph,
    King,
    Nymph_Of_Dawn,
    Nymph_Of_Orchards,
    Nymph_Of_The_Sky,
    Pixie_Of_Gluttony,
    Pixie_Of_Greed,
    Pixie_Of_Jealousy,
    Pixie_Of_Laziness,
    Pixie_Of_Lust,
    Pixie_Of_Pride,
    Pixie_Of_Rage,
    Princess,
    Raven,
    Sacrificed_Nymph,
    Sorcerer,
    Spirit_Of_Forest,
    Spirit_Of_Housework,
    Spirit_Of_Mountain,
    Spirit_Of_Ocean,
    Spirit_Of_Shoes,
    Witch,
    Wolf
}



