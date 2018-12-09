import { media } from 'style-utils'
import { Title } from 'components/lib'

export default Title(1).extend`
  margin-bottom: 0;

  font-size: 4em;
  ${media.small`font-size: 3em;`}
  font-weight: 900;

  strong {
    color: ${props => props.theme.colors.primary};
  }
`
