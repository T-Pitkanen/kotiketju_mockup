"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - Replace with actual newsletter API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus("success");
      setMessage("Thanks for subscribing! Check your email for confirmation.");
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-linear-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/30">
                <span>📬</span>
                <span>Stay Updated</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm">
                Get Exclusive Property Alerts
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Subscribe to our newsletter and be the first to know about new listings,
                blockchain features, KKT token rewards, and exclusive investment opportunities.
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span className="text-white/90 text-lg">
                    Early access to new property listings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span className="text-white/90 text-lg">
                    Weekly blockchain & crypto market insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span className="text-white/90 text-lg">
                    Exclusive KKT token bonus offers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span className="text-white/90 text-lg">
                    Real estate tips & investment guides
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Side - Newsletter Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
              <h3 className="text-3xl font-bold mb-3 text-white">Join 5,000+ Subscribers</h3>
              <p className="text-white/90 mb-6 text-lg">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading"}
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-white/90 border-2 border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg text-gray-800 placeholder-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-white text-primary py-4 px-6 rounded-xl hover:bg-white/90 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover-lift"
                >
                  {status === "loading" ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      <span>Subscribing...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <span>✓</span>
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <span>→</span>
                    </>
                  )}
                </button>

                {/* Status Message */}
                {message && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium ${
                      status === "success"
                        ? "bg-white/20 text-white border-2 border-white/30"
                        : "bg-red-500/20 text-white border-2 border-red-300/50"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>

              <p className="text-xs text-white/70 mt-6 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>

          {/* Additional CTAs Below */}
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/properties"
              className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center hover-lift border border-white/20"
            >
              <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">🏠</div>
              <h4 className="font-bold text-white text-xl mb-2">Browse Properties</h4>
              <p className="text-white/80">Explore available listings</p>
            </a>
            
            <a
              href="/contact"
              className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center hover-lift border border-white/20"
            >
              <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">💬</div>
              <h4 className="font-bold text-white text-xl mb-2">Talk to an Agent</h4>
              <p className="text-white/80">Get personalized assistance</p>
            </a>
            
            <a
              href="/profile"
              className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center hover-lift border border-white/20"
            >
              <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">⛓️</div>
              <h4 className="font-bold text-white text-xl mb-2">Blockchain Dashboard</h4>
              <p className="text-white/80">Manage your assets</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
