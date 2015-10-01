import Vue = require('vue');

class App extends Vue {
    constructor(){
        super(false);
        this._init({
            el: '#app',
            data: {
                message: 'Hello world'
            }
        });
    }
}
export var app = new App();
