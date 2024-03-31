import { TypeRim } from "@/ui/components/type-rim";
import { KeyBoard } from "@/ui/layouts/key-board";

export default function Page() {
  return (
    <>
      <TypeRim />

      <KeyBoard />

      <div className="w-full pt-14 px-14 text-center">
        <textarea
          name=""
          id=""
          cols={30}
          rows={12}
          placeholder="Type here..."
          className="w-4/5 p-3 rounded-2xl bg-transparent text-white border-[#6b6b6b] border-[1px] outline-none resize-none focus-visible:border-[#aaaaaa]"
        ></textarea>
      </div>
    </>
  );
}
