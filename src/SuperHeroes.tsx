import { useState, useEffect } from "react";
import api from "./services/api";

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

export default function Superheroes() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await api.get("/superheroes");
      setSuperheroes(response.data);
    } catch (error: any) {
      setErrorMessage("Failed to load superheroes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const addSuperhero = async () => {
    if (!name || !superpower || !humilityScore) {
      setErrorMessage("All fields are required.");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    const superhero = {
      name,
      superpower,
      humilityScore: Number(humilityScore),
    };

    try {
      await api.post("/superheroes", superhero);
      fetchSuperheroes();
      setName("");
      setSuperpower("");
      setHumilityScore("");
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Error adding superhero.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Humble Superheroes</h1>

      {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}

      <div className="mb-4">
        <input
          className="border p-2 w-full mb-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="text"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="number"
          placeholder="Humility Score (1-10)"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
        />
        <button
          className={`p-2 w-full ${
            loading ? "bg-gray-400" : "bg-blue-500 text-white"
          }`}
          onClick={addSuperhero}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Superhero"}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {superheroes.map((hero, index) => (
            <li key={index} className="border p-2 mb-2">
              <strong>{hero.name}</strong> - {hero.superpower} (Humility: {hero.humilityScore})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
