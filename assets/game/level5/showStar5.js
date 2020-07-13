cc.Class({
    extends: cc.Component,

    properties: {
        level5: 0,
        ac8Star: cc.Node,
        ac9Star: cc.Node,
    },

    start() {
        if (cc.sys.localStorage.getItem('level5') == null) {
            cc.sys.localStorage.setItem('level5', '0');
        } else {
            this.level5 = parseInt(cc.sys.localStorage.getItem('level5'));
            let star1 = (1 & this.level5);
            let star2 = (2 & this.level5);
            let star3 = (4 & this.level5);
            if (star1 != 0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2 != 0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3 != 0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if (cc.sys.localStorage.getItem('ac8') == 'get') this.ac8Star.active = true;
            if (cc.sys.localStorage.getItem('ac9') == 'get') this.ac9Star.active = true;
        }
    },
});