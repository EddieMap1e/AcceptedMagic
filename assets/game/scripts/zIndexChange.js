cc.Class({
    extends: cc.Component,

    properties: {
        PanelNode: cc.Node,
    },

    start() {
        this.PanelNode.on('touchstart', (event) => {
            topNodeZIndex = (topNodeZIndex + 1) % 999999;
            this.PanelNode.zIndex = topNodeZIndex;
        }, this);
    },
});