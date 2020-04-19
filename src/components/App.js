import React from "react";

import Translations from "components/Translations";
import LocaleTracker from "components/LocaleTracker";
import Theme from "components/Theme";
import { Container } from "components/lib";
import SponsorModal from "components/SponsorModal";
import PhotoModal from "components/PhotoModal";
import HomePage from "pages/home";

const App = () => (
  <Translations>
    <LocaleTracker>
      <Theme>
        <Container>
          <HomePage />
        </Container>
        <SponsorModal />
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <PhotoModal key={n} n={n} />
        ))}
      </Theme>
    </LocaleTracker>
  </Translations>
);

export default App;
