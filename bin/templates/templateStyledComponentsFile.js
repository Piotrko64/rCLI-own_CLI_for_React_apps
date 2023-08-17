function templateStyledComponentsFile() {
    return `
import styled from 'styled-components'

export const Example = styled.div\`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
\`
    `.trim();
}

module.exports = { templateStyledComponentsFile };
