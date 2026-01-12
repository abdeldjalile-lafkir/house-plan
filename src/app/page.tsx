import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Foundation,
  GroundFloor,
  FirstFloor,
  Draining,
} from "@/components/plans";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24 m-25">
      <div className="w-full flex flex-col items-center justify-center mb-8">
        <h1 className="text-3xl font-bold mb-2">House Plan</h1>
        <p className="text-gray-600">
          Scale: 1:100 | Total Area: 10m × 10m = 100m²
        </p>
      </div>

      <Tabs
        defaultValue="foundation"
        className="mx-auto flex flex-col items-center justify-center gap-y-10"
      >
        <TabsList className="w-full min-w-2xl flex items-center justify-around my-4">
          <TabsTrigger value="foundation">Foundations Plan</TabsTrigger>
          <TabsTrigger value="ground-floor">Ground Floor Plan</TabsTrigger>
          <TabsTrigger value="first-floor">First Floor Plan</TabsTrigger>
          <TabsTrigger value="draining">Draining Plan</TabsTrigger>
        </TabsList>
        <TabsContent value="foundation">
          <Foundation />
        </TabsContent>
        <TabsContent value="ground-floor">
          <GroundFloor />
        </TabsContent>
        <TabsContent value="first-floor">
          <FirstFloor />
        </TabsContent>
        <TabsContent value="draining">
          <Draining />
        </TabsContent>
      </Tabs>

      <div className="w-full flex flex-col items-center justify-center my-18">
        <h1 className="text-3xl font-bold mb-2">
          This project still under development
        </h1>
        <p className="text-gray-600">ABDELDJALILE LAFKIR | 213 676 04 17 42</p>
      </div>
    </div>
  );
}
