cc.Class({
    extends: cc.Component,

    properties: {
        numberLabel: cc.Label,
        number: 0,
    },

    start() {
        if (this.node.group == 'copyItem') return;
        this.copyItem = null;
        this.node.on('touchstart', this.onTouchStart, this);
        this.node.on('touchmove', this.copyItemMove, this);
        this.node.on('touchend', this.onTouchEnd, this);
        this.node.on('touchcancel', this.onTouchEnd, this);
        this.worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.selectPanel = this.node.parent.getChildByName('selectPanel');
        if (this.node.parent.group == 'bagItem') this.bagScrollView = this.node.parent.parent.parent.parent.parent.getComponent(cc.ScrollView);
    },

    update() {
        this.worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    },

    init() {
        this.number = this.getRandomNumber(0, 10);
        this.setNumber(this.number);
        let R = this.getRandomNumber(50, 233);
        let G = this.getRandomNumber(50, 233);
        let B = this.getRandomNumber(50, 233);
        this.color = cc.color(R, G, B);
        this.setColor(this.color);
    },

    setColor(color) {
        this.node.parent.getChildByName('magicballBG').color = color;
    },

    setNumber(n) {
        this.numberLabel.string = n;
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },

    onTouchStart(event) {
        cc.log('touchstart');
        this.startPos = event.getLocation();
        this.copyPos = rootNode.convertToNodeSpaceAR(this.worldPos);
        if (this.copyItem != null) {
            this.copyItem.setPosition(this.copyPos);
            return;
        }
        this.copyItem = cc.instantiate(this.node);
        this.copyItem.opacity = 100;
        this.copyItem.active = false;
        rootNode.addChild(this.copyItem);
        this.copyItem.group = 'copyItem';
        this.copyItem.on('touchmove', this.copyItemMove, this);
        this.copyItem.on('touchend', this.onTouchEnd, this);
        this.copyItem.on('touchcancel', this.onTouchEnd, this);
    },

    copyItemMove(event) {
        if (this.node.parent.group == 'bagItem') {
            this.bagScrollView.vertical = false;
            this.selectPanel.active = false;
        }
        cc.log('touchmove');
        if (this.copyItem == null) return;
        let movePos = event.getLocation();
        let dis = this.startPos.sub(movePos).mag();
        this.copyItem.setPosition(this.copyItem.x + event.getDeltaX(), this.copyItem.y + event.getDeltaY());
        if (dis <= 20) return;
        this.copyItem.active = true;
    },

    onTouchEnd(event) {
        if (this.node.parent.group == 'bagItem') this.bagScrollView.vertical = true;
        cc.log('touchend');
        let movePos = event.getLocation();
        let dis = this.startPos.sub(movePos).mag();
        if (dis <= 20) this.onClick();
        if (this.copyItem == null) return;
        this.copyItem.active = false;
        this.copyItem.setPosition(this.copyPos);
    },

    deleteItem() {
        if (this.copyItem != null) this.copyItem.destroy();
        this.node.parent.parent.destroy();
    },

    onClick() {
        if (this.node.parent.group != 'bagItem') return;
        this.selectPanel.active = true;
        this.node.getComponent(cc.AudioSource).play();
    }
});