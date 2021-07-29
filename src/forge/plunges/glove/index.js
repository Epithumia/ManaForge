import {Plunge} from "@/forge/plunges";

class Hand_Of_Midas extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Hand of Midas"
            case 'jp':
                return "ミダスの手"
            default:
                return "Hand of Midas"
        }
    }

    value() {
        return 7
    }
}

export {Hand_Of_Midas}
