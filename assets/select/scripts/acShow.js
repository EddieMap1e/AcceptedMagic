cc.Class({
    extends: cc.Component,

    properties: {
        ac1: cc.Button,
        ac2: cc.Button,
        ac3: cc.Button,
        ac4: cc.Button,
        ac5: cc.Button,
        ac6: cc.Button,
        ac7: cc.Button,
        ac8: cc.Button,
        ac9: cc.Button,
        ac10: cc.Button,
        ac11: cc.Button,
        buttonAudio: cc.AudioSource,
    },

    start() {
        if (cc.sys.localStorage.getItem('ac1') == 'get') this.ac1.interactable = true;
        if (cc.sys.localStorage.getItem('ac2') == 'get') this.ac2.interactable = true;
        if (cc.sys.localStorage.getItem('ac3') == 'get') this.ac3.interactable = true;
        if (cc.sys.localStorage.getItem('ac4') == 'get') this.ac2.interactable = true;
        if (cc.sys.localStorage.getItem('ac5') == 'get') this.ac3.interactable = true;
        if (cc.sys.localStorage.getItem('ac6') == 'get') this.ac6.interactable = true;
        if (cc.sys.localStorage.getItem('ac7') == 'get') this.ac7.interactable = true;
        if (cc.sys.localStorage.getItem('ac8') == 'get') this.ac8.interactable = true;
        if (cc.sys.localStorage.getItem('ac9') == 'get') this.ac9.interactable = true;
        if (cc.sys.localStorage.getItem('ac10') == 'get') this.ac10.interactable = true;
        if (cc.sys.localStorage.getItem('ac11') == 'get') this.ac11.interactable = true;
    },

    getAll() {
        this.ac1.node.active = true;
        this.ac2.node.active = true;
        this.ac3.node.active = true;
        this.ac4.node.active = true;
        this.ac5.node.active = true;
        this.ac6.node.active = true;
        this.ac7.node.active = true;
        this.ac8.node.active = true;
        this.ac9.node.active = true;
        this.ac10.node.active = true;
        this.ac11.node.active = true;
        this.buttonAudio.play();
    },

    getNormal() {
        this.ac1.node.active = true;
        this.ac2.node.active = false;
        this.ac3.node.active = false;
        this.ac4.node.active = false;
        this.ac5.node.active = false;
        this.ac6.node.active = true;
        this.ac7.node.active = false;
        this.ac8.node.active = false;
        this.ac9.node.active = false;
        this.ac10.node.active = false;
        this.ac11.node.active = false;
        this.buttonAudio.play();
    },

    getRare() {
        this.ac1.node.active = false;
        this.ac2.node.active = false;
        this.ac3.node.active = true;
        this.ac4.node.active = false;
        this.ac5.node.active = false;
        this.ac6.node.active = false;
        this.ac7.node.active = true;
        this.ac8.node.active = false;
        this.ac9.node.active = false;
        this.ac10.node.active = false;
        this.ac11.node.active = true;
        this.buttonAudio.play();
    },

    getEpic() {
        this.ac1.node.active = false;
        this.ac2.node.active = true;
        this.ac3.node.active = false;
        this.ac4.node.active = false;
        this.ac5.node.active = false;
        this.ac6.node.active = false;
        this.ac7.node.active = false;
        this.ac8.node.active = false;
        this.ac9.node.active = false;
        this.ac10.node.active = true;
        this.ac11.node.active = false;
        this.buttonAudio.play();
    },

    getLegend() {
        this.ac1.node.active = false;
        this.ac2.node.active = false;
        this.ac3.node.active = false;
        this.ac4.node.active = true;
        this.ac5.node.active = true;
        this.ac6.node.active = false;
        this.ac7.node.active = false;
        this.ac8.node.active = true;
        this.ac9.node.active = true;
        this.ac10.node.active = false;
        this.ac11.node.active = false;
        this.buttonAudio.play();
    },
});