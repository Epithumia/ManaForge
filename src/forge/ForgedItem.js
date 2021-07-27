import {ESSENCE, PLUNGE1, PLUNGE2, PLUNGE3, SPECIAL, STAT, STICKY_F, WORLD_CARD, IMMUNITY} from "@/forge/enums";
import {
    Dryad,
    No_Card,
    Phoenix, Pixie_Of_Gluttony, Pixie_Of_Greed,
    Pixie_Of_Jealousy,
    Pixie_Of_Laziness,
    Pixie_Of_Lust, Pixie_Of_Pride, Pixie_Of_Rage,
    Raven,
    Witch,
    Wolf
} from "@/forge/cards";
import {No_Item} from "@/forge/items";
import {equip_props, if_array, mat_props, power2} from "@/forge/lists";

// TODO: https://github.com/aberonni/nightwatch-test-coverage-example

class ForgedItem {

    constructor(seq) {
        if (seq.length >= 2) {
            this.set_equipment(seq[0]);
            this.set_material(seq[1]);
            this.init_essences();
            this.init_cards();
            this.init_stats();
            this.init_item();
            this.init_special();
            this.init_stat_limits();
            this.sub_init_cards();
            this.material_init();
        }
        if (seq.length > 2) {
            for (let i = 2; i < seq.length; i++) {
                if (seq[i] > 0) {
                    this.set_item(seq[i]);
                    this.init_stat_limits();
                    this.sub_init_cards();
                    this.material_init();
                    this.set_active_world_card();
                    this.item_energy();
                    this.material_code();
                    this.item_code();
                    this.push_cards();
                    this.activate_cards();
                    this.check_type_effects();
                    this.increase_essences();
                    this.calculate_stats();
                }
            }
        }
    }

    equip // Forged item type
    energy = 0; // Energy currently on the item

    // Element levels
    wi;
    sh;
    dr;
    au;
    sa;
    gn;
    ji;
    un;

    // Resists from material used
    wiR;
    shR;
    drR;
    auR;
    saR;
    gnR;
    jiR;
    unR;

    // Taint points
    drLR;
    auLR;
    saLR;
    gnLR;
    jiLR;
    unLR;

    // Current values
    pwr;
    skl;
    def;
    mag;
    hp;
    spr;
    chm;
    lck;

    // High values
    hpwr;
    hskl;
    hdef;
    hmag;
    hhp;
    hspr;
    hchm;
    hlck;

    // Low values
    lpwr;
    lskl;
    ldef;
    lmag;
    lhp;
    lspr;
    lchm;
    llck;

    // Min values
    mpwr;
    mskl;
    mdef;
    mmag;
    mhp;
    mspr;
    mchm;
    mlck;

    /**
     * @type PLUNGE1
     */
    plunge1 // Slot 1 plunge attack
    /**
     * @type PLUNGE2
     */
    plunge2 // Slot 1 plunge attack
    /**
     * @type PLUNGE3
     */
    plunge3 // Slot 1 plunge attack
    /**
     * @type SPECIAL
     */
    special // Special effect

    immunity // Status immunities

    sharp
    heavy
    force
    tech
    strike
    slash
    thrust
    magic // Attack/def characteristics

    /**
     * @type STICKY_F
     */
    sticky

    /**
     *
     * @type WORLD_CARD
     */
    awc = null

    /**
     * @type Card
     */
    prehidden = null
    /**
     * @type Card
     */
    hidden = null
    /**
     * @type Card
     */
    first = null
    /**
     * @type Card
     */
    second = null
    /**
     * @type Card
     */
    third = null
    /**
     * @type Card
     */
    leaving = null
    /**
     * @type Item | No_Item
     */
    item = null

    price

    material // What the weapon is made of

    // Highlights

    // Element levels
    highlight_wi = null;
    highlight_sh = null;
    highlight_dr = null;
    highlight_au = null;
    highlight_sa = null;
    highlight_gn = null;
    highlight_ji = null;
    highlight_un = null;

    // Resists from material used
    highlight_wiR = null;
    highlight_shR = null;
    highlight_drR = null;
    highlight_auR = null;
    highlight_saR = null;
    highlight_gnR = null;
    highlight_jiR = null;
    highlight_unR = null;

    // Taint points
    highlight_drLR = null;
    highlight_auLR = null;
    highlight_saLR = null;
    highlight_gnLR = null;
    highlight_jiLR = null;
    highlight_unLR = null;

    // Current values
    highlight_pwr = null;
    highlight_skl = null;
    highlight_def = null;
    highlight_mag = null;
    highlight_hp = null;
    highlight_spr = null;
    highlight_chm = null;
    highlight_lck = null;

    // High values
    highlight_hpwr = null;
    highlight_hskl = null;
    highlight_hdef = null;
    highlight_hmag = null;
    highlight_hhp = null;
    highlight_hspr = null;
    highlight_hchm = null;
    highlight_hlck = null;

    // Low values
    highlight_lpwr = null;
    highlight_lskl = null;
    highlight_ldef = null;
    highlight_lmag = null;
    highlight_lhp = null;
    highlight_lspr = null;
    highlight_lchm = null;
    highlight_llck = null;

    // Min values
    highlight_mpwr = null;
    highlight_mskl = null;
    highlight_mdef = null;
    highlight_mmag = null;
    highlight_mhp = null;
    highlight_mspr = null;
    highlight_mchm = null;
    highlight_mlck = null;

    // Plunges
    highlight_plunge1 = null
    highlight_plunge2 = null
    highlight_plunge3 = null

    highlight_special = null// Special effect

    // Status immunities

    highlight_immunity_sleep = null
    highlight_immunity_poison = null
    highlight_immunity_paralysis = null
    highlight_immunity_confusion = null
    highlight_immunity_darkness = null
    highlight_immunity_petrify = null
    highlight_immunity_flameburst = null
    highlight_immunity_freeze = null

    // Stats
    highlight_sharp = null
    highlight_heavy = null
    highlight_force = null
    highlight_tech = null
    highlight_strike = null
    highlight_slash = null
    highlight_thrust = null
    highlight_magic = null // Attack/def characteristics

    // Cards
    highlight_sticky = null
    highlight_awc = null
    highlight_prehidden = null
    highlight_hidden = null
    highlight_first = null
    highlight_second = null
    highlight_third = null
    highlight_leaving = null

    // Other
    highlight_equip = null // Forged item type
    highlight_energy = null; // Energy currently on the item
    highlight_material = null;
    highlight_item = null
    highlight_price = null

