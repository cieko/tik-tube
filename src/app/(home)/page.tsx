import { trpc } from "@/trpc/server"

export default async function Home() {
  void trpc.hello.prefetch({ text: "Rahul" });

  return (
    <div>
      {/* Loading ... */}

      
    </div>
  );
}
