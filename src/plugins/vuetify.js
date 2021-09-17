import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0050A1',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            },
        },
    },
})

export default vuetify

