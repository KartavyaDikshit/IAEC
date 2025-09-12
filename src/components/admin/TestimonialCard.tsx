import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  university: string;
  course: string;
  country: string;
  rating: number;
  imageUrl?: string;
  createdAt: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  onDelete: (id: string) => void;
}

export default function TestimonialCard({ testimonial, onDelete }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {testimonial.imageUrl && (
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold">{testimonial.name}</h3>
          <div className="ml-auto flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{testimonial.university} - {testimonial.course} ({testimonial.country})</p>
        <p className="text-gray-800 mb-4">{testimonial.content}</p>
        <div className="flex justify-end space-x-2">
          <button className="text-sm text-blue-600 hover:underline">Edit</button>
          <button onClick={() => onDelete(testimonial.id)} className="text-sm text-red-600 hover:underline">Delete</button>
        </div>
      </div>
    </div>
  );
}
