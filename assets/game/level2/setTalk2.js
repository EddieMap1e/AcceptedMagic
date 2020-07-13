cc.Class({
    extends: cc.Component,

    properties: {
    },

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level2');
        window.level2Target = this.getRandomNumber(1, 100);
        talk_arr[0] = new Array();
        talk_arr[0][0] = "喵~我知道你偷偷的和艾米去玩游戏了!";
        talk_arr[0][1] = "正好,那本喵也和你玩同样的一个游戏叭~";
        talk_arr[0][2] = "我也给了你一个『神秘石』,不过嘛...它范围是在1~100!";
        talk_arr[0][3] = "害怕了吧!害怕你现在就可以退出这节课哦~反正不会对后面的课造成影响~";
        talk_arr[0][4] = "喵喵~我也不太为难你~我传授给你一个简单的小魔法好了.";
        talk_arr[0][5] = "等下你用下『魔法棒』看看叭~我要去午睡了~让我看看在我醒来之前能不能审判成功~";
        window.talk_finished = function (scene) {
            if(scene==0){
                myAlert('神秘石法力值在1~100\n魔法棒查看新增的魔法\n本关略微困难可跳过');
            }
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
});