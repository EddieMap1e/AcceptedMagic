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
        let submitNum = parseInt(submit.itemData);
        if (submitNum == 233) {
            let level5 = cc.sys.localStorage.getItem('level5');
            if (level5 == null) level5 = 0;
            else level5 = parseInt(level5);
            level5 |= 1;
            if (maxSpaceScore <= 12) level5 |= 2;
            if (timeScore <= 20) level5 |= 4;
            cc.sys.localStorage.setItem('level5', level5);
            cc.sys.localStorage.setItem('unlock6', 'yes');
            if (maxSpaceScore==3) cc.sys.localStorage.setItem('ac8', 'get');
            if (timeScore==12) cc.sys.localStorage.setItem('ac9', 'get');
            cc.sys.localStorage.setItem('res', 'AC');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result5');
        } else {
            cc.sys.localStorage.setItem('res', 'WA');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result5');
        }
    }
});