cc.Class({
    extends: cc.Component,

    properties: {
        level3: 0,
        ac6Star:cc.Node,
    },

    start() {
        if (cc.sys.localStorage.getItem('level3') == null) {
            cc.sys.localStorage.setItem('level3', '0');
        } else {
            this.level3 = parseInt(cc.sys.localStorage.getItem('level3'));
            let star1 = (1 & this.level3);
            let star2 = (2 & this.level3);
            let star3 = (4 & this.level3);
            if (star1!=0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2!=0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3!=0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if(cc.sys.localStorage.getItem('ac6')=='get')this.ac4Star.active=true;
        }
    },
});