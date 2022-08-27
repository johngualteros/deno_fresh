/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import SayHello from "../islands/SayHello.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1>Hello World</h1>
      <Counter start={3} />
      <SayHello/>
    </div>
  );
}
