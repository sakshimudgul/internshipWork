import { useTheme } from "../context/ThemeContext";

function HomePage() {
  // 4. CONSUME context directly — NO PROPS NEEDED!
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen p-8 transition-colors ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Card */}
      <div
        className={`max-w-md mx-auto p-6 rounded-xl shadow-lg ${
          isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4">🌓 Theme Switcher</h1>

        {/* Description */}
        <p className="mb-6">
          Current theme:{" "}
          <span className="font-semibold">{isDark ? "Dark" : "Light"}</span>
        </p>

        {/* Button — Uses context directly! */}
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            isDark
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
        </button>

        {/* Nested component — Also gets context directly! */}
        <Footer />
      </div>
    </div>
  );
}

//  This component is DEEPLY nested in theory,
// but still gets context WITHOUT PROPS!
function Footer() {
  const { isDark } = useTheme();

  return (
    <div
      className={`mt-6 pt-4 border-t text-sm ${
        isDark
          ? "border-gray-700 text-gray-400"
          : "border-gray-200 text-gray-500"
      }`}
    >
      ✅ No props were passed to reach this component!
      <br />
      Context delivered directly.
    </div>
  );
}

export default HomePage;
