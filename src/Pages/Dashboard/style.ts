import styled from "styled-components";

const StyledDashboardPage = styled.main`
    min-height: 100vh;
    max-height: max-content;
    max-width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;

    /* .dashboard-container {
        display: flex;
        flex-direction: column;
        gap: 10%;
        padding: 2rem;
        margin-inline: auto;
        margin-top: 90px;
        width: 100%;
        height: 1680px;
        box-sizing: border-box;

        @media (max-width: 1023px) {
            height: auto;
        }
    } */

    .user-info-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        border: 2px transparent;
        border-radius: 4px;
    }

    .user-name-container {
        display: flex;
        align-items: baseline;
        gap: 10px;
    }

    .user-name {
        font-size: var(--font-heading-3);
        font-weight: var(--font-bold);
    }

    .user-role {
        padding: 8px;
        color: var(--brand-1);
        background-color: var(--brand-4);
        border-radius: 4px;
    }

    .user-description {
        font-family: "Inter", "sans-serif";
        font-size: var(--font-body-1);
        font-weight: var(--font-base);
        color: var(--grey-2);
    }

    .seller-button-container {
        width: 160px;
        height: 48px;
    }

    .seller-button {
        width: 100%;
        height: 100%;
        background-color: transparent;
        font-family: "Lexend", "sans-serif";
        font-weight: var(--font-bold);
        color: var(--brand-1);
        border: 2px solid var(--brand-1);
        border-radius: 4px;
    }

    .seller-button:hover {
        background-color: var(--brand-3);
    }
`;

export { StyledDashboardPage };
