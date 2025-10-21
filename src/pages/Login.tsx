import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type LoginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login data:', data);
    // Here you could verify credentials or call an API
    // If successful, navigate to dashboard
    navigate('/overview');
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-6 text-5xl font-bold text-gray-900">Mail Sense</h1>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-lg font-semibold">
            Sign in to your account
          </CardTitle>
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

            <Button type="submit" className="mt-4 w-full">
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="flex py-2">
        <h2>Not yet have an account?</h2>
        <Link to="/register" className='hover:underline" cursor-pointer font-bold text-gray-700'>
          Create new!
        </Link>
      </div>
    </div>
  );
}
