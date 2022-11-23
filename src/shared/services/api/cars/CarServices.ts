import { ApiConfig } from '../ApiConfig';
import { ApiException } from '../ApiException';

export interface ICars {
  id: number;
  title: string;
  altImg: string;
  imgUrl: string;
  description: string;
  price: number;
}

const getAllCars = async (): Promise<ICars[] | ApiException> => {
  try {
    const { data } = await ApiConfig().get('/cars');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro na consulta!');
  }
};

const buyProduct = async (
  car: Omit<ICars, 'id'>
): Promise<ICars | ApiException> => {
  try {
    const { data } = await ApiConfig().post<ICars>('/cars');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro na consulta!');
  }
};
export const CarServices = {
  getAllCars,
  buyProduct,
};
