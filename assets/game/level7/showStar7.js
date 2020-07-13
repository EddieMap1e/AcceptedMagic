cc.Class({
    extends: cc.Component,

    properties: {
        level7: 0,
        ac11Star:cc.Node,
    },

    start() {
        if (cc.sys.localStorage.getItem('level7') == null) {
            cc.sys.localStorage.setItem('level7', '0');
        } else {
            this.level7 = parseInt(cc.sys.localStorage.getItem('level7'));
            let star1 = (1 & this.level7);
            let star2 = (2 & this.level7);
            let star3 = (4 & this.level7);
            if (star1!=0) this.node.getChildByName('star1').getComponent(cc.Button).interactable = true;
            if (star2!=0) this.node.getChildByName('star2').getComponent(cc.Button).interactable = true;
            if (star3!=0) this.node.getChildByName('star3').getComponent(cc.Button).interactable = true;
            if(cc.sys.localStorage.getItem('ac11')=='get')this.ac11Star.active=true;
        }
    },
});