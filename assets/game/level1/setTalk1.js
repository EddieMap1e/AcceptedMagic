cc.Class({
    extends: cc.Component,

    properties: {
        bagNode:cc.Node,
    },

    start() {
        cc.sys.localStorage.setItem('nowlevel','level1');
        window.level1Target=this.getRandomNumber(1,100);
        talk_arr[0] = new Array();
        talk_arr[0][0] = "这是第一关";
        window.talk_finished = function (scene){
            this.bagNode.getComponent('bag').addSecretStone(level1Target);
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
});