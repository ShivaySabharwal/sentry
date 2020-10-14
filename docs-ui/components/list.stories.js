import React from 'react';
import {withInfo} from '@storybook/addon-info';

import {IconBusiness, IconTelescope, IconLightning, IconSiren} from 'app/icons';
import List from 'app/components/list';
import ListItem from 'app/components/list/listItem';

export default {
  title: 'Core/List',
};

export const Default = withInfo('Default message goes here')(() => (
  <React.Fragment>
    <div className="section">
      <h2>Without Symbol</h2>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </div>
    <div className="section">
      <h2>Bullet Symbol</h2>
      <List symbol="bullet">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </div>
    <div className="section">
      <h2>Custom Symbol</h2>
      <List symbol={<IconBusiness />}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </div>
    <div className="section">
      <h2>Multiple Custom Symbol</h2>
      <List>
        <ListItem icon={<IconTelescope />}>Item 1</ListItem>
        <ListItem icon={<IconLightning />}>Item 2</ListItem>
        <ListItem icon={<IconSiren />}>Item 3</ListItem>
      </List>
    </div>
    <div className="section">
      <h2>Numeric Symbol</h2>
      <List symbol="numeric">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </div>
    <div className="section">
      <h2>Colored Numeric Symbol</h2>
      <List symbol="colored-numeric">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </div>
  </React.Fragment>
));