    reset_highlights() {
        // Stats
        this.highlight_sharp = this.highlight_heavy = this.highlight_force = this.highlight_tech = null
        this.highlight_strike = this.highlight_slash = this.highlight_thrust = this.highlight_magic = null

        // Element levels
        this.highlight_wi = this.highlight_sh = this.highlight_dr = this.highlight_au = null;
        this.highlight_sa = this.highlight_gn = this.highlight_ji = this.highlight_un = null;

        // Resists from material used
        this.highlight_wiR = this.highlight_shR = this.highlight_drR = this.highlight_auR = null;
        this.highlight_saR = this.highlight_gnR = this.highlight_jiR = this.highlight_unR = null;

        // Taint points
        this.highlight_drLR = this.highlight_auLR = null;
        this.highlight_saLR = this.highlight_gnLR = this.highlight_jiLR = this.highlight_unLR = null;

        // Current values
        this.highlight_pwr = this.highlight_skl = this.highlight_def = this.highlight_mag = null;
        this.highlight_hp = this.highlight_spr = this.highlight_chm = this.highlight_lck = null;

        // High values
        this.highlight_hpwr = this.highlight_hskl = this.highlight_hdef = this.highlight_hmag = null;
        this.highlight_hhp = this.highlight_hspr = this.highlight_hchm = this.highlight_hlck = null;

        // Low values
        this.highlight_lpwr = this.highlight_lskl = this.highlight_ldef = this.highlight_lmag = null;
        this.highlight_lhp = this.highlight_lspr = this.highlight_lchm = this.highlight_llck = null;

        // Min values
        this.highlight_mpwr = null;
        this.highlight_mskl = null;
        this.highlight_mdef = null;
        this.highlight_mmag = null;
        this.highlight_mhp = null;
        this.highlight_mspr = null;
        this.highlight_mchm = null;
        this.highlight_mlck = null;

        // Plunges
        this.highlight_plunge1 = null
        this.highlight_plunge2 = null
        this.highlight_plunge3 = null

        // Special effect
        this.highlight_special = null

        // Status immunities
        this.highlight_immunity_sleep = null
        this.highlight_immunity_poison = null
        this.highlight_immunity_paralysis = null
        this.highlight_immunity_confusion = null
        this.highlight_immunity_darkness = null
        this.highlight_immunity_petrify = null
        this.highlight_immunity_flameburst = null
        this.highlight_immunity_freeze = null

        // Cards
        this.highlight_sticky = null
        this.highlight_awc = null
        this.highlight_prehidden = null
        this.highlight_hidden = null
        this.highlight_first = null
        this.highlight_second = null
        this.highlight_third = null
        this.highlight_leaving = null

        // Other
        this.highlight_equip = null // Forged item type
        this.highlight_energy = null; // Energy currently on the item
        this.highlight_material = null;
        this.highlight_item = null
        this.highlight_price = null
    }

    // INITS

    init_item() {
        this.item = new No_Item();
    }

    init_cards() {
        this.hidden = new No_Card();
        this.first = new No_Card();
        this.second = new No_Card();
        this.third = new No_Card();
    }

    sub_init_cards() {
        this.reset_highlights()
        this.prehidden = new No_Card();
        this.leaving = new No_Card();
        this.sticky = STICKY_F.STICKY;
    }

    init_essences() {
        this.wi = this.sh = this.dr = this.au = this.sa = this.gn = this.ji = this.un = 0;

        this.drLR = this.auLR = this.saLR = this.gnLR = this.jiLR = this.unLR = 0;

        if (this.AEROLITE()) this.sa = 4;
    }

    init_special() {
        this.setSpecial(SPECIAL.No_Effect);
        this.setImmunity(0);
        this.setPlunge1(PLUNGE1.Thrust);
        this.setPlunge2(PLUNGE2.Uppercut);
        this.setPlunge3(PLUNGE3.Jump);
        if (this.BOW()) {
            this.setPlunge1(PLUNGE1.Double_Shot);
            this.setPlunge2(PLUNGE2.Shot);
        }
    }

    init_stats() {
        this.setPwr(0);
        this.setSkl(0);
        this.setDef(0);
        this.setMag(0);
        this.setHp(0);
        this.setSpr(0);
        this.setChm(0);
        this.setLck(0);
    }

    init_stat_limits() {
        this.reset_highlights()
        this.lpwr = -1;
        this.lskl = -1;
        this.ldef = -1;
        this.lmag = -1;
        this.lhp = -1;
        this.lspr = -1;
        this.lchm = -1;
        this.llck = -1;
        this.hpwr = 1;
        this.hskl = 1;
        this.hdef = 1;
        this.hmag = 1;
        this.hhp = 1;
        this.hspr = 1;
        this.hchm = 1;
        this.hlck = 1;
        this.mpwr = -10;
        this.mskl = -10;
        this.mdef = -10;
        this.mmag = -10;
        this.mhp = -10;
        this.mspr = -10;
        this.mchm = -10;
        this.mlck = -10;
    }

    material_init() {
        this.reset_highlights()
        this.setSharp(mat_props[this.material][1]);
        this.setHeavy(mat_props[this.material][2]);
        this.setForce(mat_props[this.material][3]);
        this.setTech(mat_props[this.material][4]);
        this.setStrike(mat_props[this.material][5]);
        this.setSlash(mat_props[this.material][6]);
        this.setThrust(mat_props[this.material][7]);
        this.setMagic(mat_props[this.material][8]);
        this.setWiR(mat_props[this.material][9]);
        this.setShR(mat_props[this.material][10]);
        this.setDrR(mat_props[this.material][11]);
        this.setAuR(mat_props[this.material][12]);
        this.setSaR(mat_props[this.material][13]);
        this.setGnR(mat_props[this.material][14]);
        this.setJiR(mat_props[this.material][15]);
        this.setUnR(mat_props[this.material][16]);

    }

    check_type_effects() {
        this.reset_highlights()
        if (this.BOW()
            && !(this.hidden instanceof Witch || this.hidden instanceof Raven || this.hidden instanceof Wolf)
            && (this.first instanceof Witch || this.second instanceof Witch || this.third instanceof Witch)
            && (this.first instanceof Raven || this.second instanceof Raven || this.third instanceof Raven)
            && (this.first instanceof Wolf || this.second instanceof Wolf || this.third instanceof Wolf)) {
            this.setPlunge1(PLUNGE1.Magical_Shot);
        }
        if ((this.RING() || this.PENDANT()) && this.getSpecial() === SPECIAL.Auto_Revive) {
            if (this.hidden instanceof Phoenix
                || (!(this.first instanceof Phoenix)
                    && !(this.second instanceof Phoenix) && !(this.third instanceof Phoenix))) {
                this.setSpecial(SPECIAL.No_Effect);
            }
        }
    }

    // Getters
    /**
     * @returns int
     */
    getEquip() {
        return this.equip;
    }

    getDrR() {
        return this.drR;
    }

    getAuR() {
        return this.auR;
    }

    getForce() {
        return this.force;
    }

    getMagic() {
        return this.magic;
    }

    getSharp() {
        return this.sharp;
    }

    getHeavy() {
        return this.heavy;
    }

    getStrike() {
        return this.strike;
    }

    getSlash() {
        return this.slash;
    }

    getThrust() {
        return this.thrust;
    }

    getGnR() {
        return this.gnR;
    }

    getJiR() {
        return this.jiR;
    }

    getSaR() {
        return this.saR;
    }

    getShR() {
        return this.shR;
    }

    getUnR() {
        return this.unR;
    }

    getWiR() {
        return this.wiR;
    }

    getWi() {
        return this.wi;
    }

    getSh() {
        return this.sh;
    }

    getDr() {
        return this.dr;
    }

    getAu() {
        return this.au;
    }

    getSa() {
        return this.sa;
    }

    getGn() {
        return this.gn;
    }

    getJi() {
        return this.ji;
    }

    getUn() {
        return this.un;
    }

    getDrLR() {
        return this.drLR;
    }

    getAuLR() {
        return this.auLR;
    }

    getSaLR() {
        return this.saLR;
    }

    getGnLR() {
        return this.gnLR;
    }

    getJiLR() {
        return this.jiLR;
    }

    getUnLR() {
        return this.unLR;
    }

    getPwr() {
        return this.pwr;
    }

    getMag() {
        return this.mag;
    }

    getSkl() {
        return this.skl;
    }

    getDef() {
        return this.def;
    }

    getHp() {
        return this.hp;
    }

