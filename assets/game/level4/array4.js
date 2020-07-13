cc.Class({
    extends: cc.Component,

    properties: {
        arr1: cc.Node,
        arr2: cc.Node,
        arr3: cc.Node,
        arr4: cc.Node,
        arr5: cc.Node,
        arr6: cc.Node,
        arr7: cc.Node,
        arr8: cc.Node,
        arr9: cc.Node,
        arr10: cc.Node,
        secretStonePrefab: cc.Prefab,
        magicBallPrefab: cc.Prefab,
        bag: cc.Node,
        clickAudio: cc.AudioSource,
    },

    start() {
        let magicBall = cc.instantiate(this.magicBallPrefab);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[1]);
        this.arr1.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[2]);
        this.arr2.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[3]);
        this.arr3.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[4]);
        this.arr4.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[5]);
        this.arr5.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[6]);
        this.arr6.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[7]);
        this.arr7.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[8]);
        this.arr8.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[9]);
        this.arr9.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(level4Arr[10]);
        this.arr10.getComponent('submitItem').setItem(magicBall.getChildByName('magicball'), false);
    },

    get1() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[1]);
        myAddTime(1);
        this.node.active = false;
    },

    get2() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[2]);
        myAddTime(1);
        this.node.active = false;
    },

    get3() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[3]);
        myAddTime(1);
        this.node.active = false;
    },

    get4() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[4]);
        myAddTime(1);
        this.node.active = false;
    },

    get5() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[5]);
        myAddTime(1);
        this.node.active = false;
    },

    get6() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[6]);
        myAddTime(1);
        this.node.active = false;
    },

    get7() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[7]);
        myAddTime(1);
        this.node.active = false;
    },

    get8() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[8]);
        myAddTime(1);
        this.node.active = false;
    },

    get9() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[9]);
        myAddTime(1);
        this.node.active = false;
    },

    get10() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addMagicBall(level4Arr[10]);
        myAddTime(1);
        this.node.active = false;
    },
});