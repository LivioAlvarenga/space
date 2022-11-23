import React from "react";

export default function Tags() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-space-100">Busque por tags:</p>
      <ul className="flex items-center justify-between gap-5 p-0 text-white">
        <li className="cursor-pointer rounded-lg bg-space-800 py-2 px-3">Estrelas</li>
        <li className="cursor-pointer rounded-lg bg-space-800 py-2 px-3">Galáxias</li>
        <li className="cursor-pointer rounded-lg bg-space-800 py-2 px-3">Lua</li>
        <li className="cursor-pointer rounded-lg bg-space-800 py-2 px-3">Planetas</li>
      </ul>
    </div>
  );
}
