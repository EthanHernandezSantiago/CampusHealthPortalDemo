import Header from "./src/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="text-center">
        <h1 className="text-4xl mt-40 mb-4 font-bold">Protecting Your Health Before You Are Sick</h1> 
        <h2 className="text-2xl mt-4 pl-10 pr-10">Inspect current illness being reported in your area, or report when your ill to inform others around you. Go to the dashboard to see what is going around, or create your profile to report</h2>
        <h3 className="text-xl mt-4">Campus Health Portal Team - Alicia Feyerherm, Nicholas McCoy, Blanaca Hurtado, Bradley Blue, Ethan Herandez-Santiago</h3>
      </div>
      <div className="flex justify-center mt-5">
        <button className="border-2 border-black p-2 mr-4 rounded-2xl shadow-2xl">Create Accout</button>
        <button className="border-2 border-black p-2 ml-4 rounded-2xl shadow-2xl">Log In</button>
      </div>
    </div>
  );
}
