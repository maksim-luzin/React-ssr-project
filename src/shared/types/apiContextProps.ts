import { IApiContext } from './apiContext';

export interface IApiContextProps {
    data: IApiContext;
    setData: React.Dispatch<React.SetStateAction<IApiContext>>
};
