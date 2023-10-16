import * as Yup from 'yup';
import {IDataForm} from '../../Interfaces/IDataForm';

export default function useValidationForm() {
  const validationSchema: Yup.ObjectSchema<
    IDataForm,
    Yup.AnyObject,
    IDataForm,
    ''
  > = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    repository: Yup.string().required('Project name is required'),
  });
  return {
    validationSchema,
  };
}
