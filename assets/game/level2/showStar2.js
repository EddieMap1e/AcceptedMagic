cc.Class({
    extends: cc.Component,

    properties: {
        level2: 0,
        ac4Star:cc.Node,
        ac5Star:cc.Node,
    },

    start() {
        if (cc.sys.localStorage.getItem('level2') == null) {
            cc.sys.localStorage.setItem('level2', '0');
        } else {
            this.level2 = parseInt(cc.sys.localStorage.getItem('level2'));
            let star1 = (1 & this.level2);
            let star2 = (2 & this.level2);
            let star3 = (4 & this.level2);
            if (star1!=0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2!=0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3!=0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if(cc.sys.localStorage.getItem('ac4')=='get')this.ac4Star.active=true;
            if(cc.sys.localStorage.getItem('ac5')=='get')this.ac5Star.active=true;
        }
    },
});