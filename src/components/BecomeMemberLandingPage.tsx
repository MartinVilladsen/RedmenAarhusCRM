import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Shirt, Calendar, MapPin, Gift, Wallet, Plane } from "lucide-react";

const memberships = [
  {
    title: "Årsabonnement",
    price: "299",
    period: "pr. år",
    popular: true,
    buttonText: "Bliv medlem",
  },
  {
    title: "To-årigt abonnement",
    price: "499",
    period: "hvert andet år",
    buttonText: "Vælg 2-år",
  },
];

const highlights = [
  { icon: <Plane className="w-8 h-8 text-red-600" />, text: "Vind Liverpool-billetter" },
  { icon: <Shirt className="w-8 h-8 text-red-600" />, text: "Vind nye eller vintage Liverpool-trøjer" },
  { icon: <Calendar className="w-8 h-8 text-red-600" />, text: "Events med Liverpool-legender" },
  { icon: <MapPin className="w-8 h-8 text-red-600" />, text: "Spar op til 20% på dine Anfield-rejser" },
  { icon: <Wallet className="w-8 h-8 text-red-600" />, text: "Rabatter ved din lokale afdeling" },
  { icon: <Gift className="w-8 h-8 text-red-600" />, text: "Og meget mere!" },
];

const stats = [
  { value: "+5500", label: "Medlemmer af fællesskabet" },
  { value: "+4000", label: "Fans til CL-finalen 22, Gladsaxe Stadion" },
  { value: "+1200", label: "Fans til BOSS Tour Denmark 21" },
  { value: "16", label: "Afdelinger i hele landet" },
];

type Props = { backgroundImage?: string };

export function LandingPage({ backgroundImage = "/landingpage.png" }: Props) {
  return (
    <main className="font-sans antialiased">
      <section
        className="relative h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Vær med i Redmen Family</h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Bliv medlem og få adgang til eksklusivt indhold, forudkøb, rabatter og giveaways
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-red-800 text-center mb-8">Hvad du får som medlem</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {highlights.map((h, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              {h.icon}
              <p className="mt-2 text-sm font-medium text-gray-700">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-red-800 text-center mb-8">Vælg dit medlemskab</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {memberships.map((m, idx) => (
            <Card
              key={idx}
              className={`flex-1 relative overflow-hidden border-0 ${m.popular ? 'ring-2 ring-amber-400' : ''}`}
            >
              {m.popular && <div className="absolute top-0 inset-x-0 h-2 bg-amber-400" />}
              <CardContent className="py-8 text-center">
                <h3 className="text-xl font-semibold uppercase text-red-800">{m.title}</h3>
                <p className="mt-4 text-5xl font-bold text-red-900">
                  {m.price}
                  <span className="text-xl font-medium ml-1">DKK</span>
                </p>
                <p className="uppercase text-sm text-red-700 mt-1">{m.period}</p>
                <Button variant={m.popular ? 'default' : 'outline'} className="mt-6 w-full">
                  {m.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-amber-400 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-red-900">{s.value}</p>
              <p className="mt-1 text-sm text-red-800 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default LandingPage;