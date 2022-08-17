import { LoaderFunction, redirect } from "@remix-run/node";
import HomeContainer from "~/src/components/home/homeContainer";

const logado = true

export const loader: LoaderFunction = () => {
  if (logado) {
    return redirect("/home")
  }

  return redirect("/")

}

export default function Index() {
  return (
    <div>
      
    </div>
  );
}
