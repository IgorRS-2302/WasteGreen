import Logo from "./logo";

function HeaderHome() {
  return (
    <div className="w-full border flex p-5">
      <div className="h-fit   ">
        <div className="h-7">
          <Logo />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export { HeaderHome };
