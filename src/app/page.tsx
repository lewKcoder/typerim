"use client";

import { TypeRim } from "@/ui/components/type-rim";
import { KeyBoard } from "@/ui/layouts/key-board";

export default function Page() {
  return (
    <>
      <TypeRim />

      <div className="block lg:hidden relative">
        <div className="gradient absolute w-full h-80 top-[60px] left-2/4 translate-x-[-50%] blur-2xl rounded-[160px] z-[-1]" />

        <div className="absolute w-100 top-[120px] left-2/4 translate-x-[-50%] text-center">
          <svg
            width="212"
            height="100"
            viewBox="0 0 212 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="118"
              width="94"
              height="100"
              fill="url(#pattern0_1221_452)"
            />
            <rect width="84" height="100" fill="url(#pattern1_1221_452)" />
            <rect
              y="10.1187"
              width="3"
              height="116"
              transform="rotate(-44.9286 0 10.1187)"
              fill="black"
            />
            <defs>
              <pattern
                id="pattern0_1221_452"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_1221_452"
                  transform="matrix(0.0106383 0 0 0.01 -0.0319149 0)"
                />
              </pattern>
              <pattern
                id="pattern1_1221_452"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image1_1221_452"
                  transform="matrix(0.0119048 0 0 0.01 -0.0952381 0)"
                />
              </pattern>
              <image
                id="image0_1221_452"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVR4nO3dO07DQBRG4b+CRRBK2ByPhfHqYAtAA2wkEgH6iyyZxhQ4KHZOJueTpgRN7pkBIqQ4kSRJkiRJfIsk10k+kpQrm5xBN9O7JKfrxFgaIVMfxGU/6z91N8NbkVlmcDUmiD+mMtuBXI0JMvwibdba8zXItAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBiktSCuTDoDg4R1yAyS7UcwSBoKos0yCIxBYIM2yEwMAmMQGIPsKH+H7HoQP2o8s70pfB8T5Bbw7rX2ZN2MCdI918LHVWTyGN2MTzLSon+UwgpwiqqxtepvxugYFDVYtO+3d8ogLGUQljIISxmEpQwyj8MkF0meknwB/gytwfrq93ae5CCNO0ryBhh6jVyv/Z6bvRm7FKP69dLqTbkEDLf+uc7SoOfBi7wf++jRmXV7ehjs9TEN+hy8SGKMH8eDvXb/kmhO7fhqzrYHWgYxCNq2T3h5QyRJkiQpv3wDLnOsgJSTXqcAAAAASUVORK5CYII="
              />
              <image
                id="image1_1221_452"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVR4nO3dPW4TURhG4bcJHfY2IGwEGqLsK04iZTEoYhn5o4YdkHSOdNBIU11SGLtg3iN/0m3Hz7l3POPOyXGOc5xlzackV0nuk7wkYWHrZbZdJjmNeN4luUnyuoBNZ8c1Wa+TnER4GN8XsMHsuW5th3KzgE3lwDV9UzTvjPEx9ZDka5L3e1zv1z9s4s89rj+ZzpI8DtfaJvkYwVy9cRirA673ZcdDmQ7j8wGfs07yNFxzE8E8DFHT3dcy54P9LoL5PUTt85j6X7Ma7FNL/YyPkrah3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8LotyvC6Lcrwui3K8Lotz/1xz/4H5hcz/cYWfpmfPBfhfBXA5Rj0nWWf6sk/wY7BcRzGmS1yHsab77VlnerGbbeBjbJB8imes3Xo5taxPRnCS5XcCmsuf6Njeo5mT+pmwXsMHsuLbzO1B3GOM7ZTP/YnlewKYzrOfZdmF6ZxznOFHMH6WqR29b9PZNAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>

          <p className="text-base font-bold pt-6">パソコンからご利用ください</p>
        </div>

        <style jsx>
          {`
            .gradient {
              background: linear-gradient(
                150deg,
                rgba(255, 0, 0, 0.2) 0%,
                rgba(255, 143, 0, 0.2) 10%,
                rgba(255, 250, 0, 0.2) 20%,
                rgba(0, 255, 1, 0.2) 30%,
                rgba(0, 255, 169, 0.2) 40%,
                rgba(0, 239, 255, 0.2) 50%,
                rgba(0, 89, 255, 0.2) 60%,
                rgba(83, 0, 255, 0.2) 70%,
                rgba(237, 0, 255, 0.2) 80%,
                rgba(255, 0, 161, 0.2) 90%,
                rgba(255, 0, 0, 0.2) 100%
              );
            }
          `}
        </style>
      </div>

      <div className="hidden lg:block">
        <KeyBoard />

        <div className="w-full pt-14 px-14 text-center">
          <textarea
            name=""
            id=""
            cols={30}
            rows={12}
            placeholder="Type here..."
            className="w-4/5 p-3 rounded-2xl bg-transparent text-white border-[#3f3f3f] border-[1px] outline-none resize-none focus-visible:border-[#aaaaaa] placeholder:text-[#3f3f3f]"
          ></textarea>
        </div>
      </div>
    </>
  );
}
