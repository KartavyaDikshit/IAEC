
import BookingForm from '@/components/BookingForm';

const BookingPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>Book Free Counselling</h1>
      <div className="mt-8 max-w-lg mx-auto">
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
