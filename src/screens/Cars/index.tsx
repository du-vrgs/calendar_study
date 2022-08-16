import { ReactElement, useEffect, useState } from 'react';
import { View } from 'react-native';
import { apiInstance } from '../../services/axios.config';
import { CarsList } from './styles';

export interface CarProps {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[];
  photos: string[];
}

export const Cars = (): ReactElement => {
  const [cars, setCars] = useState<CarProps[]>([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await apiInstance.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCars();
  }, []);

  return (
    <View>
      <CarsList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <View>{item.about}</View>}
      />
    </View>
  );
};
