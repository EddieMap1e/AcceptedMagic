cc.Class({
    extends: cc.Component,

    properties: {
        level4: 0,
        ac7Star:cc.Node,
    },

    start() {
        if (cc.sys.localStorage.getItem('level4') == null) {
            cc.sys.localStorage.setItem('level4', '0');
        } else {
            this.level4 = parseInt(cc.sys.localStorage.getItem('level4'));
            let star1 = (1 & this.level4);
            let star2 = (2 & this.level4);
            let star3 = (4 & this.level4);
            if (star1!=0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2!=0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3!=0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if(cc.sys.localStorage.getItem('ac7')=='get')this.ac7Star.active=true;
        }
    },
});