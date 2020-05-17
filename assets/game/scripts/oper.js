cc.Class({
    extends: cc.Component,

    properties: {
        bagNode: cc.Node,
        clickAudio: cc.AudioSource,
    },

    start() {
        this.node.on('touchmove', (event) => {
            this.node.setPosition(this.node.x + event.getDeltaX(), this.node.y + event.getDeltaY());
        }, this);
    },

    changeMode(mode) {
        this.mode = mode;
    },

    onClick() {
        this.clickAudio.play();
        if (this.mode == undefined) return;
        let item1JS = this.node.getChildByName('item1').getComponent('submitItem');
        let item2JS = this.node.getChildByName('item2').getComponent('submitItem');
        let item1 = item1JS.item;
        let item2 = item2JS.item;
        if (item1 == null || item2 == null) return;
        cc.log(this.mode);
        myAddTime(1);
        if (this.mode == 'add') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            this.bagNode.getComponent('bag').addMagicBall(data1 + data2);
        } else if (this.mode == 'sub') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            this.bagNode.getComponent('bag').addMagicBall(data1 - data2);
        } else if (this.mode == 'mul') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            this.bagNode.getComponent('bag').addMagicBall(data1 * data2);
        } else if (this.mode == 'div') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            this.bagNode.getComponent('bag').addMagicBall(Math.floor(data1 / data2));
        } else if (this.mode == 'mod') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            this.bagNode.getComponent('bag').addMagicBall(data1 % data2);
        } else if (this.mode == 'equal') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            if (data1 == data2) myAlert('哟吼,感知到了这两个魔法球法力值是一样的呢');
            else myAlert('这两个魔法球法力值很不一样呢');
        } else if (this.mode == 'gt') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            if (data1 > data2) myAlert('喔~~ 左边的魔法球能量很强呢');
            else myAlert('诶,左边的魔法球不咋地呀');
        } else if (this.mode == 'lt') {
            if (item1.name != 'magicball' || item2.name != 'magicball') return;
            let data1 = item1JS.itemData,
                data2 = item2JS.itemData;
            if (data1 < data2) myAlert('感知了一下,左边的的确轻点呢~');
            else myAlert("还行,感知到了失败的结果");
        }
        this.node.active = false;
    },
});