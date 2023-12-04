import { boolean, number, object, ObjectSchema, string } from 'yup';
import { FormData } from '@/types/form-data';
import { ErrorMessages } from '@/types/enums/error-messages';

export const schema: ObjectSchema<FormData> = object({
  name: string()
    .required(ErrorMessages.requireName)
    .test({
      test(value, ctx) {
        if (!value) {
          return ctx.createError({ message: ErrorMessages.requireName });
        }
        const regex = new RegExp('[0-9]');
        if ([...value][0] !== [...value][0].toUpperCase()) {
          return ctx.createError({ message: ErrorMessages.capitalizeError });
        }
        if (regex.test(value)) {
          return ctx.createError({ message: ErrorMessages.numbersInName });
        }
        return true;
      },
    }),
  age: number()
    .required(ErrorMessages.requireAge)
    .positive(ErrorMessages.positiveError)
    .integer()
    .test({
      test(value, ctx) {
        if (value === 0) {
          return ctx.createError({ message: ErrorMessages.requireAge });
        }

        return true;
      },
    }),
  email: string().email(ErrorMessages.invalidFormat).required(ErrorMessages.requireEmail),

  gender: string<'male' | 'female'>().required(ErrorMessages.requireGender),
  acceptRules: boolean()
    .required(ErrorMessages.requireAccept)
    .oneOf([true], ErrorMessages.requireAccept),
});
