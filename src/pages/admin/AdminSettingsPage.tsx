const AdminSettingsPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">Settings</h1>

            <div className="space-y-8">
                {/* Google Ads Integration */}
                <div className="bg-admin-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-admin-text mb-1">Google Ads & Analytics</h2>
                    <p className="text-sm text-admin-text-light mb-4">Manage tracking scripts and tags for your site.</p>
                    
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="gtm-id" className="block text-sm font-medium text-admin-text-light mb-1">Google Tag Manager ID</label>
                            <input
                                id="gtm-id"
                                type="text"
                                className="w-full lg:w-1/2 p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent"
                                placeholder="GTM-XXXXXXX"
                            />
                        </div>

                        <div>
                            <label htmlFor="header-scripts" className="block text-sm font-medium text-admin-text-light mb-1">Scripts for &lt;head&gt;</label>
                            <textarea
                                id="header-scripts"
                                rows={5}
                                className="w-full p-2 border border-admin-border rounded-md focus:ring-admin-accent focus:border-admin-accent font-mono text-sm"
                                placeholder="<!-- Google Ads, Analytics, etc. -->"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Content Management */}
                <div className="bg-admin-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-admin-text mb-1">Content Management</h2>
                    <p className="text-sm text-admin-text-light mb-4">Update content for various sections of your website. (Placeholder)</p>
                    <div className="border-t border-admin-border pt-4">
                        <button className="text-admin-accent hover:text-admin-accent-hover font-medium">Edit Homepage Banner</button>
                    </div>
                    <div className="border-t border-admin-border pt-4 mt-4">
                        <button className="text-admin-accent hover:text-admin-accent-hover font-medium">Manage 'About Us' Page Content</button>
                    </div>
                </div>

                {/* User Management */}
                 <div className="bg-admin-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-admin-text mb-1">User Management</h2>
                    <p className="text-sm text-admin-text-light mb-4">Manage admin user roles and permissions. (Placeholder)</p>
                     <button className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                        Manage Users
                    </button>
                </div>

                <div className="flex justify-end">
                    <button className="bg-admin-accent text-white font-bold py-2 px-6 rounded-md hover:bg-admin-accent-hover transition-colors">
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSettingsPage;