    getSpr() {
        return this.spr;
    }

    getChm() {
        return this.chm;
    }

    getLck() {
        return this.lck;
    }

    /**
     * @return {SPECIAL}
     */
    getSpecial() {
        return this.special;
    }

    getImmunity() {
        return this.immunity;
    }

    getTech() {
        return this.tech;
    }

    getEnergy() {
        return this.energy;
    }

    getPlunge1() {
        return this.plunge1;
    }

    getPlunge2() {
        return this.plunge2;
    }

    getPlunge3() {
        return this.plunge3;
    }

    // noinspection JSUnusedGlobalSymbols
    getEquipProps() { // Convenience function in preparation for proper logging
        let props = []
        for (let i = 0; i < 4; i++) {
            props.push(equip_props[this.getEquip()][i])
        }
        return props;
    }

    getAttack() {
        const esgc = mat_props[this.material][0] + this.ESSTOTAL()
        const denom = mat_props[this.material][0] * 128
        let atk = 0
        if (this.WEAPON()) {
            atk = (this.sharp * equip_props[this.getEquip()][0]
                + this.heavy * equip_props[this.getEquip()][1]
                + this.force * equip_props[this.getEquip()][2]
                + this.tech * equip_props[this.getEquip()][3])
                * esgc / denom;
            atk = Math.floor(atk)
        }
        return atk;
    }

    getDefenses() {
        let def = []
        if (this.ARMOR()) {
            def.push(Math.trunc(this.strike * equip_props[this.getEquip()][0] / 64))
            def.push(Math.trunc(this.slash * equip_props[this.getEquip()][1] / 64))
            def.push(Math.trunc(this.thrust * equip_props[this.getEquip()][2] / 64))
            def.push(Math.trunc(this.magic * equip_props[this.getEquip()][3] / 64))
        }
        return def
    }

    /**
     * @typedef IMMUNITY
     * @type {object}
     * @property {string} text - name
     * @property {string} code - short name
     * @property {int} value - ID
     */
    /**
     * @param imm : IMMUNITY
     * @return {String}
     */
    getShortImmunity(imm) {
        if (!this.ARMOR()) return ''

        if ((this.getImmunity() & imm.value) > 0) return imm.code
        return ''
    }

    getPrice() {
        return Math.trunc(equip_props[this.getEquip()][5] * mat_props[this.material][17] / 150) + this.card_price()
    }

    card_price() {
        let price = 0

        price = this.hidden.PRICE(price)
        price = this.first.PRICE(price)
        price = this.second.PRICE(price)
        price = this.third.PRICE(price)

        this.price = price
        return price
    }

    /**
     * @param ess : ESSENCE
     * @return {String}
     */
    getMarker(ess) {
        const level = equip_props[this.getEquip()][4];
        if (this.WEAPON()) {
            switch (ess) {
                case ESSENCE.WISP:
                    if (this.wi >= level) return "wi"
                    return ""
                case ESSENCE.SHADE:
                    if (this.sh >= level) return "sh"
                    return ""
                case ESSENCE.DRYAD:
                    if (this.dr >= level) return "dr"
                    return ""
                case ESSENCE.AURA:
                    if (this.au >= level) return "au"
                    return ""
                case ESSENCE.SALA:
                    if (this.sa >= level) return "sa"
                    return ""
                case ESSENCE.GNOME:
                    if (this.gn >= level) return "gn"
                    return ""
                case ESSENCE.JINN:
                    if (this.ji >= level) return "ji"
                    return ""
                case ESSENCE.UNDINE:
                    if (this.un >= level) return "un"
                    return ""
            }
        } else {
            switch (ess) {
                case ESSENCE.WISP:
                    if (this.sh >= level) return "wi"
                    return ""
                case ESSENCE.SHADE:
                    if (this.wi >= level) return "sh"
                    return ""
                case ESSENCE.DRYAD:
                    if (this.au >= level) return "dr"
                    return ""
                case ESSENCE.AURA:
                    if (this.dr >= level) return "au"
                    return ""
                case ESSENCE.SALA:
                    if (this.gn >= level) return "sa"
                    return ""
                case ESSENCE.GNOME:
                    if (this.ji >= level) return "gn"
                    return ""
                case ESSENCE.JINN:
                    if (this.un >= level) return "ji"
                    return ""
                case ESSENCE.UNDINE:
                    if (this.sa >= level) return "un"
                    return ""
            }
        }
    }

    // Setters

    /**
     * @param m : int
     */
    set_material(m) {
        this.material = m;
    }

    set_item(item_code) {
        this.reset_highlights()
        this.item = if_array[item_code];
    }

    set_active_world_card() {
        this.reset_highlights()
        this.awc = WORLD_CARD.NONE;
        this.third.WORLD(this);
        this.second.WORLD(this);
        this.first.WORLD(this);
        this.hidden.WORLD(this);
    }

    /**
     * @typedef PLUNGE1
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */
    /**
     * @param plunge1 : PLUNGE1
     * @constructor
     */
    setPlunge1(plunge1) {
        if (this.plunge1 && (this.plunge1.value !== plunge1.value)) this.highlight_plunge1 = 'highlight-change';
        this.plunge1 = plunge1;
    }

    /**
     * @typedef PLUNGE2
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */
    /**
     * @param plunge2 : PLUNGE2
     * @constructor
     */
    setPlunge2(plunge2) {
        if (this.plunge2 && (this.plunge2.value !== plunge2.value)) this.highlight_plunge2 = 'highlight-change';
        this.plunge2 = plunge2;
    }

    /**
     * @typedef PLUNGE3
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */
    /**
     * @param plunge3 : PLUNGE3
     * @constructor
     */
    setPlunge3(plunge3) {
        if (this.plunge3 && (this.plunge3.value !== plunge3.value)) this.highlight_plunge3 = 'highlight-change';
        this.plunge3 = plunge3;
    }

    setMagic(magic) {
        if (magic > this.magic) {
            this.highlight_magic = 'highlight-up'
        }
        if (magic < this.magic) {
            this.highlight_magic = 'highlight-down'
        }
        this.magic = magic;
    }

    setForce(force) {
        if (force > this.force) {
            this.highlight_force = 'highlight-up'
        }
        if (force < this.force) {
            this.highlight_force = 'highlight-down'
        }
        this.force = force;
    }

    setSharp(sharp) {
        if (sharp > this.sharp) {
            this.highlight_sharp = 'highlight-up'
        }
        if (sharp < this.sharp) {
            this.highlight_sharp = 'highlight-down'
        }
        this.sharp = sharp;
    }

    setHeavy(heavy) {
        if (heavy > this.heavy) {
            this.highlight_heavy = 'highlight-up'
        }
        if (heavy < this.heavy) {
            this.highlight_heavy = 'highlight-down'
        }
        this.heavy = heavy;
    }

    setStrike(strike) {
        if (strike > this.strike) {
            this.highlight_strike = 'highlight-up'
        }
        if (strike < this.strike) {
            this.highlight_strike = 'highlight-down'
        }
        this.strike = strike;
    }

    setSlash(slash) {
        if (slash > this.slash) {
            this.highlight_slash = 'highlight-up'
        }
        if (slash < this.slash) {
            this.highlight_slash = 'highlight-down'
        }
        this.slash = slash;
    }

    setThrust(thrust) {
        if (thrust > this.thrust) {
            this.highlight_thrust = 'highlight-up'
        }
        if (thrust < this.thrust) {
            this.highlight_thrust = 'highlight-down'
        }
        this.thrust = thrust;
    }

