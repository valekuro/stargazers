import * as Yup from 'yup';
import {IDataForm} from '../../interfaces/IDataForm';
/**
 * validation yup form
 * @returns
 */
export default function useValidationForm() {
  const validationSchema: Yup.ObjectSchema<
    IDataForm,
    Yup.AnyObject,
    IDataForm,
    ''
  > = Yup.object().shape({
    username: Yup.string().trim().required('Username is required'),
    repository: Yup.string().trim().required('Repository is required'),
  });
  return {
    validationSchema,
  };
}
