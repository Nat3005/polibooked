import styled from "styled-components";
import { GridContainer } from "./components/grid/GridElements";

export const DashboardContainer = styled(GridContainer)`
    height: 100vh;
    background: var(--white);
`

export const LeftDrawer = styled.div`
    height: 100vh;
    background: var(--white);
    grid-column: 1/3;
`
export const RightDrawer = styled.div`
    height: 100vh;
    background: var(--white);
    grid-column: 10/13;
`
export const MainContainer = styled.div`
    height: 90vh;
    background:var(--neutral-purple);
`
export const Navbar = styled.div`
    height: 10vh;
    background: var(--white);
    border-bottom: 5px solid transparent;
    border-image: var(--gradient-horizontal);
    border-image-slice: 1;
`

export const CenterContainer = styled.div`
    display: flex;
    flex-direction:column;
    grid-column: 3/10;
    border-right: var(--border-style);
    border-left: var(--border-style);
    border-color: var(--primary-light);
`