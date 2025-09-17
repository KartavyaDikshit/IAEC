
import MockTestForm from '@/components/MockTestForm';

const MockTestPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>Free Mock Test</h1>
      <div className="mt-8 max-w-lg mx-auto">
        <MockTestForm />
      </div>
    </div>
  );
};

export default MockTestPage;
