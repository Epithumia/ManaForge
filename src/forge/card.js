import {IMMUNITY, PLUNGE2, PLUNGE3, SPECIAL, STAT, WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
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


export {
    Enticed_Nymph,
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
    Sacrificed_Nymph,
    Spirit_Of_Forest,
    Spirit_Of_Housework,
    Spirit_Of_Mountain,
    Spirit_Of_Ocean,
    Spirit_Of_Shoes
}



