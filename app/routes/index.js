import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        //  Redirect to tools
        this.replaceWith('tools');
    }
});
