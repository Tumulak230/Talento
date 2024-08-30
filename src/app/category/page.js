import React from 'react';

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-orange-600 bg-opacity-75 p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold">TALENTO</a>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-orange-100 text-lg">Home</a>
            <a href="#" className="text-orange-100 text-lg">Category</a>
            <a href="#" className="text-orange-100 text-lg">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white">
              <i className="fas fa-user"></i> Profile
            </a>
          </div>
        </nav>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Singers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const categories = [
  { name: 'Solo Singer', image: '/path/to/solo-singer.png' },
  { name: 'R&B Vocalist', image: '/path/to/rb-vocalist.png' },
  { name: 'Wedding Singer', image: '/path/to/wedding-singer.png' },
  { name: 'Rapper', image: '/path/to/rapper.png' },
  { name: 'Choir', image: '/path/to/choir.png' },
  { name: 'Singing Guitarist', image: '/path/to/singing-guitarist.png' },
  { name: 'Singing Pianist', image: '/path/to/singing-pianist.png' },
  { name: 'Acapella', image: '/path/to/acapella.png' },
  { name: 'Classical Singer', image: '/path/to/classical-singer.png' },
  { name: 'Jazz Singer', image: '/path/to/jazz-singer.png' },
];
