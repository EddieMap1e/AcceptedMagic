cc.Class({
    extends: cc.Component,

    properties: {
        sayLabel: cc.Label,
        clickAudio:cc.AudioSource
    },

    start() {
        this.node.zIndex = cc.macro.MAX_ZINDEX
    },

    talk() {
        if (talk_scene == talk_arr.length) {
            setTimeout(()=>{
                this.node.runAction(
                    cc.moveTo(0.5, -1000, this.node.y)
                );
            },3000);
            return;
        }
        if (talk_page == talk_arr[talk_scene].length) {
            this.node.runAction(
                cc.moveTo(0.5, -1000, this.node.y)
            );
            talk_scene++;
            setTimeout(function(){
                talk_finished(talk_scene-1);
            },500);
            talk_page = 0;
            return;
        }
        this.sayLabel.string = "";
        this.schedule(() => {
            this.sayLabel.string += talk_arr[talk_scene][talk_page][talk_word];
            talk_word++;
            if (talk_word == talk_arr[talk_scene][talk_page].length) {
                this.node.on('touchstart', () => {
                    this.clickAudio.play();
                    talk_page++;
                    talk_word = 0;
                    this.node.targetOff(this);
                    this.talk();
                }, this);
            }
        }, 0.05, talk_arr[talk_scene][talk_page].length - 1, 0.5);
    },
});