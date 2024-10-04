import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/signup?email=${email}`)
  };

  return (
    <div className="hero-bg relative">
      {/* navbar */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <img src="/netflix-logo.png" alt="logo" className="w-32 md:w-52" />
        <Link
          to={"/login"}
          className="text-white bg-red-600 py-1 px-2 rounded-md hover:bg-red-700"
        >
          Sign in
        </Link>
      </header>

      {/* hero section */}
      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg mb-4">Watch anywhere, Cancel anytime.</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form
          className="flex flex-col md:flex-row gap-4 w-1/2"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email address"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="py-1 md:py-2 px-2 lg:px-6 bg-red-600 text-xl lg:text-2xl rounded-md hover:bg-red-700 flex items-center justify-center">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      {/* seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true"></div>

      {/* 1st section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col md:flex-row px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          {/* right side */}
          <div className="flex-1 relative">
            <img src="/tv.png" alt="tv image" className="mt-4 z-20 relative" />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true"></div>

      {/*  2nd section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 ">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="stranger-things"
                className="mt-4"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="movie poster"
                  className="h-full"
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-0">
                    <span className="font-bold text-md lg:text-lg">
                      Stranger Things
                    </span>
                    <p className="text-sm text-blue-500">Downloading...</p>
                  </div>
                </div>
                <div>
                  <img
                    src="/download-icon.gif"
                    alt="icon"
                    className="w-16 h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>

      {/* seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true"></div>

      {/* 3rd section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col md:flex-row px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          {/* right side */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/device-pile.png"
              alt="device image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* seperator */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true"></div>

      {/* 4th section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 ">
            <img
              src="/kids.png"
              alt="kids"
              className="mt-4"
            />
          </div>

          {/* right side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Create profiles for kids
            </h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with the fovorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
