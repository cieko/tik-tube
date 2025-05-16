import { HydrateClient, trpc } from "@/trpc/server"

import { StudioView } from "@/modules/studio/ui/view/studio-view";

const StudioPage = async () => {
  void trpc.studio.getMany.prefetchInfinite();

  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  )
}

export default StudioPage