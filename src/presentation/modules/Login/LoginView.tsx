import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, InputText } from '../../components';

interface Props {
  onLogin: (username: string, password: string) => void;
  isLoading: boolean;
}
const LoginView = (props: Props) => {
  const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    const { onLogin } = props;
    const { username, password } = data;
    onLogin(username, password);
  };

  const updateData = (key: string) => (e: any) => {
    if (e.detail) setValue(key, e.detail);
    else setValue(key, e.target.value);
    trigger(key);
  };

  useEffect(() => {
    register('username', {
      required: { message: 'Este campo es requerido', value: true },
      maxLength: { message: 'Máximo 10 caracteres', value: 10 }
    });
    register('password', {
      required: { message: 'Este campo es requerido', value: true }
    });
    register('comments', {
      maxLength: { message: 'Máximo 50 caracteres', value: 50 }
    });
  }, [register]);

  const { isLoading } = props;

  return (
    <div className="w-1/2">
      <h1 className="text-heading-01 text-secondary">Inicio de sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        </div>
        <div className="p-md">
          <InputText
            error={'username' in errors}
            label="Usuario"
            placeholder="Código estudiante"
            onChange={updateData('username')}
            // textError={errors?.username?.message}
          />
        </div>
        <div className="p-md">
          <InputText
            label="Contraseña"
            placeholder="Contraseña"
            password
            onChange={updateData('password')}
            error={'password' in errors}
            // textError={errors?.password?.message}
          />
        </div>
        <div className="p-md">
          <InputText
            textArea={{ autoGrow: true }}
            label="Comentarios"
            placeholder="Comentarios"
            password
            onChange={updateData('comments')}
            error={'comments' in errors}
            // textError={errors?.comments?.message}
          />
        </div>
        <div className="p-md">
          <Button
            submit
            disable={isLoading}
            value="Ingresar"
            icon="log-in"
            secondary
          />
        </div>
      </form>
    </div>
  );
};

export default LoginView;

