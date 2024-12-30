export default function App() {
  const celebrationWords = [
    { text: "2025!", size: 2 },
    { text: "Bonne Année!", size: 1.8 },
    { text: "Santé!", size: 1.6 },
    { text: "Bonheur!", size: 1.7 },
    { text: "Joie!", size: 1.6 },
    { text: "Amour!", size: 1.7 },
    { text: "Succès!", size: 1.6 },
    { text: "✨", size: 2 },
    { text: "🎉", size: 2 },
    { text: "🎊", size: 2 },
    { text: "Meilleurs Vœux!", size: 1.8 },
    { text: "Félicitations!", size: 1.7 },
  ];

  const createTextParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / count;
      const velocity = 120 + Math.random() * 80;
      const dx = `${Math.cos(angle) * velocity}px`;
      const dy = `${Math.sin(angle) * velocity}px`;
      const rotate = `${Math.random() * 360}deg`;
      const wordObj = celebrationWords[Math.floor(Math.random() * celebrationWords.length)];

      const pastelGradientClasses = [
        "bg-gradient-to-r from-[#FFDDC1] via-[#FFE4E1] to-[#FDE2E4]",
        "bg-gradient-to-r from-[#D5E8D4] via-[#E3F6F5] to-[#F2F7F2]",
        "bg-gradient-to-r from-[#FEE1E8] via-[#FCD5CE] to-[#F8C8DC]",
        "bg-gradient-to-r from-[#D5C6E0] via-[#EDE9FE] to-[#FFF7D6]",
      ];

      const randomGradient =
        pastelGradientClasses[Math.floor(Math.random() * pastelGradientClasses.length)];

      return (
        <div
          key={i}
          className={`absolute animate-text-spark font-bold bg-clip-text text-transparent 
                     ${randomGradient} tracking-wider animate-pulse`}
          style={{
            '--dx': dx,
            '--dy': dy,
            '--rotate': rotate,
            fontSize: `${wordObj.size}rem`,
            animation: `shake 2s infinite, spin 4s linear infinite`,
            textShadow: `
              0 0 3px rgba(255,255,255,0.7),
              0 0 5px rgba(255,255,255,0.5),
              0 0 7px rgba(255,255,255,0.3)
            `,
          }}
        >
          {wordObj.text}
        </div>
      );
    });
  };

  const createFirework = (position, delay) => {
    const pastelTrailColors = [
      "from-purple-200 via-pink-100 to-transparent",
      "from-yellow-200 via-orange-100 to-transparent",
      "from-blue-200 via-indigo-100 to-transparent",
      "from-green-200 via-emerald-100 to-transparent",
      "from-red-200 via-rose-100 to-transparent",
    ];

    const randomTrail = pastelTrailColors[Math.floor(Math.random() * pastelTrailColors.length)];
    const launchHeight = `-${200 + Math.random() * 300}px`;

    return (
      <div
        className={`absolute ${position} bottom-0 group`}
        style={{
          animationDelay: `${delay}ms`,
        }}
      >
        {/* Traînée lumineuse */}
        <div className="absolute w-[2px] h-full bg-gradient-to-t from-white via-yellow-50 to-transparent opacity-30"></div>

        {/* Fusée principale */}
        <div
          className={`w-1.5 h-6 bg-gradient-to-t ${randomTrail} animate-launch 
                     rounded-full blur-[0.5px]`}
          style={{ '--launch-height': launchHeight }}
        >
          <div className="relative">{createTextParticles(15)}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-gray-800 via-black to-gray-800 overflow-hidden">
      {/* Étoiles en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>

      {/* Feux d'artifice */}
      {createFirework('left-[10%]', 0)}
      {createFirework('left-[30%]', 800)}
      {createFirework('left-[50%]', 1600)}
      {createFirework('left-[70%]', 2400)}
      {createFirework('left-[90%]', 3200)}

      {/* Formulaire */}
      <div className="flex items-center justify-center h-full">
        <form className="w-[500px] relative z-10 p-8 rounded-2xl bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 bg-clip-text text-transparent mb-3">
              Bonne Année 2025
            </h1>
            <p className="text-gray-600 font-medium">Partagez vos vœux pour la nouvelle année</p>
          </div>
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Entrez votre nom..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              ✨ Partager mes vœux
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}