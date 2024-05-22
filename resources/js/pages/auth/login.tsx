import { FormEventHandler, Fragment, useEffect } from 'react';
import GuestLayout from '@/layouts/guest';
import { Head, useForm } from '@inertiajs/react';
import TextInput from "@/components/form/text-input";
import { Label } from "@/components/ui/label";
import { IconKey, IconUser } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import TextareaInput from "@/components/form/textarea-input";
import SwitchInput from "@/components/form/switch-input";
import CheckboxInput from "@/components/form/checkbox-input";
import RadioGroup from "@/components/form/radio-input";
import RadioGroupInput from "@/components/form/radio-input";
import SelectInput from "@/components/form/select-input";

const Login = ({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) => {
   const { data, setData, post, processing, errors, reset } = useForm({
	  email: '',
	  password: '',
	  remember: false,
   });

   useEffect(() => {
	  return () => {
		 reset('password');
	  };
   }, []);

   const submit: FormEventHandler = (e) => {
	  e.preventDefault();

	  post(route('login'));
   };

   return (
	   <Fragment>
		  <Head title="Log in" />

		  {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

		  <form onSubmit={submit}>
			 <div className="form-group">
				<Label htmlFor="email">Email</Label>
				<TextInput
					name={'email'}
					icon={<IconUser stroke={1} />}
					errors={errors.email}
					onChange={(e) => setData('email', e.target.value)}
				/>
			 </div>
			 <div className="form-group">
				<Label htmlFor="email">Password</Label>
				<TextInput
					name={'password'} icon={<IconKey stroke={1} />} errors={errors.password} type={'password'}
					onChange={(e) => setData('password', e.target.value)}
				/>
			 </div>
			 <div className="form-group">
				<TextareaInput name={'keterangan'} />
			 </div>
			 <div className="form-group">
				<SwitchInput name={'remember'} />
			 </div>

			 <div className="form-group">
				<CheckboxInput label={'Setuju'} value={'Setuju'} name={'aggrement'} />
			 </div>
			 <div className="form-group">
				<Label>Pilih Terbaik</Label>
				<RadioGroupInput name={'hover'} defaultValue={''} onChange={(value) => alert(value)}>
				   <RadioGroupInput.Item value={'1'} label={'Option 1'} />
				   <RadioGroupInput.Item value={'2'} label={'Option 2'} />
				   <RadioGroupInput.Item value={'3'} label={'Option 3'} />
				</RadioGroupInput>
			 </div>

			 <div className="form-group">
				<SelectInput options={[]} variant={'select2'} name={'negara'} onSelect={(value) => setData('email', value)} placeholder={'Pilih Negara Anda'} >
				   <SelectInput.Item value={'Indonesia'} label={'Indonesia'}/>
				</SelectInput>
			 </div>

			 <div className="form-group">
				<Button>Login</Button>
			 </div>

		  </form>
	   </Fragment>
   );
}

Login.layout = (page: any) => <GuestLayout>{page}</GuestLayout>;
export default Login;
