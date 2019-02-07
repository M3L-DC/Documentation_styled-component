import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App1 from '/imports/ui/App1'

Meteor.startup(() => {
  render(<App1 />, document.getElementById('react-target'));
});
