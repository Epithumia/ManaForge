import {Plunge} from "@/forge/plunges";

class Treefeller extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Treefeller"
            case 'jp':
                return "大木斬"
            default:
                return "Treefeller"
        }
    }

    value() {
        return 13
    }
}

export {Treefeller}
