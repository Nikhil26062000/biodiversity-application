import React, { useState } from "react";

const Form = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  return (
    <div className="w-[290px] max-h-[350px] mx-auto flex flex-col gap-[18px]  ">
      <section className=" w-full max-h-[278px]">
        <form className="flex flex-col gap-[18px] ">
          <div
            className={`w-[290px] h-[56px] ${
              focusedInput === "email" ? "border-none" : "border-2 border-black"
            } bg-white`}
          >
            <input
              type="email"
              placeholder="Email"
              required
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78]  p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                focusedInput === "email"
                  ? "border-2 border-black"
                  : "border-none"
              } bg-white`}
              style={{ boxSizing: "border-box" }}
            />
          </div>

          <div
            className={`w-[290px] h-[56px] ${
              focusedInput === "username"
                ? "border-none"
                : "border-2 border-black"
            } bg-white`}
          >
            <input
              type="text"
              placeholder="Username"
              required
              onFocus={() => setFocusedInput("username")}
              onBlur={() => setFocusedInput(null)}
              className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                focusedInput === "username"
                  ? "border-2 border-black"
                  : "border-none"
              } bg-white`}
              style={{ boxSizing: "border-box" }}
            />
          </div>

          <div
            className={`w-[290px] h-[56px] ${
              focusedInput === "password"
                ? "border-none"
                : "border-2 border-black"
            } bg-white`}
          >
            <input
              type="password"
              placeholder="Password"
              required
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
              className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                focusedInput === "password"
                  ? "border-2 border-black"
                  : "border-none"
              } bg-white`}
              we
              are
              style={{ boxSizing: "border-box" }}
            />
          </div>

         <button className="font-inter w-[290px] h-[56px] bg-[#125B57] text-white font-[700] text-[16px] leading-[19.36px] text-center rounded-[40px]">Create account</button>
        </form>
      </section>

      <section className="">
          <p className=" font-inter text-[18px]leading-[21.78px] font-[400]  text-center">Already have an account?<span className="cursor-pointer font-[700] font-inter leading-[21.78px] text-[18px] text-center">
          Log in
          </span></p>
      </section>
    </div>
  );
};

export default Form;
