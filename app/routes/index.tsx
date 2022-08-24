import { LoaderFunction, redirect } from "@remix-run/node";

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
