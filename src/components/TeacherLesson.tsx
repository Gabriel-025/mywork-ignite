import { SlackLogo } from "phosphor-react"

export function Teacher() {
    return (
      <div className="flex items-center gap-4 py-3  mt-6 ">
        <img
          src="https://avatars.githubusercontent.com/u/78861515?v=4"
          className="rounded-full w-[63.38px] h-[63.38px] border-[2px] border-blue-500"
        />
        <div className="flex flex-col leading-relaxed">
          <strong className="text-2xl block font-bold  ">
            Gabriel Machado
          </strong>
          <span className="text-sm  text-gray-200 block">
            Desenvolvedor JR. no SPRINTA
          </span>
        </div>
      </div>
    );
}