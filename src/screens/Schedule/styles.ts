import styled, { css } from 'styled-components/native';

interface Props {
  isSelected?: boolean;
}

export const ScheduleScreenContainer = styled.View``;

export const HeaderContent = styled.View`
  width: 100%;
  height: 242px;
  background-color: gray;

  padding: 0px 32px;
  align-items: flex-start;
  justify-content: flex-end;
`;
export const Title = styled.Text`
  font-size: 32px;
  color: white;
`;
export const DatesSelected = styled.View`
  margin: 18px 0px;

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DateContent = styled.View<Props>`
  width: 100px;
  border-bottom-width: 1px;
  border-bottom-color: orange;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-bottom-color: transparent;
    `}
`;
export const DateValue = styled.Text`
  color: yellow;
  text-align: right;
`;
export const Label = styled.Text`
  color: orange;
`;

export const ArrowSeparator = styled.View`
  height: 2px;
  width: 50px;
  background-color: yellow;
`;

export const CalendarContent = styled.View`
  padding: 15px;
`;
