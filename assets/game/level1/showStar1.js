cc.Class({
    extends: cc.Component,

    properties: {
        level1: 0,
        ac2Star:cc.Node
    },

    start() {
        if (cc.sys.localStorage.getItem('level1') == null) {
            cc.sys.localStorage.setItem('level1', '0');
        } else {
            this.level1 = parseInt(cc.sys.localStorage.getItem('level1'));
            let star1 = (1 & this.level1);
            let star2 = (2 & this.level1);
            let star3 = (4 & this.level1);
            if (star1!=0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2!=0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3!=0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if(cc.sys.localStorage.getItem('ac2')=='get')this.ac2Star.active=true;
        }
    },
});