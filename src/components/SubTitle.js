import styled from "styled-components";
import { media } from "style-utils";
import { Title } from "components/lib";

export default styled(Title(2))`
  margin: 1em 0 0.5em;

  font-size: 2.5em;
  ${media.small`font-size: 1.75em;`}
`;
