cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        cc.sys.localStorage.setItem('nowlevel','level0');

        talk_arr[0] = new Array();
        talk_arr[0][0] = "喵~ 你好鸭~ " +
            "我是大魔法师的宠物埃文," +
            "这里是大魔法师用神奇蜡笔创造的世界.";
        talk_arr[0][1] = "你一定是新来的魔法练习生吧!" +
            "我来负责你的算法,呃...不,是魔法的学习~";
        talk_arr[0][2] = "现在我先传授给你一个最基础的魔法叭!" +
            "以后新学到的魔法都会记录在『魔法卷轴』上哦~";
        talk_arr[0][3] = "点击那个『黄色的魔法棒』就能够打开『魔法卷轴』咯~";
        talk_arr[1] = new Array();
        talk_arr[1][0] = "这就是『魔法卷轴』啦~" +
            "你先快去用我刚教你的魔法获得一个任意法力值的魔法球叭~";
        talk_arr[1][1] = "顺带一提...你看到那个蓝色的数字是代表『施法所需的时间』" +
            "(其实就是时间复杂度) ~";
        talk_arr[1][2] = "而红色的数字则是这个魔法占用的『次元空间』" +
            "(其实就是空间复杂度) !";
        talk_arr[1][3] = "获得到的魔法球可以在『魔法次元袋』找到哦~" +
            "点击『魔法帽』就能打开了呢~";
        talk_arr[2] = new Array();
        talk_arr[2][0] = "喵~刚刚你的魔法奏效了呢~";
        talk_arr[2][1] = "喵~理论上来说这个『魔法次元袋』的空间是无限的..." +
            "但是!作为优秀的魔法师应该把控好不能浪费太多次元空间!";
        talk_arr[2][2] = "咳咳,接下来我要颁布你在魔法学校的第一个作业!" +
            "你先去翻开的你的魔法书先吧!";
        talk_arr[3] = new Array();
        talk_arr[3][0] = "这本书上面的都是最最最基础的魔法喵!" +
            "但是却经常要用到喵~";
        talk_arr[3][1] = "里面的魔法你都可以随便用哦~" +
            "毕竟太过简单一看就会了喵~";
        talk_arr[3][2] = "下面的给本喵听清楚了哦!";
        talk_arr[3][3] = "第一节课的作业是找来法力值为『66』的魔法球喵~" +
            "至于怎么找到嘛...就是用魔法先这样这样,然后再那样那样,很简单嘛~";
        talk_arr[3][4] = "喵~你肯定会嫌我啰嗦!但是以后我说的话都很重要!不允许跳过!";
        talk_arr[3][5] = "不过要是你忘了本喵说什么,你也可以看下任务卷轴你要做什么~" +
            "我也是很有喵情味的哦~";
        talk_arr[4] = new Array();
        talk_arr[4][0] = "噢!我忘记说了!魔法球和界面一样是可以拖拽的!";
        talk_arr[4][1] = "尝试下同时打开次元包和这个施法界面叭~" +
            "然后把魔法水晶球也拖拽出来进行施法!";
        talk_arr[4][2] = "当你完成了作业之后,你看到那个旋转运作的魔法阵吗?" +
            "触摸一下魔法阵的中央,神奇的魔法阵就会对你的行为进行审判~";
        talk_arr[4][3] = "你自己练习魔法叭~本喵要午睡了.";
        window.talk_finished = function (scene) {
            if (scene == 0) {
                rootNode.getChildByName('StarButton').getComponent(cc.Button).interactable = true;
                myAlert('点击魔法棒');
            } else if (scene == 1) {
                rootNode.getChildByName('HatButton').getComponent(cc.Button).interactable = true;
                myAlert('获取一个任意法力魔法球\n蓝色数字代表施法时间\n红色数字代表次元空间的消耗');
            } else if (scene == 2) {
                rootNode.getChildByName('BookButton').getComponent(cc.Button).interactable = true;
                myAlert('点击魔法书\n按住界面顶部栏可拖拽界面\n右上角 × 关闭界面');
            } else if (scene == 3) {
                rootNode.getChildByName('taskButton').getComponent(cc.Button).interactable = true;
                myAlert('使用基础魔法变出66法力值的魔法球');
            } else if (scene == 4) {
                rootNode.getChildByName('magicCircleButton').getComponent(cc.Button).interactable = true;
                myAlert('通过拖拽界面和魔法球完成施法\n点击魔法阵中央提交审判');
            }
        }
        myTalk();
    },
});