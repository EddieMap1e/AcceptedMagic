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
        if (submitNum == level7Ans) {
            let level7 = cc.sys.localStorage.getItem('level7');
            if (level7 == null) level7 = 0;
            else level7 = parseInt(level7);
            level7 |= 1;
            if (timeScore <= 15) level7 |= 2;
            if (timeScore <= 10) level7 |= 4;
            cc.sys.localStorage.setItem('level7', level7);
            cc.sys.localStorage.setItem('unlock8', 'yes');
            if (maxSpaceScore <= 5) cc.sys.localStorage.setItem('ac11', 'get');
            cc.sys.localStorage.setItem('res', 'AC');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result7');
        } else {
            cc.sys.localStorage.setItem('res', 'WA');
            cc.sys.localStorage.setItem('finalTime', timeScore);
            cc.sys.localStorage.setItem('finalSpace', maxSpaceScore);
            cc.director.loadScene('result7');
        }
    }
});