import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    version: DS.attr('string'),
    updated: DS.attr('string'),
    active: DS.attr('boolean'),
    restricted: DS.attr('boolean'),
    description: DS.attr('string'),
    icon: DS.attr('string')
});
