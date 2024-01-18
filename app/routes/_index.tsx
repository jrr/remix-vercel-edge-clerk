import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix+Vercel Edge+Clerk test</h1>
      <ul>
        <li>
          <Link to="/node">Serverless (node.js) Route</Link>
        </li>
        <li>
          <Link to="/edge">Edge Route</Link>
        </li>
      </ul>
    </div>
  );
}
