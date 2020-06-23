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
        secretStonePrefab: cc.Prefab,
        bag: cc.Node,
        clickAudio: cc.AudioSource,
    },

    start() {
        cc.log(level3Arr);
        let secretStone = cc.instantiate(this.secretStonePrefab);
        secretStone.getComponent('secretStone').init(level3Arr[1]);
        this.arr1.getComponent('submitItem').setItem(secretStone, false);
        secretStone.getComponent('secretStone').init(level3Arr[2]);
        this.arr2.getComponent('submitItem').setItem(secretStone, false);
        secretStone.getComponent('secretStone').init(level3Arr[3]);
        this.arr3.getComponent('submitItem').setItem(secretStone, false);
        secretStone.getComponent('secretStone').init(level3Arr[4]);
        this.arr4.getComponent('submitItem').setItem(secretStone, false);
        secretStone.getComponent('secretStone').init(level3Arr[5]);
        this.arr5.getComponent('submitItem').setItem(secretStone, false);
        secretStone.getComponent('secretStone').init(level3Arr[6]);
        this.arr6.getComponent('submitItem').setItem(secretStone, false);
        secretStone.getComponent('secretStone').init(level3Arr[7]);
        this.arr7.getComponent('submitItem').setItem(secretStone, false);
        secretStone.getComponent('secretStone').init(level3Arr[8]);
        this.arr8.getComponent('submitItem').setItem(secretStone, false);
    },

    get1() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[1]);
        this.node.active = false;
    },

    get2() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[2]);
        this.node.active = false;
    },

    get3() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[3]);
        this.node.active = false;
    },

    get4() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[4]);
        this.node.active = false;
    },

    get5() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[5]);
        this.node.active = false;
    },

    get6() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[6]);
        this.node.active = false;
    },

    get7() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[7]);
        this.node.active = false;
    },

    get8() {
        this.clickAudio.play();
        this.bag.getComponent('bag').addSecretStone(level3Arr[8]);
        this.node.active = false;
    },
});