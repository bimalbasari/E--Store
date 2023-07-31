import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
    <Head>
        <title>About</title>
    </Head>
      <div className="container mx-auto p-4 bg-gray-100 rounded">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-base">
          Welcome to our e-commerce store! We are a team of passionate
          individuals dedicated to bringing you the best products at the best
          prices. Our mission is to provide a seamless shopping experience for
          all our customers, offering a wide range of products and top-notch
          customer service. Whether you're looking for the latest gadgets,
          trendy fashion, or home essentials, we've got you covered. Happy
          shopping!
        </p>

        <h2 className="text-2xl font-bold my-4">Our Team</h2>
        <p className="text-base object-cover ">
          Our team consists of experienced professionals from various fields,
          including technology, marketing, logistics, and customer service. We
          work together with a shared commitment to providing the best online
          shopping experience possible. Each member of our team plays a crucial
          role in curating products, ensuring seamless website functionality,
          and addressing customer inquiries promptly.
        </p>

        <Image
          src="/images/team.webp"
          alt="Team"
          width={800}
          height={400}
          className="my-4 sm:max-h-96  max-h-64 object-cover rounded-md "
        />

        <h2 className="text-2xl font-bold my-4">Our Vision</h2>
        <p className="text-base">
          At our e-commerce store, we strive to become the go-to destination for
          online shopping, offering a diverse selection of products to meet the
          needs and preferences of our customers. We envision a platform that
          fosters convenience, reliability, and exceptional customer support,
          making every shopping experience enjoyable and memorable.
        </p>

        <Image
          src="/images/office.avif"
          alt="Office"
          width={800}
          height={400}
          className="my-4 sm:max-h-4/5 rounded-md"
        />
        <footer className="bg-gray-800 text-white py-4 text-center ">
          <p>&copy; {new Date().getFullYear()} Store. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default About;
