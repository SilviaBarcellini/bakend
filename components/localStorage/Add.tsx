export {};
import { useState } from "react";

export function Add() {
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Search for ing"
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
