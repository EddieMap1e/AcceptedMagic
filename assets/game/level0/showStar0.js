cc.Class({
    extends: cc.Component,

    properties: {
        level0: 0,
        ac1Star:cc.Node
    },

    start() {
        if (cc.sys.localStorage.getItem('level0') == null) {
            cc.sys.localStorage.setItem('level0', '0');
        } else {
            this.level0 = parseInt(cc.sys.localStorage.getItem('level0'));
            let star1 = (1 & this.level0);
            let star2 = (2 & this.level0);
            let star3 = (4 & this.level0);
            if (star1!=0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2!=0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3!=0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if(cc.sys.localStorage.getItem('ac1')=='get')this.ac1Star.active=true;
        }
    },
});