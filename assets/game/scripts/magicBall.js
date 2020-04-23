cc.Class({
    extends: cc.Component,

    properties: {
        numberLabel: cc.Label,
        number: 0,
    },

    start() {
        if (this.node.group == 'copyItem' || this.node.group == 'boxItem') return;
        this.copyItem = null;
        this.node.collisionNode = null;
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

    init(n = null) {
        if (n === null) this.number = this.getRandomNumber(0, 10);
        else this.number = n;
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
        this.startPos = event.getLocation();
        this.copyPos = rootNode.convertToNodeSpaceAR(this.worldPos);
        if (this.copyItem != null) {
            this.copyItem.setPosition(this.copyPos);
            return;
        }
        this.copyItem = cc.instantiate(this.node);
        this.copyItem.group = 'copyItem';
        this.copyItem.opacity = 100;
        this.copyItem.active = false;
        rootNode.addChild(this.copyItem);
        this.copyItem.on('touchmove', this.copyItemMove, this);
        this.copyItem.on('touchend', this.onTouchEnd, this);
        this.copyItem.on('touchcancel', this.onTouchEnd, this);
        this.copyItem.on('touchend', this.copyItemEnd, this.copyItem);
        this.node.on('touchend', this.copyItemEnd, this.copyItem);
        this.node.on('touchcancel', this.copyItemEnd, this.copyItem);
    },

    copyItemMove(event) {
        if (this.node.parent.group == 'bagItem') {
            this.bagScrollView.vertical = false;
            this.selectPanel.active = false;
        }
        if (this.copyItem == null) return;
        let movePos = event.getLocation();
        let dis = this.startPos.sub(movePos).mag();
        this.copyItem.setPosition(this.copyItem.x + event.getDeltaX(), this.copyItem.y + event.getDeltaY());
        if (dis <= 20) return;
        this.copyItem.active = true;
        this.copyItem.zIndex = topNodeZIndex + 1;
    },

    onTouchEnd(event) {
        if (this.node.parent.group == 'bagItem') this.bagScrollView.vertical = true;
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
    },

    onCollisionEnter(other, self) {
        this.node.collisionNode = other.node;
    },

    onCollisionExit(other, self) {
        setTimeout(() => {
            this.node.collisionNode = null;
        }, 200);
    },

    copyItemEnd() {
        if (this.collisionNode == null) return;
        if (this.collisionNode.group == 'submitBox') this.collisionNode.getComponent('submitItem').setItem(this);
    },
});