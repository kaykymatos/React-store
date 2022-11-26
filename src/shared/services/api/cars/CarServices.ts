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
const getOneCar = async (id: number): Promise<ICars | ApiException> => {
  try {
    const { data } = await ApiConfig().get<ICars>(`/cars/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro na consulta!');
  }
};
const getAllBuyCars = async (): Promise<ICars[] | ApiException> => {
  try {
    const { data } = await ApiConfig().get<ICars[]>('/boughtCars');
    return data;
  } catch (error: any) {
    return new ApiException(
      error.message || 'Erro na consulta dos produtos comprados'
    );
  }
};
const deleteBuyCar = async (id: number): Promise<undefined | ApiException> => {
  try {
    await ApiConfig().delete(`/boughtCars/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao tentar deletar compre!');
  }
};

const buyProduct = async (id: number): Promise<ICars | ApiException> => {
  const product = await getOneCar(id);
  if (product instanceof ApiException) {
    return new ApiException('Erro na consulta');
  } else {
    product.id = 0;
    try {
      const { data } = await ApiConfig().post<ICars>('/boughtCars', product);
      return data;
    } catch (error: any) {
      return new ApiException(error.message || 'Erro na consulta!');
    }
  }
};
export const CarServices = {
  getAllCars,
  buyProduct,
  getOneCar,
  getAllBuyCars,
  deleteBuyCar,
};
