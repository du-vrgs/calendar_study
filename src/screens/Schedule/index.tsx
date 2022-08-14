import React, { ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { Calendar } from '../../components/Calendar';
import {
  ScheduleScreenContainer,
  HeaderContent,
  Title,
  DatesSelected,
  Label,
  DateContent,
  DateValue,
  ArrowSeparator,
  CalendarContent,
} from './styles';

export const ScheduledScreen = (): ReactElement => {
  return (
    <ScheduleScreenContainer>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor={'transparent'}
      />

      <HeaderContent>
        <Title>
          Escolha uma {`\n`}data de início e {`\n`}fim do aluguel
        </Title>

        <DatesSelected>
          <DateContent isSelected>
            <Label>De</Label>
            <DateValue>21/06/2021</DateValue>
          </DateContent>

          <ArrowSeparator />

          <DateContent>
            <Label>Até</Label>
            <DateValue></DateValue>
          </DateContent>
        </DatesSelected>
      </HeaderContent>

      <CalendarContent>
        <Calendar />
      </CalendarContent>
    </ScheduleScreenContainer>
  );
};
