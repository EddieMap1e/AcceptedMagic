cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: cc.Label,
        spaceLabel: cc.Label
    },

    start() {
        this.timeLabel.string = 0;
        this.spaceLabel.string = 0;
    },

    addTimeScore(x) {
        let t = timeScore + x;
        this.timeLabel.string = t;
        timeScore += x;
    },

    addSpaceScore(x) {
        let t = spaceScore + x;
        if (t > maxSpaceScore) {
            maxSpaceScore = t;
            this.spaceLabel.string = t;
        }
        spaceScore += x;
    }
});