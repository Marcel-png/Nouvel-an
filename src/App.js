export default function app() {
  const celebrationWords = [
    { text: "2025!", size: 2 },
    { text: "Bonne Année!", size: 1.8 },
    { text: "Santé!", size: 1.6 },
    { text: "Bonheur!", size: 1.7 },
    { text: "Joie!", size: 1.6 },
    { text: "Amour!", size: 1.7 },
    { text: "Success!", size: 1.6 },
    { text: "✨", size: 2 },
    { text: "🎉", size: 2 },
    { text: "🎊", size: 2 },
    { text: "Meilleurs Vœux!", size: 1.8 },
    { text: "Félicitations!", size: 1.7 }
  ];

  const createTextParticles = (count, colorClass) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / count;
      const velocity = 150 + Math.random() * 100;
      const dx = `${Math.cos(angle) * velocity}px`;
      const dy = `${Math.sin(angle) * velocity}px`;
      const rotate = `${Math.random() * 360}deg`;
      const wordObj = celebrationWords[Math.floor(Math.random() * celebrationWords.length)];
      
      const gradientClasses = [
        'bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500]',
        'bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#FFB6C1]',
        'bg-gradient-to-r from-[#4169E1] via-[#1E90FF] to-[#87CEEB]',
        'bg-gradient-to-r from-[#9400D3] via-[#8A2BE2] to-[#9370DB]',
        'bg-gradient-to-r from-[#32CD32] via-[#98FB98] to-[#90EE90]',
        'bg-gradient-to-r from-[#FF0000] via-[#FF4444] to-[#FF6B6B]',
        'bg-gradient-to-r from-[#FFD700] via-[#FFC0CB] to-[#FF69B4]',
        'bg-gradient-to-r from-[#00BFFF] via-[#87CEEB] to-[#E0FFFF]',
      ];
      
      const randomGradient = gradientClasses[Math.floor(Math.random() * gradientClasses.length)];

      return (
        <div
          key={i}
          className={`absolute animate-text-spark font-bold bg-clip-text text-transparent 
                     ${randomGradient} tracking-wider`}
          style={{ 
            '--dx': dx, 
            '--dy': dy, 
            '--rotate': rotate,
            fontSize: `${wordObj.size}rem`,
            textShadow: `
              0 0 5px rgba(255,255,255,0.9),
              0 0 10px rgba(255,255,255,0.7),
              0 0 15px rgba(255,255,255,0.5),
              0 0 20px rgba(255,255,255,0.3)
            `,
            filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))'
          }}
        >
          {wordObj.text}
        </div>
      );
    });
  };

  const createFirework = (position, delay) => {
    const trailColors = [
      'from-purple-500 via-pink-500 to-transparent',
      'from-yellow-500 via-orange-500 to-transparent',
      'from-blue-500 via-indigo-500 to-transparent',
      'from-green-500 via-emerald-500 to-transparent',
      'from-red-500 via-rose-500 to-transparent'
    ];
    
    const randomTrail = trailColors[Math.floor(Math.random() * trailColors.length)];
    const launchHeight = `-${200 + Math.random() * 400}px`;

    return (
      <div 
        className={`absolute ${position} bottom-0 group`}
        style={{ 
          animationDelay: `${delay}ms`,
          filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
        }}
      >
        {/* Traînée lumineuse */}
        <div className="absolute w-[2px] h-full bg-gradient-to-t from-white via-yellow-200 to-transparent opacity-50"></div>
        
        {/* Fusée principale */}
        <div 
          className={`w-1.5 h-6 bg-gradient-to-t ${randomTrail} animate-launch 
                     rounded-full blur-[0.5px]`}
          style={{ '--launch-height': launchHeight }}
        >
          <div className="relative">
            {createTextParticles(20, 'text-white')} {/* Augmenté à 20 particules */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Étoiles en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      {/* Feux d'artifice */}
      {createFirework('left-[10%]', 0)}
      {createFirework('left-[25%]', 400)}
      {createFirework('left-[40%]', 800)}
      {createFirework('left-[55%]', 1200)}
      {createFirework('left-[70%]', 1600)}
      {createFirework('left-[85%]', 2000)}
      {createFirework('left-[15%]', 2400)}
      {createFirework('left-[30%]', 2800)}
      {createFirework('left-[45%]', 3200)}
      {createFirework('left-[60%]', 3600)}
      {createFirework('left-[75%]', 4000)}
      {createFirework('left-[90%]', 4400)}

      {/* Formulaire amélioré */}
      <div className="flex items-center justify-center h-full">
        <form className="w-[500px] relative z-10 p-8 rounded-2xl bg-gradient-to-br from-white/95 to-white/75 backdrop-blur-md shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
          {/* En-tête décoratif */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-3">
              Bonne Année 2025
            </h1>
            <p className="text-gray-600 font-medium">
              Partagez vos vœux pour la nouvelle année
            </p>
          </div>

          {/* Zone de saisie */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                placeholder="Entrez votre nom..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-6 rounded-lg 
                       hover:from-purple-700 hover:to-pink-600 transform hover:-translate-y-0.5 
                       transition-all duration-300 shadow-lg hover:shadow-xl
                       focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              ✨ Partager mes vœux
            </button>
          </div>

          {/* Décoration supplémentaire */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
        </form>
      </div>
    </div>
  );
}