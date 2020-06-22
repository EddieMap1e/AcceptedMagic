cc.Class({
    extends: cc.Component,

    properties: {
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
        if (this.node.group == 'bagItem') this.bagScrollView = this.node.parent.parent.parent.parent.getComponent(cc.ScrollView);
    },

    update() {
        this.worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    },

    init(n = null) {
        if (n == null) this.number = this.getRandomNumber(0, 1000);
        else this.number = n;
        myAddSpace(1);
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
        if (this.node.group == 'bagItem') {
            this.bagScrollView.vertical = false;
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

    onClick() {
        if (this.node.parent.group != 'bagItem') return;
    },

    copyItemEnd() {
        if (this.collisionNode == null) return;
        if (this.collisionNode.group == 'submitBox') this.collisionNode.getComponent('submitItem').setItem(this);
    },

    onCollisionEnter(other, self) {
        this.node.collisionNode = other.node;
    },

    onCollisionExit(other, self) {
        setTimeout(() => {
            this.node.collisionNode = null;
        }, 200);
    },

    deleteItem() {
        if (this.copyItem != null) this.copyItem.destroy();
        this.node.parent.destroy();
        myAddSpace(-1);
    },
});