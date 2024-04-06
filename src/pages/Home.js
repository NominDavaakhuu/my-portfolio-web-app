import { useTitle } from "../hooks/useTitle";
export const Home = () => {
    useTitle("Home");
    return (
        <main>
          <section className="WelcomeMessage">
            <h1>The default page when first visiting the site.

                Includes a hero image and some text</h1>
            <h1>Hi , I am Nomin-Erdene. I am a software 
                engineer student based in Brisbane, Australia.</h1>     
          </section>
          <button>Hire me</button>
        </main>
      );
    }