    /**
     * @param drR : int
     */
    setDrR(drR) {
        if (this.drR > 0 && Math.trunc(drR) > this.drR) {
            this.highlight_drR = 'highlight-down'
        }
        if (Math.trunc(drR) < this.drR) {
            this.highlight_drR = 'highlight-up'
        }
        this.drR = Math.trunc(drR);
    }

    /**
     * @param auR : int
     */
    setAuR(auR) {
        if (this.auR > 0 && Math.trunc(auR) > this.auR) {
            this.highlight_auR = 'highlight-down'
        }
        if (Math.trunc(auR) < this.auR) {
            this.highlight_auR = 'highlight-up'
        }
        this.auR = Math.trunc(auR);
    }

    /**
     * @param gnR : int
     */
    setGnR(gnR) {
        if (this.gnR > 0 && Math.trunc(gnR) > this.gnR) {
            this.highlight_gnR = 'highlight-down'
        }
        if (Math.trunc(gnR) < this.gnR) {
            this.highlight_gnR = 'highlight-up'
        }
        this.gnR = Math.trunc(gnR);
    }

    /**
     * @param jiR : int
     */
    setJiR(jiR) {
        if (this.jiR > 0 && Math.trunc(jiR) > this.jiR) {
            this.highlight_jiR = 'highlight-down'
        }
        if (Math.trunc(jiR) < this.jiR) {
            this.highlight_jiR = 'highlight-up'
        }
        this.jiR = Math.trunc(jiR);
    }

    /**
     * @param saR : int
     */
    setSaR(saR) {
        if (this.saR > 0 && Math.trunc(saR) > this.saR) {
            this.highlight_saR = 'highlight-down'
        }
        if (Math.trunc(saR) < this.saR) {
            this.highlight_saR = 'highlight-up'
        }
        this.saR = Math.trunc(saR);
    }

    /**
     * @param shR : int
     */
    setShR(shR) {
        if (this.shR > 0 && Math.trunc(shR) > this.shR) {
            this.highlight_shR = 'highlight-down'
        }
        if (Math.trunc(shR) < this.shR) {
            this.highlight_shR = 'highlight-up'
        }
        this.shR = Math.trunc(shR);
    }

    /**
     * @param unR : int
     */
    setUnR(unR) {
        if (this.unR > 0 && Math.trunc(unR) > this.unR) {
            this.highlight_unR = 'highlight-down'
        }
        if (Math.trunc(unR) < this.unR) {
            this.highlight_unR = 'highlight-up'
        }
        this.unR = Math.trunc(unR);
    }

    /**
     * @param wiR : int
     */
    setWiR(wiR) {
        if (this.wiR > 0 && Math.trunc(wiR) > this.wiR) {
            this.highlight_wiR = 'highlight-down'
        }
        if (Math.trunc(wiR) < this.wiR) {
            this.highlight_wiR = 'highlight-up'
        }
        this.wiR = Math.trunc(wiR);
    }

    setWi(wi) {
        if (wi > this.wi) {
            this.highlight_wi = 'highlight-up'
        } else {
            this.highlight_wi = 'highlight-down'
        }
        this.wi = wi;
    }

    setSh(sh) {
        if (sh > this.sh) {
            this.highlight_sh = 'highlight-up'
        } else {
            this.highlight_sh = 'highlight-down'
        }
        this.sh = sh;
    }

    setDr(dr) {
        if (dr > this.dr) {
            this.highlight_dr = 'highlight-up'
        } else {
            this.highlight_dr = 'highlight-down'
        }
        this.dr = dr;
    }

    setAu(au) {
        if (au > this.au) {
            this.highlight_au = 'highlight-up'
        } else {
            this.highlight_au = 'highlight-down'
        }
        this.au = au;
    }

    setSa(sa) {
        if (sa > this.sa) {
            this.highlight_sa = 'highlight-up'
        } else {
            this.highlight_sa = 'highlight-down'
        }
        this.sa = sa;
    }

    setGn(gn) {
        if (gn > this.gn) {
            this.highlight_gn = 'highlight-up'
        } else {
            this.highlight_gn = 'highlight-down'
        }
        this.gn = gn;
    }

    setJi(ji) {
        if (ji > this.ji) {
            this.highlight_ji = 'highlight-up'
        } else {
            this.highlight_ji = 'highlight-down'
        }
        this.ji = ji;
    }

    setUn(un) {
        if (un > this.un) {
            this.highlight_un = 'highlight-up'
        } else {
            this.highlight_un = 'highlight-down'
        }
        this.un = un;
    }

    setDrLR(drLR) {
        if (drLR > this.drLR) {
            this.highlight_drLR = 'highlight-up'
        }
        if (drLR < this.drLR) {
            this.highlight_drLR = 'highlight-down'
        }
        this.drLR = drLR;
    }

    setAuLR(auLR) {
        if (auLR > this.auLR) {
            this.highlight_auLR = 'highlight-up'
        }
        if (auLR < this.auLR) {
            this.highlight_auLR = 'highlight-down'
        }
        this.auLR = auLR;
    }

    /**
     * @param saLR : Number
     */
    setSaLR(saLR) {
        if (saLR > this.saLR) {
            this.highlight_saLR = 'highlight-up'
        }
        if (saLR < this.saLR) {
            this.highlight_saLR = 'highlight-down'
        }
        this.saLR = saLR;
    }

    setGnLR(gnLR) {
        if (gnLR > this.gnLR) {
            this.highlight_gnLR = 'highlight-up'
        }
        if (gnLR < this.gnLR) {
            this.highlight_gnLR = 'highlight-down'
        }
        this.gnLR = gnLR;
    }

    setJiLR(jiLR) {
        if (jiLR > this.jiLR) {
            this.highlight_jiLR = 'highlight-up'
        }
        if (jiLR < this.jiLR) {
            this.highlight_jiLR = 'highlight-down'
        }
        this.jiLR = jiLR;
    }

    setUnLR(unLR) {
        if (unLR > this.unLR) {
            this.highlight_unLR = 'highlight-up'
        }
        if (unLR < this.unLR) {
            this.highlight_unLR = 'highlight-down'
        }
        this.unLR = unLR;
    }

    setPwr(pwr) {
        if (pwr > this.pwr) {
            this.highlight_pwr = 'highlight-up'
        }
        if (pwr < this.pwr) {
            this.highlight_pwr = 'highlight-down'
        }
        this.pwr = pwr;
    }

    setMag(mag) {
        if (mag > this.mag) {
            this.highlight_mag = 'highlight-up'
        }
        if (mag < this.mag) {
            this.highlight_mag = 'highlight-down'
        }
        this.mag = mag;
    }

    setSkl(skl) {
        if (skl > this.skl) {
            this.highlight_skl = 'highlight-up'
        }
        if (skl < this.skl) {
            this.highlight_skl = 'highlight-down'
        }
        this.skl = skl;
    }

    setDef(def) {
        if (def > this.def) {
            this.highlight_def = 'highlight-up'
        }
        if (def < this.def) {
            this.highlight_def = 'highlight-down'
        }
        this.def = def;
    }


    setHp(hp) {
        if (hp > this.hp) {
            this.highlight_hp = 'highlight-up'
        } else {
            this.highlight_hp = 'highlight-down'
        }
        this.hp = hp;
    }

    setSpr(spr) {
        if (spr > this.spr) {
            this.highlight_spr = 'highlight-up'
        }
        if (spr < this.spr) {
            this.highlight_spr = 'highlight-down'
        }
        this.spr = spr;
    }

