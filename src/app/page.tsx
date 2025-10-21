'use client'; 
export default function LandingPage() {
    const isAuthenticated = false; 

    return (
        <main className="min-h-screen bg-white pt-[100px] pb-20"> 
            <div className="max-w-6xl mx-auto">
                
                <h1 
                    className="text-4xl md:text-4xl whitespace-nowrap leading-tight mb-6 px-12" 
                    style={{ 
                        color: '#270F94', 
                        textAlign: 'left' 
                    }}
                >
                    Create your profile and take the first step towards new opportunities
                </h1>
                
                <div className="mb-16">
                    <p 
                        className="text-center text-lg px-12" 
                        style={{ 
                            color: '#9CA3AF', 
                        }}
                    >
                        By creating your account, you’ll gain access to a thriving community where brands and individuals are committed to offering you ongoing support. This support network will empower you with the resources, guidance, and connections you need to succeed, ensuring that you’re never alone on your journey.
                    </p>
                </div>


                <div className="flex justify-center items-stretch space-x-8">
                
                    <div 
                        className="bg-white border border-[#644FC1] rounded-xl w-[320px] h-[460px] p-10 flex flex-col items-center shadow-sm" 
                    >
                        
                        <div>
                            <img 
                                src="/bag.png" 
                                alt="Briefcase Icon" 
                                className="w-[92px] h-[72px]" 
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = "https://placehold.co/92x72/644FC1/FFFFFF?text=Bag";
                                }}
                            />
                        </div>

                        <h2 
                            className="text-2xl mb-4 mt-[80px]"
                            style={{ color: '#644FC1', textAlign: 'center' }}
                        >
                            Brand or organization
                        </h2>
                        <p className="text-sm text-gray-500 mb-8 text-left w-full"> 
                            If your brand is established and you’re looking for continuous support, get started now.
                        </p>

                        <StartButton isAuthenticated={isAuthenticated} />

                        <a 
                            href="/learn-more" 
                            className="text-sm mt-3 font-medium transition"
                            style={{ color: '#8D75F7' }}
                        >
                            learn more
                        </a>
                    </div>
                    

                </div>
            </div>
        </main>
    );
}

const StartButton = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    const targetHref = isAuthenticated ? '/create-profile-step1' : '/login';
    
    return (
        <a 
            href={targetHref}
            className="w-full py-3 px-6 text-white rounded-lg transition shadow-lg text-center"
            style={{ backgroundColor: '#5C4FC1', '--tw-ring-color': '#5C4FC1' }}
        >
            Start
        </a>
    );
}
