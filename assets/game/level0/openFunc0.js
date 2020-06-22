cc.Class({
    extends: cc.Component,

    properties: {
        is_first_open:true
    },

    start () {
        if(this.is_first_open){
            this.is_first_open=false;
            myTalk();
        }
    },
});
