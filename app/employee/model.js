import DS from 'ember-data';
import Ember from 'ember';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  department: belongsTo('department')
});
