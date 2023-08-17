function templateStyledComponentsFile() {
    return `
import styled from 'styled-components'

export const Example = styled.h1\`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
\`
    `;
}

module.exports = { templateStyledComponentsFile };
