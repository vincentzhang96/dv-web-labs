import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {
                id: 'test-tool-1',
                name: 'Test Tool 1',
                version: '0.1.0-BETA',
                updated: '03/03/2017 04:20 EST',
                active: true,
                restricted: false,
                description: 'A test tool item. Hon hon baguette!',
                icon: 'https://static.divinitor.com/site/common/img/dv-logo.png'
            },
            {
                id: 'dv-web-statcard',
                name: 'Stat Card Maker',
                version: '0.1.0-LAB',
                updated: '03/03/2017 12:48 EST',
                active: false,
                restricted: false,
                description: 'Make attractive and clean stat cards to share your character\'s stats',
                icon: 'https://static.divinitor.com/site/common/img/dv-logo.png'
            }
        ];
    }
});
