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
    return datesSelected;
  };

  const setMarkedDates = () => {
    const momentDates = Object.keys(dates).map((date) =>
      moment.utc(new Date(Number(date))),
    );

    if (momentDates.length) {
      const minDate = moment.min(momentDates);
      const maxDate = moment.max(momentDates);

      const markedDates = {
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

      return markedDates;
    }

    return {};
  };

  useEffect(() => {
    setSelectedDates(setMarkedDates());
  }, [dates]);

  console.log('dates', dates);

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
          onDayPress={(date) => setDates(selectRangeDates(date))}
        />
      </CalendarContent>
    </ScheduleScreenContainer>
  );
};
