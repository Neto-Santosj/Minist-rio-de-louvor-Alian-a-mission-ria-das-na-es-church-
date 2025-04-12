
import { useState } from "react";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [videos, setVideos] = useState([
    {
      title: "Louvor de domingo",
      url: "https://www.youtube.com/embed/yourvideoid",
      description: "Uma apresentação abençoada do nosso culto de domingo.",
      comments: ["Muito lindo!", "Glória a Deus!"]
    }
  ]);

  const correctPassword = "amigos123";

  const handleLogin = () => {
    if (password === correctPassword) setAuthenticated(true);
    else alert("Senha incorreta!");
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Ministério de louvor Aliança missionária church</h1>
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-64 p-2 border rounded"
        />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Ministério de louvor Aliança missionária church</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <div className="aspect-video mb-4">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <p className="mb-4 text-sm text-gray-700">{video.description}</p>
            <div>
              <h3 className="font-medium mb-1">Comentários:</h3>
              <ul className="list-disc list-inside text-sm">
                {video.comments.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
