import { LogoFooter } from "./Svgs/Logoft";

export function Footer() {
    return (
      <footer className="flex items-center justify-between pt-6 border-t border-gray-600">
        <div className="flex items-center gap-4">
          <LogoFooter />
          <span className="text-gray-300 text-sm" >
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <span className="text-gray-300 text-sm ">
          Políticas de privacidade
        </span>
      </footer>
    );
}