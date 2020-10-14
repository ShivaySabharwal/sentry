import React from 'react';
import styled from '@emotion/styled';

import {t, tct} from 'app/locale';
import ExternalLink from 'app/components/links/externalLink';
import List from 'app/components/list';
import ListItem from 'app/components/list/listItem';
import space from 'app/styles/space';

import ModalManager from '../modalManager';
import Item from './item';
import Terminal from './terminal';

class Add extends ModalManager {
  getTitle() {
    return t('Register Key');
  }

  getBtnSaveLabel() {
    return t('Register');
  }

  getData() {
    const {savedRelays} = this.props;
    const trustedRelays = [...savedRelays, this.state.values];

    return {trustedRelays};
  }

  getContent() {
    return (
      <StyledList symbol="colored-numeric">
        <StyledListItem>
          <Item
            title={tct('Initialize the configuration. [link: Learn how]', {
              link: (
                <ExternalLink href="https://docs.sentry.io/product/relay/getting-started/#initializing-configuration" />
              ),
            })}
            subtitle={t('Within your terminal:')}
          >
            <Terminal command="relay config init" />
          </Item>
        </StyledListItem>
        <StyledListItem>
          <Item
            title={tct(
              'Go to the file [jsonFile: credentials.json] to find the public key and enter it below.',
              {
                jsonFile: (
                  <CredentialsLink href="https://docs.sentry.io/product/relay/getting-started/#registering-relay-with-sentry" />
                ),
              }
            )}
          >
            {super.getForm()}
          </Item>
        </StyledListItem>
      </StyledList>
    );
  }
}

export default Add;

const StyledList = styled(List)`
  display: grid;
  grid-gap: ${space(3)};
`;

const StyledListItem = styled(ListItem)`
  display: grid;
  grid-gap: ${space(1.5)};
`;

const CredentialsLink = styled(ExternalLink)`
  color: ${p => p.theme.pink400};
  :hover {
    color: ${p => p.theme.pink400};
  }
`;
