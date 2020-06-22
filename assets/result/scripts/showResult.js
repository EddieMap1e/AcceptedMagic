cc.Class({
    extends: cc.Component,

    properties: {
        resLabel:cc.Label,
        resNode:cc.Node,
        timeLabel:cc.Label,
        spaceLabel:cc.Label,
        failAudio:cc.AudioSource,
        successAudio:cc.AudioSource,
    },

    start () {
        this.timeLabel.string+=cc.sys.localStorage.getItem('finalTime');
        this.spaceLabel.string+=cc.sys.localStorage.getItem('finalSpace');
        let res=cc.sys.localStorage.getItem('res');
        if(res=='AC'){
            this.node.getChildByName('AC').active=true;
            this.resLabel.string="恭喜通关 Accepted!";
            this.resNode.color=new cc.color(0,255,0);
            setTimeout(()=>{
                this.successAudio.play();
            },500);
        }
        else if(res=='WA'){
            this.node.getChildByName('WA').active=true;
            this.resLabel.string="很可惜,答案错误 Wrong Answer";
            this.resNode.color=new cc.color(255,0,0);
            setTimeout(()=>{
                this.failAudio.play();
            },500);
        }
        else if(res=='TLE'){
            this.node.getChildByName('TLE').active=true;
            this.resLabel.string="很可惜,超过要求施法时间了";
            this.resNode.color=new cc.color(100,149,237);
            setTimeout(()=>{
                this.failAudio.play();
            },500);
        }
        else if(res=='MLE'){
            this.node.getChildByName('MLE').active=true;
            this.resLabel.string="很可惜,超过要求空间消耗了";
            this.resNode.color=new cc.color(160,32,240);
            setTimeout(()=>{
                this.failAudio.play();
            },500);
        }
    },
});
