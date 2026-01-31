"use client";

import { useState, useEffect } from "react";
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
    preview: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop",
    tier: "Smuggler",
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
    preview: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    tier: "Captain",
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
    preview: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop",
    tier: "Legendary",
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
    preview: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&h=300&fit=crop",
    tier: "Rookie",
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
    preview: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400&h=300&fit=crop",
    tier: "Captain",
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
    preview: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=400&h=300&fit=crop",
    tier: "Legendary",
  },
  {
    id: 7,
    name: "CantinaCreep",
    tagline: "He doesn't like you... but I do 😏",
    subscribers: "6.9K",
    posts: 169,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=150&h=150&fit=crop&crop=face",
    verified: false,
    price: "4.20",
    tier: "Smuggler",
    preview: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "JabbasTopDancer",
    tagline: "Slave outfit? I prefer 'self-employed entertainer'",
    subscribers: "42.0K",
    posts: 666,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    verified: true,
    price: "14.99",
    tier: "Legendary",
    preview: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "BobasFett",
    tagline: "No disintegrations... unless you're into that",
    subscribers: "77.7K",
    posts: 501,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    verified: true,
    price: "19.99",
    tier: "Bounty Hunter",
    preview: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop",
  },
];

const features = [
  { icon: "🔫", text: "Exclusive blaster poses", subtext: "Pew pew content daily" },
  { icon: "🚀", text: "Falcon cockpit tours", subtext: "It's got it where it counts" },
  { icon: "❄️", text: "Carbonite tutorials", subtext: "Freeze frame worthy" },
  { icon: "💬", text: "Smuggler DMs", subtext: "Bad feeling included" },
  { icon: "🎰", text: "Sabacc game nights", subtext: "Bet your ship" },
  { icon: "👔", text: "Vest fitting guides", subtext: "Fashion tips from Corellia" },
];

const stats = [
  { value: "50K+", label: "Scruffy Subscribers" },
  { value: "12", label: "Parsecs (or less)" },
  { value: "∞", label: "Bad Feelings" },
  { value: "1", label: "Shot First" },
];

