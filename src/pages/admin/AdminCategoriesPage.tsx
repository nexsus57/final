import { useState } from 'react';
import { CATEGORIES } from '../../constants';
import { Category } from '../../types';
import { PlusCircleIcon } from '../../components/icons/AdminIcons';

const AdminCategoriesPage = () => {
    // Mock state for categories since we can't modify constants
    const [categories, setCategories] = useState(CATEGORIES);
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleAddCategory = (e: React.FormEvent) => {
        e.preventDefault();
        if (newCategoryName.trim() === '') return;

        const newCategory: Category = {
            id: newCategoryName.toLowerCase().replace(/\s+/g, '-'),
            name: newCategoryName,
            icon: PlusCircleIcon,
        };

        setCategories(prev => [...prev, newCategory]);
        setNewCategoryName('');
        alert('Category added! (Frontend demo)');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">Categories</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Add New Category Form */}
                <div className="lg:col-span-1">
                    <div className="bg-admin-card p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-admin-text mb-4">Add New Category</h2>
                        <form onSubmit={handleAddCategory}>
                            <div>
                                <label htmlFor="category-name" className="block text-sm font-medium text-admin-text-light mb-1">Category Name</label>
                                <input
                                    id="category-name"
                                    type="text"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent"
                                    placeholder="e.g., Waterproof Tapes"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover transition-colors"
                            >
                                Add Category
                            </button>
                        </form>
                    </div>
                </div>

                {/* Categories List */}
                <div className="lg:col-span-2">
                     <div className="bg-admin-card shadow-md rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr className="border-b-2 border-admin-border bg-gray-50">
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Category Name</th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Slug</th>
                                        <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (
                                        <tr key={category.id} className="border-b border-admin-border hover:bg-gray-50">
                                            <td className="px-5 py-4 text-sm font-semibold text-admin-text">{category.name}</td>
                                            <td className="px-5 py-4 text-sm text-admin-text-light">{category.id}</td>
                                            <td className="px-5 py-4 text-sm">
                                                 <div className="flex items-center space-x-3">
                                                    <button className="text-admin-accent hover:text-admin-accent-hover">Edit</button>
                                                    <button className="text-red-500 hover:text-red-700">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCategoriesPage;
