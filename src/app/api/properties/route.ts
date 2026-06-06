import { BHK_OPTIONS } from "@/constants/filter";
import properties from "@/data/properties.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const location = searchParams.get("location");
  const bhk = searchParams.get("bhk");
  const type = searchParams.get("type");

  let result = properties;

  if (location) {
    result = result.filter((p) =>
      p.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (bhk && bhk !== BHK_OPTIONS[0]) {
    result = result.filter((p) => p.bhk === Number(bhk));
  }

  if (type) {
    result = result.filter((p) => p.type === type);
  }

  return Response.json(result);
}