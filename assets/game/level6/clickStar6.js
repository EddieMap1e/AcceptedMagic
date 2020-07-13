cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {
        window.clickStar = false;
    },

    onClick() {
        clickStar = true;
    }

});