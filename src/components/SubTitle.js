import { media } from 'style-utils'
import { Title } from 'components/lib'

export default Title(2).extend`
  margin: 1em 0 .5em;

  font-size: 2.5em;
  ${media.small`font-size: 1.75em;`}
`