const trendingTags = [
  "#VestLife", "#ShotFirst", "#KesselRunChallenge", "#CarboniteGlow",
  "#NerfHerderNation", "#FalconFridays", "#SmugglersOnly", "#CorellianHottie"
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"subscribe" | "creator">("subscribe");
  const [selectedCreator, setSelectedCreator] = useState<typeof creators[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setModalType("subscribe");
    setShowModal(true);
    setEmail("");
  };

  const handleCreatorClick = (creator: typeof creators[0]) => {
    setSelectedCreator(creator);
    setModalType("creator");
    setShowModal(true);
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Legendary": return "from-yellow-500 to-orange-500";
      case "Bounty Hunter": return "from-red-500 to-pink-500";
      case "Captain": return "from-cyan-500 to-blue-500";
      case "Smuggler": return "from-green-500 to-emerald-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Space Background */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated starfield background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop"
            alt="Space background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Animated stars overlay */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 1}s`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>
        )}

        {/* Shooting star animation */}
        <div className="absolute top-20 left-0 w-full h-1 overflow-hidden">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-blaster" />
        </div>

        <div className="relative z-10 px-6 py-20 text-center max-w-5xl mx-auto">
          {/* Logo with glow effect */}
          <div className="mb-8 animate-pulse-slow">
            <div className="inline-block relative">
              <h1 className="font-[var(--font-orbitron)] text-7xl md:text-9xl font-black tracking-tight drop-shadow-2xl">
                <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">Only</span>
                <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]">Hans</span>
              </h1>
              <div className="absolute -top-4 -right-4 text-2xl animate-bounce">⭐</div>
            </div>
            <p className="mt-6 text-xl md:text-3xl text-gray-300 italic font-light">
              &quot;Never tell me the odds... of getting this many subscribers&quot;
            </p>
            <p className="mt-2 text-cyan-400 text-sm tracking-widest uppercase">
              The Galaxy&apos;s Premier Han Solo Cosplay Platform
            </p>
          </div>

          {/* Age verification parody */}
          <div className="inline-block px-8 py-4 mb-8 bg-yellow-500/20 border-2 border-yellow-500/50 rounded-xl backdrop-blur-sm">
            <p className="text-yellow-400 font-bold text-lg">
              ⚠️ 18+ Years of Star Wars Fandom Required ⚠️
            </p>
            <p className="text-yellow-400/70 text-sm mt-1">
              (We check your midichlorian count)
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your holonet address..."
                className="flex-1 px-5 py-4 bg-gray-900/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 backdrop-blur-sm text-lg"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-cyan-500 transition-all glow-blue text-lg whitespace-nowrap"
              >
                🚀 Subscribe Now
              </button>
            </form>
            <p className="mt-4 text-gray-500 text-sm">
              Join 50,000+ scruffy-looking nerf herders • Cancel anytime (try escaping Jabba&apos;s palace)
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 font-[var(--font-orbitron)]">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Trending Tags */}
      <section className="py-6 bg-gray-900/80 border-y border-gray-800 overflow-hidden">
        <div className="flex animate-scroll">
          {[...trendingTags, ...trendingTags].map((tag, i) => (
            <span
              key={i}
              className="mx-4 px-4 py-2 bg-gray-800 rounded-full text-cyan-400 text-sm font-medium whitespace-nowrap hover:bg-cyan-500/20 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-white">Exclusive</span>{" "}
            <span className="text-yellow-400">Content</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Subscribe to unlock the most scoundrel-worthy content in the galaxy
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
              >
                <div className="text-5xl mb-3 group-hover:animate-bounce">{feature.icon}</div>
                <p className="text-white font-semibold text-sm">{feature.text}</p>
                <p className="text-gray-500 text-xs mt-1">{feature.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-cyan-400">Featured</span>{" "}
            <span className="text-white">Smugglers</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            The galaxy&apos;s most scruffy-looking nerf herders, all in one place
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creators.map((creator) => (
              <div
                key={creator.id}
                onClick={() => handleCreatorClick(creator)}
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all hover:glow-blue group cursor-pointer transform hover:-translate-y-2 duration-300"
              >
                {/* Preview Image */}
                <div className="relative h-56 bg-gray-700 overflow-hidden">
                  <Image
                    src={creator.preview}
                    alt={creator.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />

                  {/* Tier badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getTierColor(creator.tier)}`}>
                    {creator.tier}
                  </div>

                  {/* Blur overlay with lock */}
                  <div className="absolute inset-0 backdrop-blur-md flex items-center justify-center opacity-90 group-hover:opacity-70 transition-opacity">
                    <div className="text-center">
                      <div className="text-5xl mb-2">🔒</div>
                      <p className="text-sm text-gray-300 font-medium">Subscribe to unlock</p>
                      <p className="text-xs text-cyan-400 mt-1">{creator.posts} exclusive posts</p>
                    </div>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        width={56}
                        height={56}
                        className="rounded-full border-3 border-cyan-400"
                      />
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold">
                          ✓
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-lg truncate">
                        @{creator.name}
                      </h3>
                      <p className="text-gray-400 text-sm truncate italic">
                        &quot;{creator.tagline}&quot;
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-cyan-400 font-semibold">{creator.subscribers} fans</span>
                    <span className="text-gray-500">{creator.posts} posts</span>
                  </div>

                  <button className={`mt-4 w-full py-3 bg-gradient-to-r ${getTierColor(creator.tier)} text-white font-bold rounded-xl hover:opacity-90 transition-all text-lg`}>
                    Subscribe ${creator.price}/mo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=600&fit=crop"
            alt="Stars background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold mb-12">
            What the <span className="text-yellow-400">Rebels</span> Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-800/70 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <div className="text-4xl mb-4">👸</div>
              <p className="text-gray-300 italic mb-4 text-lg">
                &quot;I&apos;ve never seen a vest worn with such confidence. 10/10 would defrost from carbonite.&quot;
              </p>
              <p className="text-cyan-400 font-bold">- Princess L.</p>
              <div className="flex justify-center mt-2">
                {"⭐".repeat(5)}
              </div>
            </div>
            <div className="p-8 bg-gray-800/70 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <div className="text-4xl mb-4">🐻</div>
              <p className="text-gray-300 italic mb-4 text-lg">
                &quot;RRWWWWGGGG AARRRGGHH WWWRRRGGGHH!&quot;
              </p>
              <p className="text-cyan-400 font-bold">- Chewbacca</p>
              <p className="text-gray-500 text-sm">(Translation: Best content ever)</p>
              <div className="flex justify-center mt-2">
                {"⭐".repeat(5)}
              </div>
            </div>
            <div className="p-8 bg-gray-800/70 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <div className="text-4xl mb-4">🧙</div>
              <p className="text-gray-300 italic mb-4 text-lg">
                &quot;Subscribe I must. Strong with the content, this one is.&quot;
              </p>
              <p className="text-cyan-400 font-bold">- Master Yoda</p>
              <div className="flex justify-center mt-2">
                {"⭐".repeat(5)}
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800/70 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <div className="text-4xl mb-4">🤖</div>
              <p className="text-gray-300 italic mb-4 text-lg">
                &quot;The probability of finding better content is approximately 3,720 to 1.&quot;
              </p>
              <p className="text-cyan-400 font-bold">- C-3PO</p>
            </div>
            <div className="p-8 bg-gray-800/70 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <div className="text-4xl mb-4">👿</div>
              <p className="text-gray-300 italic mb-4 text-lg">
                &quot;HO HO HO... this content pleases Jabba greatly.&quot;
              </p>
              <p className="text-cyan-400 font-bold">- Jabba the Hutt</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/30 via-gray-900 to-yellow-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-6">
            Ready to Make the <span className="text-yellow-400">Jump to Lightspeed</span>?
          </h2>
          <p className="text-gray-300 text-xl mb-8">
            Join the rebellion against boring content. Subscribe now and get your first parsec free!
          </p>
          <button
            onClick={() => { setModalType("subscribe"); setShowModal(true); }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-cyan-500 transition-all glow-blue text-xl"
          >
            🚀 Start Your Free Trial
          </button>
          <p className="mt-4 text-gray-500">
            No credit chip required • Cancel before Jabba catches you
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="font-[var(--font-orbitron)] text-3xl font-bold mb-4">
                <span className="text-cyan-400">Only</span>
                <span className="text-yellow-400">Hans</span>
              </h2>
              <p className="text-gray-400 mb-4">
                The premier destination for Han Solo cosplay enthusiasts across the galaxy.
                Established in a galaxy far, far away.
              </p>
              <div className="flex gap-4">
                <span className="text-2xl cursor-pointer hover:scale-125 transition-transform">🐦</span>
                <span className="text-2xl cursor-pointer hover:scale-125 transition-transform">📸</span>
                <span className="text-2xl cursor-pointer hover:scale-125 transition-transform">🎬</span>
                <span className="text-2xl cursor-pointer hover:scale-125 transition-transform">💬</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Become a Smuggler</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cosplay Tips</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Vest Sizing Guide</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blaster Safety</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal Stuff</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Smuggling</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy (Ha!)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookie Wookiees</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Jabba</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm mb-2">
              This is a parody site. Not affiliated with Lucasfilm, Disney, OnlyFans, or any actual content platform.
            </p>
            <p className="text-gray-600 text-xs">
              Made with 💙 by scruffy-looking nerf herders everywhere.
            </p>
            <p className="mt-4 text-gray-600 text-xs">
              © {new Date().getFullYear()} OnlyHans. All rights reserved in this galaxy and the next. Han shot first.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center border-2 border-cyan-500/50 glow-blue relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            {modalType === "subscribe" ? (
              <>
                <div className="text-7xl mb-4">🚀</div>
                <h3 className="font-[var(--font-orbitron)] text-3xl font-bold text-cyan-400 mb-2">
                  It&apos;s a Trap!
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Just kidding! This is a gag site. But we appreciate your sense of humor, you scruffy-looking nerf herder!
                </p>
                <div className="p-4 bg-gray-700/50 rounded-xl mb-6">
                  <p className="text-yellow-400 text-sm">
                    🌟 Pro tip: Share this with your Star Wars friends for maximum laughs
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-cyan-500 transition-all text-lg w-full"
                >
                  May the Force Be With You ✨
                </button>
              </>
            ) : selectedCreator && (
              <>
                <Image
                  src={selectedCreator.avatar}
                  alt={selectedCreator.name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-cyan-400 mx-auto mb-4"
                />
                <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-white mb-1">
                  @{selectedCreator.name}
                </h3>
                <p className="text-cyan-400 mb-4">{selectedCreator.tier} Tier</p>
                <p className="text-gray-300 italic mb-6">
                  &quot;{selectedCreator.tagline}&quot;
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-cyan-400 font-bold">{selectedCreator.subscribers}</div>
                    <div className="text-gray-400">Subscribers</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-cyan-400 font-bold">{selectedCreator.posts}</div>
                    <div className="text-gray-400">Posts</div>
                  </div>
                </div>
                <p className="text-yellow-400 text-sm mb-4">
                  🎭 This is a parody - no actual content here!
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className={`px-8 py-4 bg-gradient-to-r ${getTierColor(selectedCreator.tier)} text-white font-bold rounded-xl hover:opacity-90 transition-all text-lg w-full`}
                >
                  Close Profile
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
