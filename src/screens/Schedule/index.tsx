import moment from 'moment';
import React, { ReactElement, useEffect, useState } from 'react';
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

interface MarkedDate {
  [key: string]: any;
}

export const ScheduledScreen = (): ReactElement => {
  const [dates, setDates] = useState({});
  const [selectedDates, setSelectedDates] = useState({});

  const selectRangeDates = (date) => {
    const datesSelected = dates;

    if (datesSelected[date.timestamp]) {
      delete datesSelected[date.timestamp];
    } else {
      datesSelected[date.timestamp] = date;
    }

    setDates(datesSelected);
    return datesSelected;
  };

  const setMarkedDates = (periodDates) => {
    const momentDates = Object.keys(periodDates).map((date) =>
      moment.utc(new Date(Number(date))),
    );

    if (momentDates.length === 1) {
      const minDate = moment.min(momentDates);
      const markedDates = {
        [minDate.format('YYYY-MM-DD')]: {
          startingDay: true,
          color: 'green',
          textColor: 'white',
        },
      };

      return markedDates;
    }

    if (momentDates.length > 1) {
      const minDate = moment.min(momentDates);
      const maxDate = moment.max(momentDates);

      const periods = [];
      const differenceOfDays = minDate.diff(maxDate, 'days') * -1;

      for (let day = 1; day < differenceOfDays; day++) {
        periods.push(minDate.clone().add(day, 'day'));
      }

      const markedDates: MarkedDate = {
        [minDate.format('YYYY-MM-DD')]: {
          startingDay: true,
          color: 'green',
          textColor: 'white',
        },
        [maxDate.format('YYYY-MM-DD')]: {
          endingDay: true,
          color: 'green',
          textColor: 'white',
        },
      };

      periods.forEach((date) => {
        const dateKey = moment.utc(new Date(date)).format('YYYY-MM-DD');

        markedDates[dateKey] = {
          color: 'lightgreen',
          textColor: 'white',
          disabled: true,
        };
      });

      return markedDates;
    }

    return {};
  };

  const handleSelectPeriod = (date) => {
    const periodDates = selectRangeDates(date);
    setSelectedDates(setMarkedDates(periodDates));
  };

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
        <Calendar
          markingType='period'
          markedDates={selectedDates}
          onDayPress={(date) => handleSelectPeriod(date)}
        />
      </CalendarContent>
    </ScheduleScreenContainer>
  );
};
