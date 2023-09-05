import styled from "styled-components";

export const StyledSaleComments = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 40px;

  margin-bottom: 32px;

  .comments-section {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .comments-section > h2 {
    font-size: var(--font-heading-5);
    line-height: 170%;
    font-weight: var(--font-semibold);
  }

  .comments-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .comments-post {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .user-header {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .username {
    font-size: var(--font-body-1);
    line-height: 170%;
    font-weight: var(--font-medium);
    color: var(--grey-1);
  }

  .message-container {
    position: relative;
    width: 100%;
  }

  .message-area {
    padding: 20px;
    font-family: "Lexend", "sans-serif";
    font-size: var(--font-body-1);
    font-weight: var(--font-base);
    color: var(--grey-3);
    width: 100%;
    min-height: 200px;
    border: 1.5px solid var(--grey-7);
    outline-color: var(--brand-1);
    resize: none;
  }

  .post-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    border-radius: 4px;
  }

  .message-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .message-suggestions > span {
    padding: 8px;
    color: var(--grey-3);
    background-color: var(--grey-7);
    border-radius: 12px;
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    padding: 50px;
  }
`;
