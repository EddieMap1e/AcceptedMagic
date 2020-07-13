cc.Class({
    extends: cc.Component,

    properties: {},

    start() {
        cc.sys.localStorage.setItem('nowlevel', 'level4');
        window.level4Ans = parseInt(this.getRandomNumber(0,1023));
        let s = level4Ans.toString(2);
        window.level4Arr=new Array();
        for(var i=10;i>=1;i--)level4Arr[i]=0;
        for(var i=0;i<s.length;i++)level4Arr[i+11-s.length]=parseInt(s[i]);
        talk_arr[0] = new Array();
        talk_arr[0][0] = "喵~听说你已经玩过『魔法盒』了.";
        talk_arr[0][1] = "喵~小同学能不能帮我个忙呢...";
        talk_arr[0][2] = "哥哥给了我一个『魔法盒』,说解开了里面的奥秘才能给我小鱼干吃...";
        talk_arr[0][3] = "哥哥说奥秘是和『二进制』有关的,但是我不会嘛..呜呜呜";
        talk_arr[0][4] = "你很厉害对吧!你一定知道『二进制』是什么咒语,快帮帮我吃到小鱼干吧!";
        talk_arr[0][5] = "你先去看看『魔法盒』里面的东西叭!";
        talk_arr[1] = new Array();
        talk_arr[1][0] = "你看你看,就是这些01010101的,都不知道是什么来的!!!";
        talk_arr[1][1] = "哥哥说解开它们最终会得到一个『魔法球』呢!救救小可爱叭!";
        window.talk_finished = function (scene) {
            if (scene == 0) {
                myAlert('打开魔法盒\n帮助艾米解开奥秘');
            } else if (scene == 1) {
                myAlert('以二进制解读内容\n最左边为最高位');
            }
        };
        myTalk();
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    },
});