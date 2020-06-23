cc.Class({
    extends: cc.Component,

    properties: {
        clickAudio: cc.AudioSource,
    },

    start() {

    },

    onClick() {
        this.clickAudio.play();
        topNodeZIndex = (topNodeZIndex + 1) % cc.macro.MAX_ZINDEX;
        this.node.parent.zIndex = topNodeZIndex;
        let submit = this.node.parent.getChildByName('item').getComponent('submitItem');
        let submitItem = submit.item;
        if (submitItem.name != 'magicball') {
            myAlert('请放入魔法球进行审判');
            return;
        }
        let submitNum = submit.itemData;
        if (submitNum == level2Target) {
            if (timeScore > 80) {
                cc.sys.localStorage.setItem('res', 'TLE');
                cc.sys.localStorage.setItem('finalTime', timeScore);
                cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
                cc.director.loadScene('result2');
                return;
            }
            let level2 = cc.sys.localStorage.getItem('level2');
            if (level2 == null) level2 = 0;
            else level2 = parseInt(level2);
            level2 |= 1;
            if (timeScore <= 55) level2 |= 2;
            if (timeScore <= 45 && maxSpaceScore <= 5) level2 |= 4;
            cc.sys.localStorage.setItem('level2', level2);
            if (timeScore <= 20) cc.sys.localStorage.setItem('ac4', 'get');
            if (timeScore >= 65) cc.sys.localStorage.setItem('ac5', 'get');
            cc.sys.localStorage.setItem('res', 'AC');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result2');
        } else {
            cc.sys.localStorage.setItem('res', 'WA');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result2');
        }
    }
});