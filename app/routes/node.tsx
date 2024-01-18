import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader:", request.url);
  return { message: "Hello from node" };
}
export default function BatteryPage() {
  const data = useLoaderData<typeof loader>();
  return <>{data.message}</>;
}
