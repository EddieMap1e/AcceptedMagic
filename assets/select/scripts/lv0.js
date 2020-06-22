cc.Class({
    extends: cc.Component,

    properties: {
        lock:cc.Node,
        button:cc.Node,
        star1:cc.Node,
        star2:cc.Node,
        star3:cc.Node,
        estar1:cc.Node,
        estar2:cc.Node,
        estar3:cc.Node,
        num:cc.Node,
    },

    start () {
        if(cc.sys.localStorage.getItem('unlock0')=='yes'){
            this.node.getComponent(cc.Button).interactable=true;
            this.lock.active=false;
            this.button.active=true;
            this.num.active=true;
            this.estar1.active=true;
            this.estar2.active=true;
            this.estar3.active=true;
            let stars=cc.sys.localStorage.getItem('level0');
            if(stars!=null){
                stars=parseInt(stars);
                if(stars&1)this.star1.active=true;
                if(stars&2)this.star2.active=true;
                if(stars&4)this.star3.active=true;
            }
        }
    },

    onClick(){
        cc.director.loadScene('level0');
    }
});
