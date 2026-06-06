import HenrikNature from "../assets/img/HenrikNature.png";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

export default function IntroSection() {
  return (
    <section className="py-12 h-1/2 flex items-center">
      <div className="flex flex-col md:flex-row items-center gap-10 container mx-auto px-4">
        <div className="flex-1 w-2/3 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-300">
            Hello, I am Henrik Leutscher
          </h1>
          <p className="text-lg text-gray-300">Junior Front-End Developer</p>
          <div>
            <a
              href="https://github.com/HenrikLeutscher"
              className="mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub icon"
                className="inline w-12 h-12 mr-2 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/henrik-leutscher/"
              className="mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn icon"
                className="inline w-12 h-12 mr-2 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/henrik8787/"
              className="mt-4 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram icon"
                className="inline w-12 h-12 mr-2 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 w-full md:w-1/3 flex justify-center">
          <img
            src={HenrikNature}
            alt="Profile picture of Henrik Leutscher"
            className="rounded-full w-1/2 h-1/2 md:w-80 md:h-80 mt-6 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
