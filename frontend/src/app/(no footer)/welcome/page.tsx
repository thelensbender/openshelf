export default function Welcome() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <button className="text-caramel text-sm flex justify-end w-full">Skip</button>
      <div>
        <div>{/* Logo */}</div>
        {/* Heading and description */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Welcome to Open Shelf</h1>
          <p className="text-sm text-outline-strong">
            Find a book and borrow it in two taps.
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        type="button"
        className="w-full bg-mustard text-black text-sm p-2 rounded-xl cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
