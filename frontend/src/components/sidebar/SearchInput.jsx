import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 p-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered !rounded-full px-4 py-2 "
      />
      <button
        type="submit"
        className="btn btn-circle bg-green-500 text-white hover:bg-green-600"
      >
        <IoSearchSharp className="w-6 h-6 outline-none"/>
      </button>
    </form>
  );
};

export default SearchInput;
