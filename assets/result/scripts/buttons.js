cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {

    },

    homeClick(){
        cc.director.loadScene('select');
    },

    retryClick(){
        cc.director.loadScene(cc.sys.localStorage.getItem('nowlevel'));
    },

    shareClick(){
        cc.log('分享接口');
    }
});
