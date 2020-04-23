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
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('add');
        this.node.active = false;
    },

    mySub() {
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('sub');
        this.node.active = false;
    },

    myMul() {
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('mul');
        this.node.active = false;
    },

    myDiv() {
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('div');
        this.node.active = false;
    },

    myMod() {
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('mod');
        this.node.active = false;
    },

    myEqual() {
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('equal');
        this.node.active = false;
    },

    myGt() {
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('gt');
        this.node.active = false;
    },

    myLt() {
        this.buttonAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % 999999;
        rootNode.getChildByName('oper2').zIndex = topNodeZIndex;
        rootNode.getChildByName('oper2').setPosition(0, 0);
        rootNode.getChildByName('oper2').active = true;
        rootNode.getChildByName('oper2').getComponent('oper').changeMode('lt');
        this.node.active = false;
    },
});