cc.Class({
    extends: cc.Component,

    properties: {
        magicBallPrefab: cc.Prefab,
        itemBGPrefab: cc.Prefab,
    },

    start() {

    },

    onLoad() {
        
    },

    addMagicBall(number) {
        let magicBall = cc.instantiate(this.magicBallPrefab);
        let itemBG = cc.instantiate(this.itemBGPrefab);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(number);
        magicBall.group = 'bagItem';
        this.node.addChild(itemBG);
        itemBG.addChild(magicBall);
        magicBall.setPosition(0, 0);
    },
});