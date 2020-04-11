cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        this.item = null;
        this.itemData = null;
    },

    setItem(itemNode) {
        if (this.item != null) this.item.destroy();
        if (itemNode.name == 'magicball') {
            this.item = cc.instantiate(itemNode);
            this.item.group = 'boxItem';
            this.item.opacity = 255;
            this.item.active = true;
            this.node.addChild(this.item);
            this.item.setPosition(0, 0);
            this.itemData = this.item.getComponent('magicBall').number;
            cc.log(this.itemData);
        }
    },

    onDisable() {
        if (this.item != null) {
            this.item.destroy();
            this.item = null;
            this.itemData = null;
        }
    },
});