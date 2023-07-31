
import Image from 'next/image';
import Link from 'next/link';

const Support = () => {
    return (
        <div className="container mx-auto p-4  bg-gray-100 rounded">
        
            <h1 className="text-3xl font-bold mb-4">Support</h1>
            <p className="text-lg">
                If you have any questions or need assistance, our support team is here
                to help. Reach out to us through one of the following channels, and we
                will get back to you as soon as possible:
            </p>

            <div className="flex justify-center mt-6">

                <div className="w-80 overflow-hidden border rounded-lg shadow-lg object-cover m-2">
                    <Image
                        src="/images/mail.avif"
                        alt="Support Email"
                        width={160}
                        height={160}
                        className="w-full h-2/4"
                    />
                    <div className='p-4'>
                        <h3 className="text-xl font-semibold my-2">Email</h3>
                        <p className="text-lg">
                            Send us an email at{' '}
                            <Link
                                href="mailto:support@example.com"
                                className="text-blue-600 hover:underline"
                            >
                                support@example.com
                            </Link>{' '}
                            and we will respond promptly.
                        </p>
                    </div>

                </div>

                <div className="w-80 overflow-hidden border rounded-lg shadow-lg object-cover m-2">
                    <Image
                        src="/images/message.avif"
                        alt="Support Chat"
                        width={160}
                        height={160}
                        className="w-full h-2/4"
                    />
                    <div className='p-4'>
                        <h3 className="text-xl font-semibold my-2">Live Chat</h3>
                        <p className="text-lg">
                            Chat with our support team live on our website during business
                            hours.
                        </p>
                    </div>

                </div>

                <div className="w-80 overflow-hidden border rounded-lg shadow-lg object-cover m-2">
                    <Image
                        src="/images/phone.avif"
                        alt="Support Phone"
                        width={160}
                        height={160}
                        className="w-full h-2/4"
                    />
                    <div className='p-4'>
                        <h3 className="text-xl font-semibold my-2">Phone</h3>
                        <p className="text-lg">
                            Call our support team at <Link href="tel:+123456789">+123 456 789</Link>{' '}
                            during business hours.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Support;
