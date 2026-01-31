"use client";

import { useState } from "react";
import Image from "next/image";

const creators = [
  {
    id: 1,
    name: "ScruffyNerfHerder69",
    tagline: "I know.",
    subscribers: "12.4K",
    posts: 147,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    verified: true,
    price: "4.99",
    preview: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "KeSSeLRunKing",
    tagline: "Made it in less than 12 parsecs... to your DMs",
    subscribers: "8.7K",
    posts: 89,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    verified: true,
    price: "7.99",
    preview: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "CarboniteHottie",
    tagline: "Frozen in carbonite, hot in real life",
    subscribers: "23.1K",
    posts: 312,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true,
    price: "9.99",
    preview: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "BlasterBabe",
    tagline: "Hokey religions are no match for this blaster",
    subscribers: "5.2K",
    posts: 67,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: false,
    price: "3.99",
    preview: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "MillenniumFalconDaddy",
    tagline: "She may not look like much, but she's got it where it counts",
    subscribers: "15.8K",
    posts: 201,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face",
    verified: true,
    price: "5.99",
    preview: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "WookieeWingman",
    tagline: "RRWWWGG (translation: subscribe)",
    subscribers: "31.2K",
    posts: 445,
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
    verified: true,
    price: "12.99",
    preview: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop",
  },
];

const features = [
  { icon: "🔫", text: "Exclusive blaster poses" },
  { icon: "🚀", text: "Behind-the-scenes Falcon tours" },
  { icon: "❄️", text: "Carbonite freezing tutorials" },
  { icon: "💬", text: "Direct messages to your favorite smuggler" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Animated stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-6 py-20 text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="font-[var(--font-orbitron)] text-6xl md:text-8xl font-black tracking-tight">
              <span className="text-cyan-400">Only</span>
              <span className="text-yellow-400">Hans</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 italic">
              &quot;Never tell me the odds... of getting this many subscribers&quot;
            </p>
          </div>

          {/* Age verification parody */}
          <div className="inline-block px-6 py-3 mb-8 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
            <p className="text-yellow-400 font-semibold">
              ⚠️ 18+ Years of Star Wars Fandom Required ⚠️
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your holonet address..."
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all glow-blue"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <p className="text-gray-300 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creators Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-cyan-400">Featured</span>{" "}
            <span className="text-white">Smugglers</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            The galaxy&apos;s most scruffy-looking nerf herders, all in one place
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((creator) => (
              <div
                key={creator.id}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all hover:glow-blue group"
              >
                {/* Preview Image */}
                <div className="relative h-48 bg-gray-700 overflow-hidden">
                  <Image
                    src={creator.preview}
                    alt={creator.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

                  {/* Blur overlay with lock */}
                  <div className="absolute inset-0 backdrop-blur-md flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🔒</div>
                      <p className="text-sm text-gray-300">Subscribe to unlock</p>
                    </div>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-cyan-400"
                      />
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-xs">
                          ✓
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white truncate">
                        @{creator.name}
                      </h3>
                      <p className="text-gray-400 text-sm truncate italic">
                        &quot;{creator.tagline}&quot;
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <span>{creator.subscribers} fans</span>
                    <span>{creator.posts} posts</span>
                  </div>

                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all">
                    Subscribe ${creator.price}/mo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold mb-8">
            What the <span className="text-yellow-400">Rebels</span> Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                &quot;I&apos;ve never seen a vest worn with such confidence. 10/10 would defrost from carbonite.&quot;
              </p>
              <p className="text-cyan-400 font-semibold">- Princess L.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                &quot;RRWWWWGGGG AARRRGGHH!&quot;
              </p>
              <p className="text-cyan-400 font-semibold">- Chewbacca</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                &quot;There is... another... subscription I must get.&quot;
              </p>
              <p className="text-cyan-400 font-semibold">- Master Yoda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[var(--font-orbitron)] text-2xl font-bold mb-4">
            <span className="text-cyan-400">Only</span>
            <span className="text-yellow-400">Hans</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            This is a parody site. Not affiliated with Lucasfilm, Disney, or any actual content platform.
            <br />
            Made with 💙 by scruffy-looking nerf herders everywhere.
          </p>
          <div className="flex justify-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-cyan-400">Terms of Smuggling</a>
            <a href="#" className="hover:text-cyan-400">Privacy (Ha!)</a>
            <a href="#" className="hover:text-cyan-400">Contact Jabba</a>
          </div>
          <p className="mt-8 text-gray-600 text-xs">
            © {new Date().getFullYear()} OnlyHans. All rights reserved in this galaxy and the next.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-gray-800 rounded-xl p-8 max-w-md text-center border border-cyan-500/50 glow-blue">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-cyan-400 mb-2">
              It&apos;s a Trap!
            </h3>
            <p className="text-gray-300 mb-6">
              Just kidding! This is a gag site. But we appreciate your sense of humor, you scruffy-looking nerf herder!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all"
            >
              May the Force Be With You
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
