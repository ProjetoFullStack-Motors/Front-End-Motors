import styled from "styled-components";

export const StyledSalesCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 19.5rem;
  height: 21.875rem;
  transition: transform 0.5s;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: "";
    opacity: 0;
    z-index: -1;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);

    &::after {
      opacity: 1;
    }
  }

  .good-price-tag {
    padding: 4px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    color: var(--white);
    background-color: var(--sucess-1);
    font-weight: var(--font-base);
    cursor: context-menu;
    z-index: 2;
  }

  .sales-info-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 10px 10px;
  }

  .car-title {
    font-size: var(--font-body-1);
    font-weight: var(--font-semibold);
    color: var(--grey-1);
  }

  .car-description {
    display: -webkit-box;
    font-size: var(--font-body-2);
    font-weight: var(--font-base);
    line-height: 171%;
    color: var(--grey-2);
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .seller-img-container {
    width: 32px;
    height: 32px;
  }

  .seller-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .seller-info-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .seller-title {
    font-size: var(--font-body-1);
    font-weight: var(--font-medium);
    line-height: 171%;
    color: var(--grey-2);
  }

  .car-info-container {
    display: flex;
    justify-content: space-between;
  }

  .car-info-container > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .car-info > span {
    padding: 4px 8px;
    font-size: var(--font-body-2);
    font-weight: var(--font-medium);
    line-height: 171%;
    color: var(--brand-1);
    background-color: var(--brand-4);
    border: transparent;
    border-radius: 4px;
  }

  .car-price {
    color: var(--grey-1);
    font-size: var(--font-body-1);
    font-weight: var(--font-medium);
  }
`;
