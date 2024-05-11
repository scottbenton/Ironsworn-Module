import { RouteObject } from "react-router-dom";

export const basePath = "ironsworn";

export function constructCampaignPath(campaignId: string) {
  return `/${basePath}/${campaignId}`;
}

export const routes: RouteObject[] = [
  {
    path: basePath,
    element: <>Ironsworn</>,
    // children: [
    //   {
    //     index: true,
    //     element: (
    //       <AuthBlocker>
    //         <HomePage />
    //       </AuthBlocker>
    //     ),
    //   },
    //   {
    //     path: ":campaignId",
    //     element: (
    //       <AuthBlocker requireAuth>
    //         <CampaignPage />
    //       </AuthBlocker>
    //     ),
    //   },
    //   {
    //     path: "images",
    //     element: (
    //       <AuthBlocker requireAuth>
    //         <ImagePage />
    //       </AuthBlocker>
    //     ),
    //   },
    // ],
  },
];
