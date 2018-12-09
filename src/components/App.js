import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router'

import Translations from 'components/Translations'
import Theme from 'components/Theme'
import { Container } from 'components/lib'
import SponsorModal from 'components/SponsorModal'
import PhotoModal from 'components/PhotoModal'
import HomePage from 'pages/home'

const App = () => (
  <Translations>
    <Theme>
      <Fragment>
        <Container>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Container>
        <SponsorModal />
        {[1,2,3,4,5,6].map(n =>
          <PhotoModal key={n} n={n} />
        )}
      </Fragment>
    </Theme>
  </Translations>
)

export default App