    setChm(chm) {
        if (chm > this.chm) {
            this.highlight_chm = 'highlight-up'
        }
        if (chm < this.chm) {
            this.highlight_chm = 'highlight-down'
        }
        this.chm = chm;
    }

    setLck(lck) {
        if (lck > this.lck) {
            this.highlight_lck = 'highlight-up'
        }
        if (lck < this.lck) {
            this.highlight_lck = 'highlight-down'
        }
        this.lck = lck;
    }

    setTech(tech) {
        if (tech > this.tech) {
            this.highlight_tech = 'highlight-up'
        }
        if (tech < this.tech) {
            this.highlight_tech = 'highlight-down'
        }
        this.tech = tech;
    }

    unsticky() {
        this.sticky = STICKY_F.UNSTICKY;
    }

    setEnergy(energy) {
        if (energy > this.energy) {
            this.highlight_energy = 'highlight-up'
        }
        if (energy < this.energy) {
            this.highlight_energy = 'highlight-down'
        }
        this.energy = energy;
    }

    set_equipment(e) {
        this.setEquip(e);
    }

    setEquip(equip) {
        this.equip = equip;
    }

    /**
     * @typedef SPECIAL
     * @type {object}
     * @property {string} text - name
     * @property {int} value - ID
     */

    /**
     * @param special : SPECIAL
     */
    setSpecial(special) {
        if (this.special && (this.special.value !== special.value)) this.highlight_special = 'highlight-change'
        this.special = special;
    }

    /**
     * @param immunity : Number
     */
    setImmunity(immunity) {
        if (this.ARMOR()) {
            const poison = IMMUNITY.Poison.value
            const petrify = IMMUNITY.Petrify.value
            const darkness = IMMUNITY.Darkness.value
            const confusion = IMMUNITY.Confusion.value
            const flameburst = IMMUNITY.Flameburst.value
            const freeze = IMMUNITY.Freeze.value
            const paralysis = IMMUNITY.Paralysis.value
            const sleep = IMMUNITY.Sleep.value

            if ((this.getImmunity() & poison) !== (immunity & poison)) this.highlight_immunity_poison = 'highlight-change'
            if ((this.getImmunity() & petrify) !== (immunity & petrify)) this.highlight_immunity_petrify = 'highlight-change'
            if ((this.getImmunity() & darkness) !== (immunity & darkness)) this.highlight_immunity_darkness = 'highlight-change'
            if ((this.getImmunity() & confusion) !== (immunity & confusion)) this.highlight_immunity_confusion = 'highlight-change'
            if ((this.getImmunity() & flameburst) !== (immunity & flameburst)) this.highlight_immunity_flameburst = 'highlight-change'
            if ((this.getImmunity() & freeze) !== (immunity & freeze)) this.highlight_immunity_freeze = 'highlight-change'
            if ((this.getImmunity() & paralysis) !== (immunity & paralysis)) this.highlight_immunity_paralysis = 'highlight-change'
            if ((this.getImmunity() & sleep) !== (immunity & sleep)) this.highlight_immunity_sleep = 'highlight-change'

        }
        this.immunity = immunity;
    }

    /**
     * @param c : Card
     */
    setHidden(c) {
        this.highlight_hidden = 'highlight-change'
        this.hidden = c
    }

    /**
     * @param c : Card
     */
    setFirst(c) {
        this.highlight_first = 'highlight-change'
        this.first = c
    }

    /**
     * @param c : Card
     */
    setSecond(c) {
        this.highlight_second = 'highlight-change'
        this.second = c
    }

    /**
     * @param c : Card
     */
    setThird(c) {
        this.highlight_third = 'highlight-change'
        this.third = c
    }

    /**
     * @param c : Card
     */
    setLeaving(c) {
        this.highlight_leaving = 'highlight-change'
        this.leaving = c
    }

    material_code() {
        this.reset_highlights()
        if (this.WOOD()) {
            this.taint(ESSENCE.DRYAD);
            if (this.energy >= 8) {
                this.prehidden = new Dryad();
            }
        } else if (this.AEROLITE()) {
            this.decrease(ESSENCE.SALA);
        }
    }

    item_code() {
        this.reset_highlights()
        this.item.CODE(this);
    }

    item_energy() {
        this.reset_highlights()
        this.setEnergy(this.item.ENERGY());
    }

    push_cards() {
        this.reset_highlights()
        if (!(this.prehidden instanceof No_Card)) {
            if (this.hidden instanceof No_Card) {
                this.setHidden(this.prehidden);
            } else if (this.first instanceof No_Card) {
                this.setFirst(this.hidden);
                this.setHidden(this.prehidden);
            } else if (this.second instanceof No_Card) {
                this.setSecond(this.first);
                this.setFirst(this.hidden);
                this.setHidden(this.prehidden);
            } else if (this.third instanceof No_Card) {
                this.setThird(this.second);
                this.setSecond(this.first);
                this.setFirst(this.hidden);
                this.setHidden(this.prehidden);
            } else if (STICKY_F.STICKY === this.sticky) {
                if (this.PIXIE(this.third)) {
                    this.highlight_third = 'highlight-sticky'
                    if (this.PIXIE(this.second)) {
                        this.highlight_second = 'highlight-sticky'
                        if (this.PIXIE(this.first)) {
                            this.highlight_first = 'highlight-sticky'
                            this.setLeaving(this.hidden);
                            this.setHidden(this.prehidden);
                        } else {
                            this.setLeaving(this.first);
                            this.setFirst(this.hidden);
                            this.setHidden(this.prehidden);
                        }
                    } else {
                        this.setLeaving(this.second);
                        this.setSecond(this.first);
                        this.setFirst(this.hidden);
                        this.setHidden(this.prehidden);
                    }
                } else {
                    this.setLeaving(this.third);
                    this.setThird(this.second);
                    this.setSecond(this.first);
                    this.setFirst(this.hidden);
                    this.setHidden(this.prehidden);
                }
            } else {
                this.setLeaving(this.third);
                this.setThird(this.second);
                this.setSecond(this.first);
                this.setFirst(this.hidden);
                this.setHidden(this.prehidden);
            }
        }
    }

    /**
     * @param pos : Card
     * @return {boolean}
     * @constructor
     */
    PIXIE(pos) {
        return (pos instanceof Pixie_Of_Jealousy
            || pos instanceof Pixie_Of_Laziness
            || pos instanceof Pixie_Of_Lust
            || pos instanceof Pixie_Of_Pride
            || pos instanceof Pixie_Of_Gluttony
            || pos instanceof Pixie_Of_Rage || pos instanceof Pixie_Of_Greed);
    }

    activate_cards() {
        this.reset_highlights()
        this.leaving.LEAVING(this);
        this.third.THIRD(this);
        this.second.SECOND(this);
        this.first.FIRST(this);
        this.hidden.HIDDEN(this);
    }

    // Temp

    // Material functions

    /**
     * @return {boolean}
     * @constructor
     */
    WOOD() {
        return ((this.material > 11) && (this.material < 20));
    }

    /**
     * @return {boolean}
     * @constructor
     */
    AEROLITE() {
        return ((this.material > 39) && (this.material < 48));
    }

    /**
     * @return {boolean}
     * @constructor
     */
    ESSTOTAL() {
        return (this.wi + this.sh + this.dr + this.au + this.sa + this.gn + this.ji + this.un);
    }

    /**
     * @return {boolean}
     * @constructor
     */
    HIDE() {
        return ((this.material > 23) && (this.material < 28));
    }

