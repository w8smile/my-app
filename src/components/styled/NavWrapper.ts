import styled from "styled-components";

export const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  NavWrapper > a {
    text-decoration: none;
    color: #61dafb;
  }

  & > a.active {
    text-decoration: none;
    color: #61dafb;
  }

  & > a:hover {
    color: darkorange;
  }
`