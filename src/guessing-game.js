class GuessingGame {
    constructor() {
		this.mid = null;
		this.first = null;
		this.last = null;
	}

    setRange(min, max) {
		this.first = min;
		this.last = max;
    }

    guess() {
		this.mid = Math.round((this.first + this.last)/2);
		return this.mid;
    }

    lower() {
		this.last = this.mid;
    }

    greater() {
        this.first = this.mid;
    }
}

module.exports = GuessingGame;
