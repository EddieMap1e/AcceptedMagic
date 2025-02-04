cc.Class({
    extends: cc.Component,

    properties: {
        title1: cc.Node,
        title2: cc.Node,
        title3: cc.Node,
        enterLabel: cc.Label,
        bgmAudio: {
            default: null,
            type: cc.AudioClip
        },
        particle: cc.ParticleSystem,
        loadsub: 0,
        failcnt: 0,
    },

    onLoad() {
        this.bgm = cc.audioEngine.play(this.bgmAudio, true, 1);
    },

    start() {
        let afterShowTitle1 = cc.callFunc(() => {
            this.showTitle2();
        }, this);
        let action = cc.sequence(cc.fadeIn(3.0), afterShowTitle1);
        this.title1.runAction(action);
        cc.loader.downloader.loadSubpackage('select', (err) => {
            this.loadSelectFail(err);
        });
        cc.loader.downloader.loadSubpackage('game', (err) => {
            this.loadGameFail(err);
        });
        cc.loader.downloader.loadSubpackage('result', (err) => {
            this.loadResultFail(err);
        });
        cc.sys.localStorage.setItem('unlock0', 'yes');
    },

    showTitle2() {
        let afterShowTitle2 = cc.callFunc(() => {
            this.showTitle3();
        }, this);
        let action = cc.sequence(cc.fadeIn(1.0), afterShowTitle2);
        this.title2.runAction(action);
    },

    showTitle3() {
        let afterShowTitle3 = cc.callFunc(() => {
            this.particle.resetSystem();
            this.enterFlag = false;
            this.node.on('touchstart', () => {
                if (this.loadsub >= 3) {
                    clearInterval(this.enterInterval);
                    cc.audioEngine.stop(this.bgm);
                    if (cc.sys.localStorage.getItem('level0') == null || cc.sys.localStorage.getItem('level0') == 0) {
                        cc.sys.localStorage.setItem('level0', '0');
                        cc.director.loadScene('level0');
                    } else {
                        cc.director.loadScene('select');
                    }
                } else return;
            }, this);
            this.enterInterval = setInterval(() => {
                this.flag = !this.flag;
                if (this.flag) this.enterLabel.node.runAction(cc.fadeIn(0.8));
                else this.enterLabel.node.runAction(cc.fadeOut(0.8));
            }, 900);
        }, this);
        let action = cc.sequence(cc.fadeIn(1.5), afterShowTitle3);
        this.title3.runAction(action);
    },

    update() {
        if (this.loadsub >= 3) {
            this.enterLabel.string = "点击屏幕任意处进入游戏";
        } else if (this.failcnt >= 50) {
            this.enterLabel.string = "加载子包失败,请检查网络连接...";
        } else this.enterLabel.string = "Loading...... " + this.loadsub * 33 + "%";
    },

    loadSelectFail(er) {
        if (er) {
            this.failcnt++;
            cc.loader.downloader.loadSubpackage('select', (err) => {
                setTimeout(() => {
                    this.loadSelectFail(err);
                }, 500);
            });
        } else this.loadsub++;
    },

    loadGameFail(er) {
        if (er) {
            this.failcnt++;
            cc.loader.downloader.loadSubpackage('game', (err) => {
                setTimeout(() => {
                    this.loadGameFail(err);
                }, 500);
            });
        } else this.loadsub++;
    },

    loadResultFail(er) {
        if (er) {
            this.failcnt++;
            cc.loader.downloader.loadSubpackage('result', (err) => {
                setTimeout(() => {
                    this.loadResultFail(err);
                }, 500);
            });
        } else this.loadsub++;
    },
});