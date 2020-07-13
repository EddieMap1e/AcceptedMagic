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
        if (submitItem.name != 'secretStone') {
            myAlert('请放入神秘石进行审判');
            return;
        }
        let submitNum = parseInt(submit.itemData);
        if (submitNum == level6Ans) {
            let level6 = cc.sys.localStorage.getItem('level6');
            if (level6 == null) level6 = 0;
            else level6 = parseInt(level6);
            level6 |= 1;
            if (timeScore <= 15) level6 |= 2;
            if (maxSpaceScore <= 4) level6 |= 4;
            cc.sys.localStorage.setItem('level6', level6);
            cc.sys.localStorage.setItem('unlock7', 'yes');
            if (maxSpaceScore == 4 && clickStar == false) cc.sys.localStorage.setItem('ac10', 'get');
            cc.sys.localStorage.setItem('res', 'AC');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result6');
        } else {
            cc.sys.localStorage.setItem('res', 'WA');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result6');
        }
    }
});