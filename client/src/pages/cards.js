import React from 'react';
import Panel from '../components/panel.js';
import CardWithAvatar from '../components/cards/cardWithAvatar.js';
import CardExpandable from '../components/cards/cardExpanable.js';
import CardControled from '../components/cards/cardWithControl.js';

const Cards = () => (
  <div>
    <Panel title="Card with avatar">
      <CardWithAvatar />
    </Panel>
    <Panel title="Card Expandable">
      <CardExpandable />
    </Panel>

    <Panel title="Card Controlable">
      <CardControled />
    </Panel>
  </div>
);

export default Cards;
