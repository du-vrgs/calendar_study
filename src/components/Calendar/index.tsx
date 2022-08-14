import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';

const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const DAY_NAMES = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

LocaleConfig.locales['pt-br'] = {
  monthNames: MONTH_NAMES,
  monthNamesShort: MONTH_NAMES.map((month) => month.slice(0, 3)),
  dayNames: DAY_NAMES,
  dayNamesShort: DAY_NAMES.map((day) => day.slice(0, 3).toUpperCase()),
};

LocaleConfig.defaultLocale = 'pt-br';

export const Calendar = (): ReactElement => {
  return (
    <CustomCalendar
      firstDay={1}
      minDate={new Date().toLocaleDateString('pt-BR')}
      renderArrow={(direction) => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={'gray'}
        />
      )}
      headerStyle={{
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        padding: 0,
        marginHorizontal: -15,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontSize: 18,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 12,
        arrowStyle: {
          marginHorizontal: 15,
        },
      }}
    />
  );
};
