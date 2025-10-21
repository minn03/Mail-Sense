import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type RegisterFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<RegisterFormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Register data:', data);
    // Here you could verify credentials or call an API
    // If successful, navigate to login
    navigate('/login');
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-6 text-5xl font-bold text-gray-900">Mail Sense</h1>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-lg font-semibold">Account Creation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                {...register('email', { required: true })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="********"
                {...register('password', { required: true })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Re-enter Password</label>
              <Input
                type="password"
                placeholder="********"
                {...register('password', { required: true })}
              />
            </div>

            <Button type="submit" className="mt-4 w-full">
              Submit
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          Already have an account?
          <Link to="/login" className='hover:underline" cursor-pointer font-bold text-gray-700'>
            Log in here!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
