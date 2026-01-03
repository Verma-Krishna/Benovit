"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "../../products/data";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [relatedProducts, setRelatedProducts] = useState([]); // ✅ client-only
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const [errors, setErrors] = useState({});
  const ownerNumber = "919876543210";

  // ❗ Generate random related products AFTER hydration
  useEffect(() => {
    if (!product) return;

    const shuffled = products
      .filter((p) => p.slug !== product.slug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    setRelatedProducts(shuffled);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
        Product not found.
      </div>
    );
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile Number is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile))
      newErrors.mobile = "Enter a valid 10-digit number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    const text = `New Inquiry for ${product.name}%0A%0AName: ${form.name}%0AMobile: ${form.mobile}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${ownerNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-linear-to-br from-[#0b2a47] via-[#0b3e58] to-[#008080] min-h-screen pb-12 pt-24 px-6 text-white">
      {/* Product */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={400}
            className="rounded-2xl bg-white/10 p-4 object-contain"
          />

          <div>
            <h1 className="text-4xl font-bold text-teal-300 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-100 mb-4">{product.description}</p>

            {product.highlights?.length > 0 && (
              <ul className="list-disc pl-6 text-gray-200">
                {product.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Related Products (hydration safe) */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold mb-6 border-b border-white/30 pb-2">
            Related Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <Link
                href={`/products/${item.slug}`}
                key={item.id}
                className="bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-col items-center hover:bg-white/20 transition"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={150}
                  className="object-contain h-32"
                />
                <p className="mt-3 text-sm text-center">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Inquiry Form */}
      <div className="max-w-lg mx-auto mt-16 bg-white/10 rounded-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-teal-300 mb-6">
          Have a Question?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 rounded bg-white/20"
          />

          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full p-3 rounded bg-white/20"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded bg-white/20"
          />

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 py-3 rounded font-medium"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
