cc.Class({
    extends: cc.Component,

    properties: {
        buttonAudio: cc.AudioSource,
    },

    start() {
        this.node.on('touchmove', this.onTouchMove, this);
    },

    onTouchMove(event) {
        if (event.target.name == 'listBG') return;
        let dx = event.getDeltaX();
        let dy = event.getDeltaY();
        this.node.setPosition(this.node.x + dx, this.node.y + dy);
    },

    myAdd() {
        cc.log('add');
        this.buttonAudio.play();
    },

    mySub() {
        cc.log('sub');
        this.buttonAudio.play();
    },

    myMul() {
        cc.log('mul');
        this.buttonAudio.play();
    },

    myDiv() {
        cc.log('div');
        this.buttonAudio.play();
    },

    myMod() {
        cc.log('mod');
        this.buttonAudio.play();
    },

    myEqual() {
        cc.log('equal');
        this.buttonAudio.play();
    },

    myGt() {
        cc.log('gt');
        this.buttonAudio.play();
    },

    myLt() {
        cc.log('lt');
        this.buttonAudio.play();
    },
});