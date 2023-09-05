import styled from "styled-components";

export const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;

  .loader {
    position: relative;
    border-radius: 50%;
    animation: rotate 2s linear infinite;

    height: 164px;
    width: 100%;
    max-width: 250px;
  }

  .loader::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 40px;
    border: 1px solid var(--brand-1);
    border-width: 12px 2px 7px;
    border-radius: 2px 2px 1px 1px;
    box-sizing: border-box;
    transform: rotate(45deg) translate(24px, -10px);
    background-image: linear-gradient(var(--brand-1) 20px, transparent 0),
      linear-gradient(var(--brand-1) 30px, transparent 0),
      linear-gradient(var(--brand-1) 30px, transparent 0);
    background-size: 10px 12px, 1px 30px, 1px 30px;
    background-repeat: no-repeat;
    background-position: center, 12px 0px, 3px 0px;
  }

  .loader::after {
    content: "";
    position: absolute;
    height: 4px;
    width: 4px;
    left: 20px;
    top: 47px;
    border-radius: 50%;
    color: var(--grey-4);
    box-shadow: -4px 7px 2px, -7px 16px 3px 1px, -11px 24px 4px 1px,
      -6px 24px 4px 1px, -14px 35px 6px 2px, -5px 36px 8px 2px,
      -5px 45px 8px 2px, -14px 49px 8px 2px, 6px 60px 11px 1px,
      -11px 66px 11px 1px, 11px 75px 13px, -1px 82px 15px;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;