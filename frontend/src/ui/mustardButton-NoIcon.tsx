export default function MustardButtonNoIcon({text} : {text:string}) {
  return (
          <button
        type="submit"
        className="w-full bg-mustard text-black text-sm p-2 rounded-xl cursor-pointer"
      >
        {text}
      </button>
  );
}
