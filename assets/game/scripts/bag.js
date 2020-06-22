cc.Class({
    extends: cc.Component,

    properties: {
        magicBallPrefab: cc.Prefab,
        itemBGPrefab: cc.Prefab,
        secretStonePrefab:cc.Prefab,
    },

    start() {
        
    },

    onLoad() {
        
    },

    addMagicBall(number=null) {
        let magicBall = cc.instantiate(this.magicBallPrefab);
        let itemBG = cc.instantiate(this.itemBGPrefab);
        magicBall.getChildByName('magicball').getComponent('magicBall').init(number);
        magicBall.group = 'bagItem';
        this.node.addChild(itemBG);
        itemBG.addChild(magicBall);
        magicBall.setPosition(0, 0);
    },

    addSecretStone(number=null){
        let secretStone = cc.instantiate(this.secretStonePrefab);
        let itemBG = cc.instantiate(this.itemBGPrefab);
        secretStone.getComponent('secretStone').init(number);
        secretStone.group = 'bagItem';
        this.node.addChild(itemBG);
        itemBG.addChild(secretStone);
        secretStone.setPosition(0,0);
    }
});