export function StatsSection() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-pink-600">1M+</div>
                        <div className="text-sm text-gray-600">Total Views Generated</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-purple-600">50K+</div>
                        <div className="text-sm text-gray-600">Students Taught</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-pink-600">95%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-purple-600">24/7</div>
                        <div className="text-sm text-gray-600">Community Support</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
