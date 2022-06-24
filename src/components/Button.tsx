import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonProps{
    buttonType:'color' | 'transparent'
}


export function Btn(props: ButtonProps) {
    return (
      <>
        {props.buttonType === "color" ? (
          <a className="cursor-pointer bg-green-700 px-2 py-2 h-14   w-[240px]  text-center text-sm text-white rounded hover:bg-green-500 font-bold flex items-center justify-center transition-colors ">
            <DiscordLogo size={24} className="mr-2" weight="light" />
            COMUNIDADE NO DISCORD
          </a>
        ) : (
          <a className="cursor-pointer bg-transparent px-2 py-2 h-14   w-[240px]  text-center text-sm hover:bg-blue-500 hover:text-gray-900 hover:border-gray-200 text-blue-500 rounded border border-blue-500 font-bold flex items-center justify-center transition-colors">
            <Lightning size={24} className="mr-2" weight="light" />
            ACESSE O DESAFIO
          </a>
        )}
      </>
    );
}