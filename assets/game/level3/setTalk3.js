cc.Class({
    extends: cc.Component,

    properties: {
    },

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level3');
        window.level3Arr=new Array();
        for(let i=1;i<=8;i++)
            level3Arr[i]=this.getRandomNumber(1,100);
        talk_arr[0] = new Array();
        talk_arr[0][0] = "这是关卡3";
        window.talk_finished = function (scene) {
            if(scene==0){
                myAlert('关卡3');
            }
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
});