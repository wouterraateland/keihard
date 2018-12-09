import React from 'react'
import styled from 'styled-components'

import { opacity } from 'style-utils'
import { Column } from 'components/lib'

const ShareForm = styled.div`
  margin: 1em 0 4em;

  text-align: center;
`

const Share = styled.a.attrs({
  target: '_blank'
})`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;

  color: transparent;

  svg {
    fill: ${props => opacity(props.theme.colors.text, .2)};
  }

  &:hover svg {
    fill: ${props => opacity(props.theme.colors.text, props.theme.opacity.text)};
  }
`

const url = encodeURIComponent('http://keihardroeien.nl')
const twitterText = 'Wij gaan Keihard roeien voor KiKa.'
const emailBody = `Wij gaan Keihard roeien voor KiKa: ${url}`

export default () => (
  <ShareForm>
    <Column size={4}>
      <Share href={`https://facebook.com/sharer.php?u=${url}`}>
        <svg id="facebook" viewBox="0 0 17 16" width="100%" height="100%">
          <title>facebook icon</title>
          <path d="M15.37 0H.9C.402 0 0 .395 0 .883v14.234c0 .488.402.883.898.883H8.69V9.804H6.57V7.39h2.12V5.607c0-2.066 1.283-3.19 3.158-3.19.898 0 1.67.064 1.894.094v2.16h-1.3c-1.02 0-1.217.476-1.217 1.176v1.54h2.432l-.317 2.416h-2.115V16h4.146c.497 0 .9-.395.9-.883V.883c0-.488-.403-.883-.9-.883" fillRule="evenodd"></path>
        </svg>
      </Share>
    </Column>
    <Column size={4}>
      <Share href={`https://twitter.com/intent/tweet?text=${twitterText}&url=${url}`}>
      <svg id="twitter" viewBox="0 0 18 15" width="100%" height="100%">
        <title>twitter icon</title>
        <path d="M0 12.727c.26.04.546.06.852.06.796 0 1.575-.154 2.336-.46.762-.308 1.463-.72 2.106-1.237-.768-.006-1.46-.243-2.076-.712C2.6 9.908 2.182 9.318 1.96 8.6c.24.046.46.07.665.07.33 0 .648-.043.955-.13-.824-.164-1.51-.574-2.054-1.23C.98 6.653.708 5.893.708 5.03v-.043c.51.278 1.05.426 1.62.443-.495-.33-.886-.756-1.173-1.28-.287-.522-.43-1.084-.43-1.686 0-.586.162-1.165.485-1.74.898 1.092 1.984 1.957 3.257 2.596 1.273.64 2.645 1 4.117 1.08-.05-.223-.077-.5-.077-.828 0-.99.348-1.832 1.044-2.528C10.25.348 11.09 0 12.08 0c1.016 0 1.894.375 2.633 1.125.812-.165 1.565-.454 2.26-.87-.274.865-.8 1.527-1.578 1.987.71-.08 1.398-.27 2.063-.57-.478.72-1.072 1.34-1.782 1.857v.468c0 .795-.1 1.595-.303 2.4-.2.804-.49 1.585-.87 2.344-.377.758-.86 1.467-1.452 2.126-.59.66-1.252 1.235-1.986 1.727-.733.49-1.578.88-2.535 1.163-.96.284-1.97.426-3.032.426-2.154 0-3.986-.486-5.498-1.457z" fillRule="evenodd"></path>
      </svg>
      </Share>
    </Column>
    <Column size={4}>
      <Share href={`mailto:?body=${emailBody}`}>
        <svg id="mail" viewBox="0 0 20 14" width="100%" height="100%">
          <title>mail icon</title>
          <path d="M0 12.356l5.6-5.65L0 1.526v10.83zm9.628-3.79c.23 0 .463-.09.657-.27L18.987.25c.097-.09.03-.25-.105-.25H.374C.238 0 .172.16.27.25l8.7 8.046c.195.18.427.27.658.27zm4.026-1.86l5.602 5.65V1.527l-5.602 5.18zm-2.578 2.546c-.402.36-.916.56-1.448.56-.532 0-1.047-.2-1.45-.56L6.427 7.675.444 13.542c-.164.162-.045.436.19.436h17.987c.238 0 .357-.274.19-.436l-5.98-5.867-1.754 1.577z" fillRule="evenodd"></path>
        </svg>
      </Share>
    </Column>
  </ShareForm>
)