    // Type functions

    /**
     * @returns {boolean}
     * @constructor
     */
    KNIFE() {
        return (1 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SWORD() {
        return (2 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    AXE() {
        return (3 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    THSWORD() {
        return (4 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    THAXE() {
        return (5 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HAMMER() {
        return (6 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SPEAR() {
        return (7 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    STAFF() {
        return (8 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    GLOVE() {
        return (9 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    FLAIL() {
        return (10 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    BOW() {
        return (11 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SHIELD() {
        return (12 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HELM() {
        return (13 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HAT() {
        return (14 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    HAUBERK() {
        return (15 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    ROBE() {
        return (16 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    RING() {
        return (18 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    BOOTS() {
        return (19 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    SHOES() {
        return (20 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    MANTLE() {
        return (22 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    PENDANT() {
        return (23 === this.getEquip());
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    WEAPON() {
        return (this.getEquip() < 12);
    }

    /**
     * @returns {boolean}
     * @constructor
     */
    ARMOR() {
        return (this.getEquip() > 11);
    }

    // Utilities
    /**
     * @param num : int
     * @returns {number}
     */
    perc150(num) {
        num = Math.trunc(num * 3 / 2);
        if (num > 255) {
            num = 255;
        }
        return num;
    }

    /**
     * @param num : int
     * @returns {number}
     */
    perc125(num) {
        num = Math.trunc(num * 5 / 4);
        if (num > 255) {
            num = 255;
        }
        return num;
    }

    /**
     * @param num : int
     * @returns {number}
     */
    perc75(num) {
        num = Math.trunc(num / 4) * 3;
        return num;
    }

    /**
     * @param num : int
     * @returns {number}
     */
    perc50(num) {
        num = Math.trunc(num / 2);
        return num;
    }

    find_and_run_s13(c) {
        if (this.third instanceof c) {
            this.third.THIRD(this);
        } else if (this.second instanceof c) {
            this.second.SECOND(this);
        } else if (this.first instanceof c) {
            this.first.FIRST(this);
        } else {
            console.log("error with " + c.name + "\n");
        }
    }

    // Stat functions
    /**
     * @param min : int
     * @param stat : STAT
     */
    stat_min(min, stat) {
        switch (stat) {
            case STAT.PWR:
                this.mpwr = min;
                break;
            case STAT.SKL:
                this.mskl = min;
                break;
            case STAT.DEF:
                this.mdef = min;
                break;
            case STAT.MAG:
                this.mmag = min;
                break;
            case STAT.HP:
                this.mhp = min;
                break;
            case STAT.SPR:
                this.mspr = min;
                break;
            case STAT.CHM:
                this.mchm = min;
                break;
            case STAT.LCK:
                this.mlck = min;
                break;
            case STAT.ALL:
                this.stat_min(min, STAT.PWR);
                this.stat_min(min, STAT.SKL);
                this.stat_min(min, STAT.DEF);
                this.stat_min(min, STAT.MAG);
                this.stat_min(min, STAT.HP);
                this.stat_min(min, STAT.SPR);
                this.stat_min(min, STAT.CHM);
                this.stat_min(min, STAT.LCK);
                break;
        }
    }

    /**
     * @param low : int
     * @param high : int
     * @param stat : STAT
     */
    stat_limits(low, high, stat) {
        switch (stat) {
            case STAT.PWR:
                if (low < this.lpwr) {
                    this.lpwr = low;
                }
                if (high > this.hpwr) {
                    this.hpwr = high;
                }
                break;
            case STAT.SKL:
                if (low < this.lskl) {
                    this.lskl = low;
                }
                if (high > this.hskl) {
                    this.hskl = high;
                }
                break;
            case STAT.DEF:
                if (low < this.ldef) {
                    this.ldef = low;
                }
                if (high > this.hdef) {
                    this.hdef = high;
                }
                break;
            case STAT.MAG:
                if (low < this.lmag) {
                    this.lmag = low;
                }
                if (high > this.hmag) {
                    this.hmag = high;
                }
                break;
            case STAT.HP:
                if (low < this.lhp) {
                    this.lhp = low;
                }
                if (high > this.hhp) {
                    this.hhp = high;
                }
                break;
            case STAT.SPR:
                if (low < this.lspr) {
                    this.lspr = low;
                }
                if (high > this.hspr) {
                    this.hspr = high;
                }
                break;
            case STAT.CHM:
                if (low < this.lchm) {
                    this.lchm = low;
                }
                if (high > this.hchm) {
                    this.hchm = high;
                }
                break;
            case STAT.LCK:
                if (low < this.llck) {
                    this.llck = low;
                }
                if (high > this.hlck) {
                    this.hlck = high;
                }
                break;
            case STAT.ALL:
                this.stat_limits(low, high, STAT.PWR);
                this.stat_limits(low, high, STAT.SKL);
                this.stat_limits(low, high, STAT.DEF);
                this.stat_limits(low, high, STAT.MAG);
                this.stat_limits(low, high, STAT.HP);
                this.stat_limits(low, high, STAT.SPR);
                this.stat_limits(low, high, STAT.CHM);
                this.stat_limits(low, high, STAT.LCK);
                break;
        }
    }

    /**
     * @param value : int
     * @return {number}
     */
    up_value(value) {
        switch (value) {
            case -10:
                return -5;
            case -5:
                return -3;
            case -3:
                return -1;
            case -1:
                return 0;
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 3:
                return 4;
            case 4:
                return 5;
            case 5:
                return 7;
            case 7:
                return 9;
            case 9:
                return 10;
            case 10:
                return 12;
            case 12:
                return 15;
            case 15:
                return 20;
            case 20:
                return 20;
            default:
                console.log(String.format("stat error: %d found\n", value));
                return 0;
        }
    }

    /**
     *
     * @param value : int
     * @return {number}
     */
    down_value(value) {
        switch (value) {
            case -10:
                return -10;
            case -5:
                return -10;
            case -3:
                return -5;
            case -1:
                return -3;
            case 0:
                return -1;
            case 1:
                return 0;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 3;
            case 5:
                return 4;
            case 7:
                return 5;
            case 9:
                return 7;
            case 10:
                return 9;
            case 12:
                return 10;
            case 15:
                return 12;
            case 20:
                return 15;
            default:
                console.log(String.format("stat error: %d found\n", value));
                return 0;
        }
    }

    /**
     * @param stat : STAT
     */
    increase_stat(stat) {
        switch (stat) {
            case STAT.PWR:
                this.setPwr(this.up_value(this.getPwr()));
                break;
            case STAT.SKL:
                this.setSkl(this.up_value(this.getSkl()));
                break;
            case STAT.DEF:
                this.setDef(this.up_value(this.getDef()));
                break;
            case STAT.MAG:
                this.setMag(this.up_value(this.getMag()));
                break;
            case STAT.HP:
                this.setHp(this.up_value(this.getHp()));
                break;
            case STAT.SPR:
                this.setSpr(this.up_value(this.getSpr()));
                break;
            case STAT.CHM:
                this.setChm(this.up_value(this.getChm()));
                break;
            case STAT.LCK:
                this.setLck(this.up_value(this.getLck()));
                break;
            case STAT.ALL:
                this.increase_stat(STAT.PWR);
                this.increase_stat(STAT.SKL);
                this.increase_stat(STAT.DEF);
                this.increase_stat(STAT.MAG);
                this.increase_stat(STAT.HP);
                this.increase_stat(STAT.SPR);
                this.increase_stat(STAT.CHM);
                this.increase_stat(STAT.LCK);
                break;
        }
    }

    /**
     * @param stat : STAT
     */
    decrease_stat(stat) {
        switch (stat) {
            case STAT.PWR:
                this.setPwr(this.down_value(this.getPwr()));
                break;
            case STAT.SKL:
                this.setSkl(this.down_value(this.getSkl()));
                break;
            case STAT.DEF:
                this.setDef(this.down_value(this.getDef()));
                break;
            case STAT.MAG:
                this.setMag(this.down_value(this.getMag()));
                break;
            case STAT.HP:
                this.setHp(this.down_value(this.getHp()));
                break;
            case STAT.SPR:
                this.setSpr(this.down_value(this.getSpr()));
                break;
            case STAT.CHM:
                this.setChm(this.down_value(this.getChm()));
                break;
            case STAT.LCK:
                this.setLck(this.down_value(this.getLck()));
                break;
            case STAT.ALL:
                this.decrease_stat(STAT.PWR);
                this.decrease_stat(STAT.SKL);
                this.decrease_stat(STAT.DEF);
                this.decrease_stat(STAT.MAG);
                this.decrease_stat(STAT.HP);
                this.decrease_stat(STAT.SPR);
                this.decrease_stat(STAT.CHM);
                this.decrease_stat(STAT.LCK);
                break;
        }
    }

    calculate_stats() {
        this.reset_highlights()

        const t = {
            0: 0,
            1: 0,
            2: -1,
            3: -1,
            4: -3,
            5: -3,
            7: -5,
            9: -5,
            10: -5,
            12: -10,
            15: -10,
            20: -10
        }

        if (this.getPwr() < this.mpwr && this.getPwr() >= t[this.mpwr]) {
            this.setPwr(this.mpwr);
        }
        if (this.getSkl() < this.mskl && this.getSkl() >= t[this.mskl]) {
            this.setSkl(this.mskl);
        }
        if (this.getDef() < this.mdef && this.getDef() >= t[this.mdef]) {
            this.setDef(this.mdef);
        }
        if (this.getMag() < this.mmag && this.getMag() >= t[this.mmag]) {
            this.setMag(this.mmag);
        }
        if (this.getHp() < this.mhp && this.getHp() >= t[this.mhp]) {
            this.setHp(this.mhp);
        }
        if (this.getSpr() < this.mspr && this.getSpr() >= t[this.mspr]) {
            this.setSpr(this.mspr);
        }
        if (this.getChm() < this.mchm && this.getChm() >= t[this.mchm]) {
            this.setChm(this.mchm);
        }
        if (this.getLck() < this.mlck && this.getLck() >= t[this.mlck]) {
            this.setLck(this.mlck);
        }

        if (this.getPwr() < this.lpwr) {
            this.setPwr(this.lpwr);
        }
        if (this.getPwr() > this.hpwr) {
            this.setPwr(this.hpwr);
        }
        if (this.getSkl() < this.lskl) {
            this.setSkl(this.lskl);
        }
        if (this.getSkl() > this.hskl) {
            this.setSkl(this.hskl);
        }
        if (this.getDef() < this.ldef) {
            this.setDef(this.ldef);
        }
        if (this.getDef() > this.hdef) {
            this.setDef(this.hdef);
        }
        if (this.getMag() < this.lmag) {
            this.setMag(this.lmag);
        }
        if (this.getMag() > this.hmag) {
            this.setMag(this.hmag);
        }
        if (this.getHp() < this.lhp) {
            this.setHp(this.lhp);
        }
        if (this.getHp() > this.hhp) {
            this.setHp(this.hhp);
        }
        if (this.getSpr() < this.lspr) {
            this.setSpr(this.lspr);
        }
        if (this.getSpr() > this.hspr) {
            this.setSpr(this.hspr);
        }
        if (this.getChm() < this.lchm) {
            this.setChm(this.lchm);
        }
        if (this.getChm() > this.hchm) {
            this.setChm(this.hchm);
        }
        if (this.getLck() < this.llck) {
            this.setLck(this.llck);
        }
        if (this.getLck() > this.hlck) {
            this.setLck(this.hlck);
        }
    }

    // Essence functions

    /**
     * @param essence : ESSENCE
     */
    increase(essence) {
        switch (essence) {
            case ESSENCE.WISP:
                if (this.wi < 15 && this.energy >= this.getWiR() * power2[this.wi]) {
                    this.setEnergy(this.energy - this.getWiR() * power2[this.wi]);
                    this.setWi(this.wi + 1);
                }
                break;
            case ESSENCE.SHADE:
                if (this.sh < 15 && this.energy >= this.getShR() * power2[this.sh]) {
                    this.setEnergy(this.energy - this.getShR() * power2[this.sh]);
                    this.setSh(this.sh + 1);
                }
                break;
            case ESSENCE.DRYAD:
                if (this.dr < 15 && this.energy >= this.getDrR() * power2[this.dr]) {
                    this.setEnergy(this.energy - this.getDrR() * power2[this.dr]);
                    this.setDr(this.dr + 1);
                }
                break;
            case ESSENCE.AURA:
                if (this.au < 15 && this.energy >= this.getAuR() * power2[this.au]) {
                    this.setEnergy(this.energy - this.getAuR() * power2[this.au]);
                    this.setAu(this.au + 1);
                }
                break;
            case ESSENCE.SALA:
                if (this.sa < 15 && this.energy >= this.getSaR() * power2[this.sa]) {
                    this.setEnergy(this.energy - this.getSaR() * power2[this.sa]);
                    this.setSa(this.sa + 1);
                }
                break;
            case ESSENCE.GNOME:
                if (this.gn < 15 && this.energy >= this.getGnR() * power2[this.gn]) {
                    this.setEnergy(this.energy - this.getGnR() * power2[this.gn]);
                    this.setGn(this.gn + 1);
                }
                break;
            case ESSENCE.JINN:
                if (this.ji < 15 && this.energy >= this.getJiR() * power2[this.ji]) {
                    this.setEnergy(this.energy - this.getJiR() * power2[this.ji]);
                    this.setJi(this.ji + 1);
                }
                break;
            case ESSENCE.UNDINE:
                if (this.un < 15 && this.energy >= this.getUnR() * power2[this.un]) {
                    this.setEnergy(this.energy - this.getUnR() * power2[this.un]);
                    this.setUn(this.un + 1);
                }
                break;
        }
    }

    increase_essences() {
        this.reset_highlights()
        while (this.getDrLR() > 0) {
            this.setDrLR(this.drLR - 1)
            this.increase(ESSENCE.DRYAD)
        }
        while (this.getAuLR() > 0) {
            this.setAuLR(this.auLR - 1)
            this.increase(ESSENCE.AURA)
        }
        while (this.getSaLR() > 0) {
            this.setSaLR(this.saLR - 1)
            this.increase(ESSENCE.SALA)
        }
        while (this.getGnLR() > 0) {
            this.setGnLR(this.gnLR - 1)
            this.increase(ESSENCE.GNOME)
        }
        while (this.getJiLR() > 0) {
            this.setJiLR(this.jiLR - 1)
            this.increase(ESSENCE.JINN)
        }
        while (this.getUnLR() > 0) {
            this.setUnLR(this.unLR - 1)
            this.increase(ESSENCE.UNDINE)
        }
    }

    /**
     * @param essence : ESSENCE
     */
    decrease(essence) {
        switch (essence) {
            case ESSENCE.WISP:
                if (this.wi > 0) {
                    this.setWi(this.wi - 1);
                    this.setEnergy(this.energy + this.getWiR() * power2[this.wi]);
                }
                break;
            case ESSENCE.SHADE:
                if (this.sh > 0) {
                    this.setSh(this.sh - 1);
                    this.setEnergy(this.energy + this.getShR() * power2[this.sh]);
                }
                break;
            case ESSENCE.DRYAD:
                if (this.dr > 0 && this.energy >= 4) {
                    this.setDr(this.dr - 1);
                    this.setEnergy(this.energy + this.getDrR() * power2[this.dr]);
                }
                break;
            case ESSENCE.AURA:
                if (this.au > 0 && this.energy >= 4) {
                    this.setAu(this.au - 1);
                    this.setEnergy(this.energy + this.getAuR() * power2[this.au]);
                }
                break;
            case ESSENCE.SALA:
                if (this.sa > 0 && this.energy >= 4) {
                    this.setSa(this.sa - 1);
                    this.setEnergy(this.energy + this.getSaR() * power2[this.sa]);
                }
                break;
            case ESSENCE.GNOME:
                if (this.gn > 0 && this.energy >= 4) {
                    this.setGn(this.gn - 1);
                    this.setEnergy(this.energy + this.getGnR() * power2[this.gn]);
                }
                break;
            case ESSENCE.JINN:
                if (this.ji > 0 && this.energy >= 4) {
                    this.setJi(this.ji - 1);
                    this.setEnergy(this.energy + this.getJiR() * power2[this.ji]);
                }
                break;
            case ESSENCE.UNDINE:
                if (this.un > 0 && this.energy >= 4) {
                    this.setUn(this.un - 1);
                    this.setEnergy(this.energy + this.getUnR() * power2[this.un]);
                }
                break;
        }
    }

    /**
     * @param essence : ESSENCE
     */
    taint(essence) {
        if (WORLD_CARD.ANCIENT_MOON === this.awc) {
            switch (essence) {
                case ESSENCE.WISP:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.WISP);
                    }
                    break;
                case ESSENCE.SHADE:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.SHADE);
                    }
                    break;
                case ESSENCE.DRYAD:
                    if (this.energy >= 8) {
                        this.setDrLR(this.drLR + 1);
                    }
                    break;
                case ESSENCE.AURA:
                    if (this.energy >= 8) {
                        this.setAuLR(this.auLR + 1);
                    }
                    break;
                case ESSENCE.SALA:
                    if (this.energy >= 8) {
                        this.setSaLR(this.saLR + 1);
                    }
                    break;
                case ESSENCE.GNOME:
                    if (this.energy >= 8) {
                        this.setGnLR(this.gnLR + 1);
                    }
                    break;
                case ESSENCE.JINN:
                    if (this.energy >= 8) {
                        this.setJiLR(this.jiLR + 1);
                    }
                    break;
                case ESSENCE.UNDINE:
                    if (this.energy >= 8) {
                        this.setUnLR(this.unLR + 1);
                    }
                    break;
            }
        } else if (WORLD_CARD.MIRRORED_WORLD === this.awc) {
            switch (essence) {
                case ESSENCE.WISP:
                    if (0 === this.sh && this.energy >= 8) {
                        this.increase(ESSENCE.WISP);
                    } else if (this.wi < this.sh) {
                        while (this.wi > 0)
                            this.decrease(ESSENCE.WISP);
                    }
                    break;
                case ESSENCE.SHADE:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.SHADE);
                    }
                    if (this.wi < this.sh) {
                        while (this.wi > 0)
                            this.decrease(ESSENCE.WISP);
                    }
                    break;
                case ESSENCE.DRYAD:
                    if (0 === this.au || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.setDrLR(this.drLR + 1);
                    } else if (this.wi < this.sh) {
                        this.decrease(ESSENCE.AURA);
                        if (this.energy >= 8)
                            this.setDrLR(this.drLR + 1);
                    }
                    break;
                case ESSENCE.AURA:
                    if (0 === this.dr || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.setAuLR(this.auLR + 1);
                    } else if (this.sh < this.wi) {
                        this.decrease(ESSENCE.DRYAD);
                        if (this.energy >= 8)
                            this.setAuLR(this.auLR + 1);
                    }
                    break;
                case ESSENCE.SALA:
                    if (0 === this.gn) {
                        this.decrease(ESSENCE.UNDINE);
                        if (this.energy >= 8)
                            this.setSaLR(this.saLR + 1);
                    }
                    break;
                case ESSENCE.GNOME:
                    if (0 === this.ji) {
                        this.decrease(ESSENCE.SALA);
                        if (this.energy >= 8)
                            this.setGnLR(this.gnLR + 1);
                    }
                    break;
                case ESSENCE.JINN:
                    if (0 === this.un) {
                        this.decrease(ESSENCE.GNOME);
                        if (this.energy >= 8)
                            this.setJiLR(this.jiLR + 1);
                    }
                    break;
                case ESSENCE.UNDINE:
                    if (0 === this.sa) {
                        this.decrease(ESSENCE.JINN);
                        if (this.energy >= 8)
                            this.setUnLR(this.unLR + 1);
                    }
                    break;
            }
        } else { /* normal_world */
            switch (essence) {
                case ESSENCE.WISP:
                    if (this.energy >= 8) {
                        this.increase(ESSENCE.WISP);
                    }
                    if (this.wi > this.sh) {
                        while (this.sh > 0)
                            this.decrease(ESSENCE.SHADE);
                    }
                    break;
                case ESSENCE.SHADE:
                    if (0 === this.wi && this.energy >= 8) {
                        this.increase(ESSENCE.SHADE);
                    } else if (this.wi > this.sh) {
                        while (this.sh > 0)
                            this.decrease(ESSENCE.SHADE);
                    }
                    break;
                case ESSENCE.DRYAD:
                    if (0 === this.au || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.setDrLR(this.drLR + 1);
                    } else if (this.wi > this.sh) {
                        this.decrease(ESSENCE.AURA);
                        if (this.energy >= 8)
                            this.setDrLR(this.drLR + 1);
                    }
                    break;
                case ESSENCE.AURA:
                    if (0 === this.dr || this.wi === this.sh) {
                        if (this.energy >= 8)
                            this.setAuLR(this.auLR + 1);
                    } else if (this.sh > this.wi) {
                        this.decrease(ESSENCE.DRYAD);
                        if (this.energy >= 8)
                            this.setAuLR(this.auLR + 1);
                    }
                    break;
                case ESSENCE.SALA:
                    if (0 === this.un) {
                        this.decrease(ESSENCE.GNOME);
                        if (this.energy >= 8)
                            this.setSaLR(this.saLR + 1);
                    }
                    break;
                case ESSENCE.GNOME:
                    if (0 === this.sa) {
                        this.decrease(ESSENCE.JINN);
                        if (this.energy >= 8)
                            this.setGnLR(this.gnLR + 1);
                    }
                    break;
                case ESSENCE.JINN:
                    if (0 === this.gn) {
                        this.decrease(ESSENCE.UNDINE);
                        if (this.energy >= 8)
                            this.setJiLR(this.jiLR + 1);
                    }
                    break;
                case ESSENCE.UNDINE:
                    if (0 === this.ji) {
                        this.decrease(ESSENCE.SALA);
                        if (this.energy >= 8)
                            this.setUnLR(this.unLR + 1);
                    }
                    break;
            }
        }
    }
}

export {
    ForgedItem
}
