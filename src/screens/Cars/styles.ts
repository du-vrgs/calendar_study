import { CarProps } from './index';
import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const CarsList = styled(
  FlatList as new (props: FlatListProps<CarProps>) => FlatList,
)``;
