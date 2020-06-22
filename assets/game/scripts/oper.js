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
        if ((item1.name != 'magicball' && item1.name != 'secretStone') || (item2.name != 'magicball' && item2.name != 'secretStone')) {
            myAlert('请放入魔法球or神秘石')
            return;
        }
        let data1 = parseInt(item1JS.itemData),
            data2 = parseInt(item2JS.itemData);
        this.secret = false;
        if (item1.name == 'secretStone' || item2.name == 'secretStone') this.secret = true;
        if (this.mode == 'add') {
            if (this.secret) this.bagNode.getComponent('bag').addSecretStone(data1 + data2);
            else this.bagNode.getComponent('bag').addMagicBall(data1 + data2);
            myAddTime(1);
        } else if (this.mode == 'sub') {
            if (this.secret) this.bagNode.getComponent('bag').addSecretStone(data1 - data2);
            else this.bagNode.getComponent('bag').addMagicBall(data1 - data2);
            myAddTime(1);
        } else if (this.mode == 'mul') {
            if (this.secret) this.bagNode.getComponent('bag').addSecretStone(data1 * data2);
            else this.bagNode.getComponent('bag').addMagicBall(data1 * data2);
            myAddTime(1);
        } else if (this.mode == 'div') {
            if (this.secret) this.bagNode.getComponent('bag').addSecretStone(data1 / data2);
            else this.bagNode.getComponent('bag').addMagicBall(Math.floor(data1 / data2));
            myAddTime(1);
        } else if (this.mode == 'mod') {
            if (this.secret) this.bagNode.getComponent('bag').addSecretStone(data1 % data2);
            else this.bagNode.getComponent('bag').addMagicBall(data1 % data2);
            myAddTime(1);
        } else if (this.mode == 'equal') {
            if (data1 == data2) myAlert('哟吼,感知到了这两个法力值是一样的呢');
            else myAlert('这两个法力值很不一样呢');
            myAddTime(1);
        } else if (this.mode == 'gt') {
            if (data1 > data2) myAlert('喔~~ 左边的能量很强呢');
            else myAlert('诶,左边的不咋地呀');
            myAddTime(1);
        } else if (this.mode == 'lt') {
            if (data1 < data2) myAlert('感知了一下,左边的的确弱点呢~');
            else myAlert("还行,感知到了失败的结果");
            myAddTime(1);
        } else if (this.mode == 'mid') {
            if (this.secret) this.bagNode.getComponent('bag').addSecretStone(Math.floor((data1 + data2)/2));
            else this.bagNode.getComponent('bag').addMagicBall(Math.floor((data1 + data2)/2));
            myAddTime(2);
        }
        this.node.active = false;
    },
});