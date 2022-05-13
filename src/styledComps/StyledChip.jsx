import styled, {css} from 'styled-components'

const StyledChip = styled.div`
    padding: .6rem 1rem;
    border-radius: 10rem;
    background-color: var(--lightGrey);
    color: var(--white);
    font-size: 1rem;
    cursor: pointer;
    min-width: fit-content;
    ${props => props.active === true && css`
    background-color: var(--white);
    color: var(--lightGrey);
    `}
    ${props => props.active === false && css`
    &:hover {
        background-color: var(--mild-grey);
    }
    `}
`

export {StyledChip}