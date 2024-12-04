import { Box, Button, ThemeType } from "@cruk/cruk-react-components";
import styled from "styled-components";

export const InputFieldsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const MobileContainer = styled(Box).attrs(() => ({
  padding: "xxs",
}))<{ theme: ThemeType }>`
  display: none;

  ${({ theme }) =>
    `@media (max-width: ${theme.breakpoint.tablet}) {
      display: block;
    }`}
`;

export const MediaAndYearFieldsContainer = styled(Box)<{ theme: ThemeType }>`
  display: flex;
  gap: 18px;

  ${({ theme }) =>
    `@media (max-width: ${theme.breakpoint.tablet}) {
      flex-direction: column;
    }`}
`;

export const SearchButton = styled(Button)<{ theme: ThemeType }>`
  ${({ theme }) =>
    `@media (max-width: ${theme.breakpoint.tablet}) {
      width: 100%;
    }`}
`;
