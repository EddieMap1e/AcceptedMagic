cc.Class({
    extends: cc.Component,

    properties: {
        level6: 0,
        ac10Star:cc.Node,
    },

    start() {
        if (cc.sys.localStorage.getItem('level6') == null) {
            cc.sys.localStorage.setItem('level6', '0');
        } else {
            this.level6 = parseInt(cc.sys.localStorage.getItem('level6'));
            let star1 = (1 & this.level6);
            let star2 = (2 & this.level6);
            let star3 = (4 & this.level6);
            if (star1!=0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2!=0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3!=0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if(cc.sys.localStorage.getItem('ac10')=='get')this.ac10Star.active=true;
        }
    },
});