cc.Class({
    extends: cc.Component,

    properties: {
        itemAudio: cc.AudioSource,
    },

    start() {
        this.item = null;
        this.itemData = null;
    },

    setItem(itemNode, audio = true) {
        if (this.item != null) this.item.destroy();
        if (itemNode.name == 'magicball') {
            if (audio) this.itemAudio.play();
            this.item = cc.instantiate(itemNode);
            this.item.group = 'boxItem';
            this.item.opacity = 255;
            this.item.active = true;
            this.node.addChild(this.item);
            this.item.setPosition(0, 0);
            this.itemData = this.item.getComponent('magicBall').number;
        } else if (itemNode.name == 'secretStone') {
            if (audio) this.itemAudio.play();
            this.item = cc.instantiate(itemNode);
            this.item.group = 'boxItem';
            this.item.opacity = 255;
            this.item.active = true;
            this.node.addChild(this.item);
            this.item.setPosition(0, 0);
            this.itemData = this.item.getComponent('secretStone').number;
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