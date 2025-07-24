import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../../constants';
import { Product } from '../../types';

const AdminProductEditPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const isEditing = Boolean(productId);

    const [product, setProduct] = useState<Partial<Product>>({
        id: '',
        name: '',
        shortDescription: '',
        category: CATEGORIES[0]?.id || '',
        features: [''],
        uses: [''],
        image: ''
    });

    useEffect(() => {
        if (isEditing) {
            const existingProduct = PRODUCTS.find(p => p.id === productId);
            if (existingProduct) {
                setProduct(existingProduct);
            } else {
                navigate('/admin/products');
            }
        }
    }, [productId, isEditing, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };
    
    const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: 'features' | 'uses') => {
        const newArray = [...(product[field] || [])];
        newArray[index] = e.target.value;
        setProduct(prev => ({...prev, [field]: newArray }));
    };

    const addArrayItem = (field: 'features' | 'uses') => {
        setProduct(prev => ({ ...prev, [field]: [...(prev[field] || []), ''] }));
    };

    const removeArrayItem = (index: number, field: 'features' | 'uses') => {
        const newArray = [...(product[field] || [])];
        newArray.splice(index, 1);
        setProduct(prev => ({ ...prev, [field]: newArray }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Saving product:', product);
        alert(`Product ${isEditing ? 'updated' : 'created'} successfully! (Frontend demo)`);
        navigate('/admin/products');
    };

    const pageTitle = isEditing ? 'Edit Product' : 'Add New Product';

    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">{pageTitle}</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 bg-admin-card p-6 rounded-lg shadow-md space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-admin-text-light mb-1">Product Name</label>
                            <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent" required/>
                        </div>
                        <div>
                            <label htmlFor="shortDescription" className="block text-sm font-medium text-admin-text-light mb-1">Short Description</label>
                            <textarea id="shortDescription" name="shortDescription" value={product.shortDescription} onChange={handleInputChange} rows={4} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent" required></textarea>
                        </div>

                         {/* Features */}
                        <div>
                            <label className="block text-sm font-medium text-admin-text-light mb-2">Key Features</label>
                            {(product.features || []).map((feature, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <input type="text" value={feature} onChange={(e) => handleArrayChange(e, index, 'features')} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent"/>
                                    <button type="button" onClick={() => removeArrayItem(index, 'features')} className="ml-2 text-red-500 hover:text-red-700">&times;</button>
                                </div>
                            ))}
                            <button type="button" onClick={() => addArrayItem('features')} className="text-sm text-admin-accent hover:underline">+ Add Feature</button>
                        </div>

                        {/* Uses */}
                         <div>
                            <label className="block text-sm font-medium text-admin-text-light mb-2">Common Uses</label>
                            {(product.uses || []).map((use, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <input type="text" value={use} onChange={(e) => handleArrayChange(e, index, 'uses')} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent"/>
                                    <button type="button" onClick={() => removeArrayItem(index, 'uses')} className="ml-2 text-red-500 hover:text-red-700">&times;</button>
                                </div>
                            ))}
                            <button type="button" onClick={() => addArrayItem('uses')} className="text-sm text-admin-accent hover:underline">+ Add Use</button>
                        </div>
                    </div>

                    {/* Sidebar/Metadata */}
                    <div className="space-y-6">
                         <div className="bg-admin-card p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-admin-text mb-4">Organize</h3>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-admin-text-light mb-1">Category</label>
                                <select id="category" name="category" value={product.category} onChange={handleInputChange} className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent">
                                    {CATEGORIES.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                         </div>
                         <div className="bg-admin-card p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-admin-text mb-4">Product Image</h3>
                            {product.image ? (
                                <img src={product.image} alt="Product" className="w-full h-auto rounded-md mb-4 object-cover" />
                            ) : (
                                <div className="w-full h-auto aspect-video rounded-md mb-4 bg-gray-200 flex items-center justify-center">
                                    <span className="text-sm text-admin-text-light">No image</span>
                                </div>
                            )}
                            <label htmlFor="image-upload" className="w-full text-center cursor-pointer bg-gray-100 p-4 border-2 border-dashed border-admin-border rounded-md hover:bg-gray-200">
                                <span className="text-sm text-admin-text-light">Click to upload or drag & drop</span>
                                <input id="image-upload" name="image" type="file" className="hidden" />
                            </label>
                         </div>
                    </div>
                </div>

                 <div className="flex justify-end space-x-4">
                    <Link to="/admin/products" className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">Cancel</Link>
                    <button type="submit" className="bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover transition-colors">
                        {isEditing ? 'Save Changes' : 'Publish Product'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminProductEditPage;
